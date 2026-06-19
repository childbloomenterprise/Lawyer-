// Single source of truth for motion — one easing language, one timing scale.
// Consistency reads as luxury; randomness reads as cheap.

import type { Variants } from "framer-motion";

/** The house easing curve. Used everywhere. */
export const EASE_LUXE = [0.22, 1, 0.36, 1] as const;
export const EASE_SMOOTH = [0.65, 0, 0.35, 1] as const;

/** Timing scale (seconds). */
export const DUR = {
  micro: 0.2,
  fast: 0.4,
  base: 0.7,
  slow: 0.9,
  reveal: 1.1,
} as const;

/** Standard reveal-up used by Reveal/RevealItem. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.slow, ease: EASE_LUXE },
  },
};

/** Stagger container. */
export const stagger = (amount = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: amount } },
});

/** Word / char reveal for kinetic type (mask-up). */
export const kineticChild: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: DUR.base, ease: EASE_LUXE } },
};
