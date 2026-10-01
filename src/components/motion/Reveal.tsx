"use client";

import { Box, type BoxProps } from "@chakra-ui/react";
import { motion, useReducedMotion, type Transition } from "motion/react";
import type { ReactNode } from "react";

/** Design reveal easing: cubic-bezier(.2,.7,.2,1). */
export const REVEAL_EASE = [0.2, 0.7, 0.2, 1] as const;
export const REVEAL_DURATION = 0.9;

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  li: motion.li,
  ul: motion.ul,
  span: motion.span,
  p: motion.p,
} as const;

export type RevealTag = keyof typeof motionTags;

export type RevealProps = Omit<BoxProps, "as" | "children"> & {
  children?: ReactNode;
  /** Element to render. Default "div". */
  as?: RevealTag;
  /** Delay in seconds (use small steps, e.g. 0.08 per item, for staggers). */
  delay?: number;
  /** Rise distance in px. Default 28. */
  y?: number;
};

/**
 * Fades + rises its children into view once (IntersectionObserver via
 * motion's whileInView, bottom margin −8%).
 *
 * Reduced motion: the element renders fully visible. This is enforced both
 * in CSS (`prefers-reduced-motion: reduce` → opacity 1 / no transform, which
 * also covers the first paint before hydration) and in JS (zero-duration
 * transition), so server and client markup are identical.
 *
 * Don't wrap above-the-fold hero content — it would start invisible until
 * hydration (hurts LCP).
 *
 * @example
 * <Reveal delay={0.1} display="grid" gap="6">…</Reveal>
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  ...boxProps
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motionTags[as];

  const transition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: REVEAL_DURATION, ease: REVEAL_EASE, delay };

  return (
    <Box
      asChild
      _motionReduce={{ opacity: "1 !important", transform: "none !important" }}
      css={{
        "@media print": {
          opacity: "1 !important",
          transform: "none !important",
        },
      }}
      {...boxProps}
    >
      <MotionTag
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        transition={transition}
      >
        {children}
      </MotionTag>
    </Box>
  );
}
