
import { motion } from "motion/react";
import { useTheme } from "../hooks/useTheme";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

interface Props {
  className?: string;
  size?: number; // px
}

export default function ThemeSwitchButton({
  className = "",
  size = 40,
}: Props) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const SunIcon = motion(IoMdSunny);
  const MoonIcon = motion(FaMoon);

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      whileTap={{ scale: 0.95 }}
      className={
        "flex items-center justify-center rounded-full cursor-pointer" +
        className
      }
      style={{ width: size, height: size }}
    >
      {isDark ? (
        <SunIcon
          className="w-5 h-5 text-white"
          initial={{ rotate: -20, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
          aria-hidden
        />
      ) : (
        <MoonIcon
          className="w-5 h-5 text-white"
          initial={{ rotate: 10, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
          aria-hidden
        />
      )}
    </motion.button>
  );
}