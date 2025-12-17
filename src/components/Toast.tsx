import { useEffect, useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  seasonalBannerVariants,
  hoverTransition,
  tapPress,
  tapTransition,
} from "./animations/motion";
import { IoClose } from "react-icons/io5";

function getHolidayMessage(date: Date) {
  const month = date.getMonth(); // 0-based
  const day = date.getDate();

  if (month === 0 && day === 1) return "Happy New Year!";
  if (month === 11 && day === 25) return "Merry Christmas!";
  if (month === 11) return "Happy Holidays!";
  return null;
}

function storageKeyFor(date: Date) {
  // Manual dismissal key scoped per day (YYYY-MM-DD)
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `holiday-toast-dismissed-manual-${y}-${m}-${d}`;
}

export default function Toast() {
  const now = useMemo(() => new Date(), []);
  const message = useMemo(() => getHolidayMessage(now), [now]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!message) return;
    try {
      const key = storageKeyFor(now);
      const dismissed =
        typeof window !== "undefined" && localStorage.getItem(key);
      if (!dismissed) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, [message, now]);

  const onClose = (persist: boolean) => {
    try {
      if (persist) {
        const key = storageKeyFor(now);
        localStorage.setItem(key, "1");
      }
    } catch {}
    setOpen(false);
  };

  // Auto-dismiss after a few seconds when shown
  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => onClose(false), 6000); // 6 seconds
    return () => window.clearTimeout(t);
  }, [open]);

  if (!message) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={seasonalBannerVariants}
          role="status"
          aria-live="polite"
        >
          <motion.div
            className="w-full max-w-3xl rounded-lg border border-white/10 bg-white/5 backdrop-blur px-4 py-3 shadow-lg flex items-center gap-3"
            whileHover={{ scale: 1.01, y: -1 }}
            transition={hoverTransition}
          >
            <span
              className="inline-block h-2.5 w-2.5 rounded-full bg-(--text-primary)"
              aria-hidden
            />
            <p className="flex-1 text-sm sm:text-base text-white">{message}</p>
            <motion.button
              onClick={() => onClose(true)}
              whileTap={{ ...tapPress, transition: tapTransition }}
              className="text-(--text-gray) hover:text-white transition-colors"
              aria-label="Dismiss message"
            >
              <IoClose size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
