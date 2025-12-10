import { useEffect, useRef } from "react";
import { toast, Slide } from "react-toastify";

function getGreeting(): { key: string; message: string } | null {
  const now = new Date();
  const m = now.getMonth(); // 0 = Jan
  const d = now.getDate();
  const y = now.getFullYear();
  const day = now.getDay(); // 0 = Sun, 6 = Sat

  // 🎉 1. Happy New Year (highest priority)
  if (m === 0 && d === 1) {
    return { key: `greet:newyear:${y}`, message: "🎉 Happy New Year!" };
  }

  // 🎄 2. Happy Holidays (Dec 1–31)
  if (m === 11) {
    return { key: `greet:holidays:${y}`, message: "🎄 Happy Holidays!" };
  }

  // 📅 3. Happy New Month (first day of every month)
  if (d === 1) {
    return {
      key: `greet:newmonth:${m + 1}-${y}`,
      message: "📅 Happy New Month!",
    };
  }

  // 😎 4. Happy Weekend (Saturday or Sunday)
  if (day === 0 || day === 6) {
    return {
      key: `greet:weekend:${y}-${m}-${d}`,
      message: "😎 Enjoy your weekend!",
    };
  }

  return null;
}

export default function SeasonalGreeting({
  delayMs = 200,
  showMs = 3000,
}: {
  delayMs?: number;
  showMs?: number;
}) {
  const greeting = getGreeting();
  const didShowRef = useRef(false);

  useEffect(() => {
    if (!greeting) return;
    if (didShowRef.current) return; 
    didShowRef.current = true;

    const delayTimer = setTimeout(() => {
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

  return null;
}
