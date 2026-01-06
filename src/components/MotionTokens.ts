/**
 * Motion Tokens - Consistent motion system for the portfolio
 * Inspired by MetaLab's motion-first design approach
 */

// Duration tokens
export const durations = {
  fast: 0.2,
  med: 0.4,
  slow: 0.6,
  slower: 0.8,
} as const;

// Primary brand easing (premium, confident)
export const easing = {
  primary: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // cubic-bezier
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
  bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
} as const;

// Common animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.med,
      ease: easing.primary,
    }
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: durations.med,
      ease: easing.primary,
    }
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: durations.med,
      ease: easing.primary,
    }
  },
};

// Stagger container for children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  },
};

// Mask reveal (clip-path from top)
export const maskReveal = {
  hidden: { 
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
  },
  visible: { 
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: durations.slow,
      ease: easing.primary,
    }
  },
};

// Frame overlay animation (lines animate in)
export const frameOverlay = {
  hidden: {
    scaleX: 0,
    scaleY: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: durations.slow,
      ease: easing.primary,
      staggerChildren: 0.05,
    }
  },
};

// Hover variants
export const hoverLift = {
  rest: { y: 0 },
  hover: { 
    y: -8,
    transition: {
      duration: durations.fast,
      ease: easing.primary,
    }
  },
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      duration: durations.fast,
      ease: easing.primary,
    }
  },
};

// Scroll-triggered reveal
export const scrollReveal = {
  hidden: { 
    opacity: 0, 
    y: 60,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easing.primary,
    }
  },
};


