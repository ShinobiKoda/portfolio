import { motion, AnimatePresence } from "motion/react";

export { motion, AnimatePresence };

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
      staggerChildren: 0.015,
    },
  },
} as const;

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

export const overlayVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
} as const;

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
      staggerChildren: 0.015,
    },
  },
} as const;

export const sidebarLinkVariants = {
  closed: { opacity: 0, y: 10 },
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
} as const;

export const closeButtonVariants = {
  closed: { opacity: 0, scale: 0.95, rotate: -6 },
  open: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 220, damping: 16 },
  },
} as const;

export const pageTransitionVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

export const heroContainerVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
      mass: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.02,
    },
  },
} as const;

export const heroItemVariants = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 20 },
  },
} as const;

export const socialItemVariants = {
  initial: { opacity: 0, scale: 0.95, y: 6 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 20 },
  },
} as const;

export const socialListVariants = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
      when: "beforeChildren",
      delayChildren: 0,
      staggerChildren: 0.02,
    },
  },
} as const;

export const sidebarSocialListVariants = {
  closed: { opacity: 0, y: 6 },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
      when: "beforeChildren",
      delayChildren: 0,
      staggerChildren: 0.02,
    },
  },
} as const;

export const buttonItemVariants = heroItemVariants;

export const iconHover = { scale: 1.08, y: -2 } as const;
export const buttonHover = { scale: 1.03 } as const;

export const introContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
} as const;

export const helloText = {
  initial: { opacity: 0, y: 4 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 20 },
  },
} as const;

export const helloChar = {
  initial: { opacity: 0, y: 6, rotate: -2 },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 400, damping: 22 },
  },
} as const;

export const loaderIntro = {
  initial: { opacity: 0, scale: 0.95, rotate: -5 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 350, damping: 20 },
  },
} as const;

export const seasonalBannerVariants = {
  initial: { opacity: 0, y: -8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 22 },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2 },
  },
} as const;

export const bounceDropVariants = {
  initial: { opacity: 0, y: -16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      stiffness: 400,
      damping: 24,
    },
  },
} as const;

export const sectionContainerVariants = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
      mass: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.015,
    },
  },
} as const;

export const titleLineGrowVariants = {
  initial: { width: 0 },
  animate: {
    width: "50%",
    transition: { type: "spring", stiffness: 280, damping: 24 },
  },
} as const;

export const listStaggerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0,
      staggerChildren: 0.02,
    },
  },
} as const;

export const projectCardVariants = {
  initial: { opacity: 0, y: 6, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 22 },
  },
} as const;

export const projectCardHover = {
  scale: 1.01,
  y: -3,
} as const;

export const stackIconTooltipVariants = {
  rest: { opacity: 0, y: 6, scale: 0.96 },
  hover: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 22 },
  },
} as const;

export const stackIconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.08 },
} as const;

// =========================================
// Skills section animations
// =========================================
export const skillsContainerVariants = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
      when: "beforeChildren",
      staggerChildren: 0.015,
    },
  },
} as const;

export const skillsGridVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0,
      staggerChildren: 0.015,
    },
  },
} as const;

export const skillCategoryVariants = {
  initial: { opacity: 0, y: 6, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 22 },
  },
} as const;

export const skillItemVariants = {
  initial: { opacity: 0, y: 4 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 22 },
  },
} as const;

export const skillItemHover = { scale: 1.03, y: -2 } as const;

export const navLinkVariants = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
} as const;

export const navLinkUnderlineVariants = {
  initial: { width: "0%" },
  hover: {
    width: "100%",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
} as const;
