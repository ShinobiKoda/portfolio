import { motion, AnimatePresence } from "motion/react";

// Re-export motion/AnimatePresence to keep component files clean
export { motion, AnimatePresence };

// Navbar entrance: slides down and fades in, then staggers children
export const navVariants = {
  initial: { y: -24, opacity: 0 },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 16,
      mass: 0.9,
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
} as const;

// Logo: subtle pop-in with a slight rotation settle
export const logoVariants = {
  initial: { opacity: 0, scale: 0.9, rotate: -8 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 180, damping: 12 },
  },
} as const;

export const logoHover = {
  scale: 1.03,
  rotate: 0.5,
} as const;

// Nav links: rise and fade in; hover gives a gentle emphasis
export const linkVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
} as const;

export const linkHover = {
  scale: 1.05,
} as const;

// Mobile menu button: fades in, rotates slightly on hover, taps down on press
export const menuButtonVariants = {
  initial: { opacity: 0, x: 12 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 180, damping: 14 },
  },
} as const;

export const menuHover = {
  rotate: 8,
  scale: 1.05,
} as const;

export const tapPress = {
  scale: 0.94,
} as const;

// Common snappy hover/tap transition
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

// Sidebar overlay: fades in under the drawer
export const overlayVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
} as const;

// Sidebar drawer: slides in from the right with spring
export const sidebarVariants = {
  closed: {
    x: "100%",
    opacity: 0.4,
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 22,
      mass: 0.9,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
} as const;

// Sidebar link items: staggered rise
export const sidebarLinkVariants = {
  closed: { opacity: 0, y: 10 },
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
} as const;

// Close button: subtle pop
export const closeButtonVariants = {
  closed: { opacity: 0, scale: 0.95, rotate: -6 },
  open: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 220, damping: 16 },
  },
} as const;

// =========================================
// Home (Hero) animations
// =========================================

// Whole hero container: fade/slide and stagger children
export const heroContainerVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 20,
      mass: 0.9,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
} as const;

// Generic child rise-in
export const heroItemVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 240, damping: 18 },
  },
} as const;

// Social list item: slight pop and rise
export const socialItemVariants = {
  initial: { opacity: 0, scale: 0.9, y: 12 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
} as const;

// Social list container: animate in and stagger children
export const socialListVariants = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 20,
      when: "beforeChildren",
      delayChildren: 0.05,
      staggerChildren: 0.08,
    },
  },
} as const;

// Buttons: subtle rise-in
export const buttonItemVariants = heroItemVariants;

// Hover/tap micro-interactions for icons and buttons
export const iconHover = { scale: 1.08, y: -2 } as const;
export const buttonHover = { scale: 1.03 } as const;

// Background overlay fade
export const blurOverlayVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
} as const;

// =========================================
// Intro (Loader + Hello) animations
// =========================================

export const introContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
} as const;

export const helloText = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 240, damping: 18 },
  },
} as const;

export const helloChar = {
  initial: { opacity: 0, y: 10, rotate: -5 },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
} as const;

export const loaderIntro = {
  initial: { opacity: 0, scale: 0.9, rotate: -10 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 220, damping: 18 },
  },
} as const;

// =========================================
// Seasonal banner (toast) animations
// =========================================
export const seasonalBannerVariants = {
  initial: { opacity: 0, y: -16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.25 },
  },
} as const;
