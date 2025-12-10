import { useEffect, useMemo } from "react";
import { toast, Slide } from "react-toastify";

function getGreeting(): { key: string; message: string } | null {
  const now = new Date();
  const m = now.getMonth(); // 0-based
  const d = now.getDate();
  const y = now.getFullYear();

  // Jan 1 takes priority over any other check
  if (m === 0 && d === 1) {
    return { key: `greet:newyear:${y}`, message: "Happy New Year!" };
  }

  if (m === 11 && d >= 1 && d <= 31) {
    return { key: `greet:holidays:${y}`, message: "Happy Holidays!" };
  }

  return null;
}

export default function SeasonalGreeting({
  delayMs = 200,
  showMs = 2800,
}: {
  delayMs?: number;
  showMs?: number;
}) {
  const greeting = useMemo(getGreeting, []);

  useEffect(() => {
    if (!greeting) return;

    const seen = localStorage.getItem(greeting.key);
    if (seen === "1") return;

    const delayTimer = setTimeout(() => {
      // mark as seen when showing to avoid repeated displays on remount
      localStorage.setItem(greeting.key, "1");
      toast.info(greeting.message, {
        autoClose: showMs,
        pauseOnHover: true,
        closeOnClick: true,
        hideProgressBar: false,
        transition: Slide,
      });
    }, delayMs);

    return () => clearTimeout(delayTimer);
  }, [greeting, delayMs, showMs]);

  return null; // toast is rendered via ToastContainer at app root
}
