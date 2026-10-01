import { defineRecipe } from "@chakra-ui/react";

/**
 * Extends Chakra's default link recipe (`underline` and `plain` keep
 * existing; `plain` now hovers to the accent instead of underlining).
 */
export const linkRecipe = defineRecipe({
  base: {
    transitionProperty: "color, border-color, padding",
    transitionDuration: "ui",
    textDecoration: "none",
    _motionReduce: { transition: "none" },
  },
  variants: {
    variant: {
      /** Inherit colour; accent on hover. */
      plain: {
        color: "inherit",
        _hover: { color: "fg.accent", textDecoration: "none" },
      },
      /** Secondary text; accent on hover (nav links). */
      nav: {
        color: "fg.secondary",
        _hover: { color: "fg.accent", textDecoration: "none" },
        "&[aria-current]": { color: "fg" },
      },
      /** Bottom-bordered link on ink backgrounds (contact / footer socials). */
      inverted: {
        color: "inherit",
        borderBottomWidth: "1px",
        borderColor: "border.inverted.emphasized",
        pb: "3px",
        borderRadius: "0",
        _hover: {
          color: "fg.accent.onDark",
          borderColor: "fg.accent.onDark",
          textDecoration: "none",
        },
      },
    },
  },
});
