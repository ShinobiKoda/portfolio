import { motion, AnimatePresence } from "motion/react";

export { motion, AnimatePresence };

// ─── Shared easing curves ───────────────────────────────────────
const smooth = [0.25, 0, 0.35, 1] as const;
const snappy = [0.2, 0, 0, 1] as const;

// ─── Universal entrance variants ────────────────────────────────
// Use on any child inside a staggerContainer
export const fadeUp = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: smooth },
  },
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: smooth },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
} as const;

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: smooth },
  },
} as const;

// ─── Container (single-level stagger) ───────────────────────────
// Place on the OUTERMOST wrapper. Children inherit the stagger.
export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.04,
    },
  },
} as const;

// Faster stagger for small groups (nav links, social icons)
export const staggerFast = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.15,
      staggerChildren: 0.03,
    },
  },
} as const;

// ─── Navbar ─────────────────────────────────────────────────────
export const navEnter = {
  initial: { y: -12, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: snappy },
  },
} as const;

export const navLinkVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.25, ease: smooth },
  },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
} as const;

export const navLinkUnderlineVariants = {
  initial: { width: "0%" },
  hover: {
    width: "100%",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
} as const;

// ─── Sidebar (mobile menu) ──────────────────────────────────────
export const slideIn = {
  closed: { x: "100%", opacity: 0.4 },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: snappy,
      staggerChildren: 0.04,
    },
  },
} as const;

export const sidebarLinkVariants = {
  closed: { opacity: 0, x: 16 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: smooth },
  },
} as const;

export const overlayVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
} as const;

// ─── Page transitions ───────────────────────────────────────────
export const pageTransitionVariants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: smooth },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.18, ease: smooth },
  },
} as const;

// ─── Section entrance (scroll-triggered) ────────────────────────
export const sectionReveal = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: smooth,
      staggerChildren: 0.04,
    },
  },
} as const;

// ─── Decorative line ────────────────────────────────────────────
export const lineGrow = {
  initial: { width: 0 },
  animate: {
    width: "50%",
    transition: { duration: 0.5, ease: smooth },
  },
} as const;

// ─── Intro screen ───────────────────────────────────────────────
export const introContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
} as const;

export const introItem = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: smooth },
  },
} as const;

// ─── Seasonal banner ────────────────────────────────────────────
export const seasonalBannerVariants = {
  initial: { opacity: 0, y: -8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: smooth },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2 },
  },
} as const;

// ─── Hover & tap interactions (keep springs — feel natural) ─────
export const hoverScale = { scale: 1.03 } as const;
export const hoverLift = { scale: 1.03, y: -2 } as const;
export const tapPress = { scale: 0.95 } as const;

export const hoverTransition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
} as const;

export const tapTransition = {
  type: "spring",
  stiffness: 600,
  damping: 28,
} as const;

// ─── Tooltip ────────────────────────────────────────────────────
export const tooltipVariants = {
  rest: { opacity: 0, y: 6, scale: 0.96 },
  hover: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.15, ease: smooth },
  },
} as const;

export const tooltipIconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.08 },
} as const;

// ─── Project card ───────────────────────────────────────────────
export const cardHover = { scale: 1.01, y: -3 } as const;

// ─── Skill item ─────────────────────────────────────────────────
export const skillItemHover = { scale: 1.03, y: -2 } as const;
