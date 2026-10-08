import { Variants } from "framer-motion";

export const defaultCubicBezier: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const transitionDefaults = {
  ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
  duration: 0.8,
};

export const springSlow = {
  type: "spring",
  stiffness: 150,
  damping: 20,
};

export const springSnappy = {
  type: "spring",
  stiffness: 300,
  damping: 25,
};

// Fade up with slight scale
export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: defaultCubicBezier,
      delay: custom * 0.1,
    },
  }),
};

// Stagger container
export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

// Character / word reveal animation
export const textWordVariant: Variants = {
  hidden: {
    y: "120%",
    opacity: 0,
    rotateZ: 2,
  },
  visible: {
    y: "0%",
    opacity: 1,
    rotateZ: 0,
    transition: {
      duration: 0.9,
      ease: defaultCubicBezier,
    },
  },
};

// Scale in for cards / imagery
export const scaleInVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: defaultCubicBezier,
      delay,
    },
  }),
};

// Curtain reveal for image wipe
export const curtainRevealVariant: Variants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0.5,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: defaultCubicBezier,
    },
  },
};

// Page transition variant
export const pageTransitionVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};
