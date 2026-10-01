import { defineRecipe } from "@chakra-ui/react";

/**
 * Extends (deep-merges into) Chakra's default button recipe.
 * - Existing Chakra variants (subtle, surface, plain) and sizes (2xs–sm, 2xl)
 *   keep working.
 * - solid / outline / ghost are restyled to the design; `accent` is new.
 * - md / lg / xl are restyled to the design's pill sizes (heights kept so
 *   IconButton stays square at md/lg).
 */
export const buttonRecipe = defineRecipe({
  base: {
    borderRadius: "pill",
    fontWeight: "500",
    transitionProperty: "background-color, color, border-color, box-shadow",
    transitionDuration: "ui",
    transitionTimingFunction: "ease",
    _motionReduce: { transition: "none" },
  },
  variants: {
    variant: {
      /** Ink pill → green on hover. */
      solid: {
        bg: "bg.solid",
        color: "fg.inverted.strong",
        borderColor: "transparent",
        _hover: { bg: "bg.accent", color: "fg.onAccent" },
        _expanded: { bg: "bg.accent", color: "fg.onAccent" },
      },
      /** 1px ink outline → green border + text on hover. */
      outline: {
        bg: "transparent",
        color: "fg",
        borderWidth: "1px",
        borderColor: "border.strong",
        _hover: {
          bg: "transparent",
          borderColor: "border.accent",
          color: "fg.accent",
        },
        _expanded: { borderColor: "border.accent", color: "fg.accent" },
      },
      /** Green pill → paper/ink on hover (for dark sections). */
      accent: {
        bg: "bg.accent",
        color: "fg.onAccent",
        borderColor: "transparent",
        _hover: { bg: "bg.canvas", color: "fg" },
        _expanded: { bg: "bg.canvas", color: "fg" },
      },
      ghost: {
        bg: "transparent",
        color: "fg.secondary",
        _hover: { bg: "bg.muted", color: "fg.accent" },
        _expanded: { bg: "bg.muted", color: "fg.accent" },
      },
    },
    size: {
      /** 9px / 16px, 14px (nav CTA). */
      md: {
        h: "38px",
        minW: "38px",
        px: "16px",
        fontSize: "14px",
        lineHeight: "1.4",
        gap: "2",
      },
      /** 16px / 24px, 15px (hero CTAs). */
      lg: {
        h: "52px",
        minW: "52px",
        px: "24px",
        fontSize: "15px",
        lineHeight: "1.3",
        gap: "10px",
      },
      /** Fluid, 20–28px text (contact CTA). */
      xl: {
        h: "auto",
        minW: "auto",
        px: "clamp(32px, 3.4vw, 52px)",
        py: "clamp(20px, 2vw, 28px)",
        fontSize: "clamp(20px, 2vw, 28px)",
        lineHeight: "1.2",
        letterSpacing: "-0.02em",
        gap: "3",
      },
    },
  },
});
