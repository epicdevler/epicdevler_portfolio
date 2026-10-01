import { defineRecipe } from "@chakra-ui/react";

/**
 * Custom `chip` recipe (registered as theme.recipes.chip).
 * Use through `<Chip>` from `@/components/ui/Chip`.
 *
 * variant:
 *  - outline: bordered pill, 14px ("Currently exploring" chips)
 *  - status:  small filled pill, 10px ("Active" / "Queued")
 *  - mono:    6px-radius mono tag, 11px ("Client" / "API" / "Auth")
 * tone: neutral | accent | inverted | invertedAccent (on ink backgrounds)
 */
export const chipRecipe = defineRecipe({
  className: "epd-chip",
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    whiteSpace: "nowrap",
    borderWidth: "1px",
    borderColor: "transparent",
    lineHeight: "1.2",
  },
  variants: {
    variant: {
      outline: {
        borderRadius: "pill",
        px: "16px",
        py: "9px",
        fontSize: "14px",
      },
      status: {
        borderRadius: "pill",
        px: "7px",
        py: "2px",
        fontSize: "10px",
        gap: "4px",
      },
      mono: {
        borderRadius: "chip",
        px: "8px",
        py: "5px",
        fontFamily: "mono",
        fontSize: "11px",
      },
    },
    tone: {
      neutral: {},
      accent: {},
      inverted: {},
      invertedAccent: {},
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      tone: "neutral",
      css: { borderColor: "border.pill", color: "fg" },
    },
    {
      variant: "outline",
      tone: "accent",
      css: { borderColor: "border.accent", color: "fg.accent" },
    },
    {
      variant: "outline",
      tone: "inverted",
      css: { borderColor: "border.inverted.strong", color: "fg.inverted" },
    },
    {
      variant: "outline",
      tone: "invertedAccent",
      css: { borderColor: "border.accent.onDark", color: "fg.accent.onDark" },
    },

    {
      variant: "status",
      tone: "neutral",
      css: { bg: "bg.chip", color: "fg.muted" },
    },
    {
      variant: "status",
      tone: "accent",
      css: { bg: "bg.accent.subtle", color: "fg.accent.strong" },
    },
    {
      variant: "status",
      tone: "inverted",
      css: { bg: "bg.inverted.chip", color: "fg.inverted.muted" },
    },
    {
      variant: "status",
      tone: "invertedAccent",
      css: { bg: "bg.inverted.chip", color: "fg.accent.onDark" },
    },

    {
      variant: "mono",
      tone: "neutral",
      css: { borderColor: "border.emphasized", color: "fg.muted" },
    },
    {
      variant: "mono",
      tone: "accent",
      css: { borderColor: "border.accent", color: "fg.accent" },
    },
    {
      variant: "mono",
      tone: "inverted",
      css: { borderColor: "border.inverted.strong", color: "fg.inverted.body" },
    },
    {
      variant: "mono",
      tone: "invertedAccent",
      css: { borderColor: "border.accent.onDark", color: "fg.accent.onDark" },
    },
  ],
  defaultVariants: {
    variant: "outline",
    tone: "neutral",
  },
});
