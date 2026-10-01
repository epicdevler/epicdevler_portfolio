import { defineSemanticTokens } from "@chakra-ui/react";
import { genPalette } from "./them-util";

/**
 * The design is light-only (colour mode is forced to light in AppProvider).
 * Chakra's own bg/fg/border tokens ship `{ _light, _dark }` values, so when
 * overriding them we set both conditions to the same value — otherwise the
 * deep-merge would keep Chakra's `_light` value.
 */
const fixed = (value: string) => ({ value: { _light: value, _dark: value } });

export const semanticTokens = defineSemanticTokens({
  colors: {
    primary: genPalette("primary", {
      focusRing: "{colors.primary.700}",
    }),
    neutral: genPalette("neutral", {
      solid: "{colors.ink}",
      contrast: "{colors.neutral.50}",
      fg: "{colors.ink}",
      muted: "{colors.neutral.100}",
      subtle: "{colors.neutral.150}",
      emphasized: "{colors.neutral.200}",
      border: "{colors.stone.rule}",
      focusRing: "{colors.primary.700}",
    }),

    bg: {
      DEFAULT: fixed("{colors.neutral.50}"),
      canvas: { value: "{colors.neutral.50}" },
      sand: { value: "{colors.neutral.150}" },
      subtle: fixed("{colors.neutral.150}"),
      muted: fixed("{colors.neutral.100}"),
      emphasized: fixed("{colors.stone.chrome}"),
      /** Chakra's popover/dialog/toast surface. Kept light (paper). */
      panel: fixed("{colors.neutral.50}"),
      /** Design "panel" tiles (e.g. KeepUp phones panel, portrait bg). */
      tile: {
        DEFAULT: { value: "{colors.stone.tile}" },
        hover: { value: "{colors.stone.tileHover}" },
      },
      chip: { value: "{colors.neutral.100}" },
      /** Browser-window chrome in work mockups. */
      chrome: {
        DEFAULT: { value: "{colors.stone.chrome}" },
        dot: { value: "{colors.stone.chromeDot}" },
      },
      /** Solid ink (#151513): solid buttons, nav CTA. */
      solid: { value: "{colors.ink}" },
      inverted: {
        DEFAULT: fixed("{colors.ink.bg}"),
        subtle: { value: "{colors.ink.card}" },
        hover: { value: "{colors.ink.hover}" },
        panel: { value: "{colors.ink.panel}" },
        chip: { value: "{colors.ink.chip}" },
      },
      accent: {
        DEFAULT: { value: "{colors.primary.700}" },
        hover: { value: "{colors.primary.800}" },
        subtle: { value: "{colors.primary.100}" },
        onDark: { value: "{colors.primary.400}" },
      },
      nav: { value: "rgba(243, 241, 235, 0.86)" },
    },

    fg: {
      DEFAULT: fixed("{colors.ink}"),
      body: { value: "{colors.neutral.850}" },
      secondary: { value: "{colors.neutral.800}" },
      muted: fixed("{colors.neutral.700}"),
      /** #8D8B84 — 3.2:1 on paper: only for large or decorative text. */
      subtle: fixed("{colors.neutral.500}"),
      accent: {
        DEFAULT: { value: "{colors.primary.700}" },
        strong: { value: "{colors.primary.800}" },
        onDark: { value: "{colors.primary.300}" },
      },
      onAccent: { value: "{colors.neutral.0}" },
      inverted: {
        DEFAULT: fixed("{colors.ash.fg}"),
        strong: { value: "{colors.neutral.50}" },
        body: { value: "{colors.ash.body}" },
        lead: { value: "{colors.ash.lead}" },
        muted: { value: "{colors.ash.muted}" },
        subtle: { value: "{colors.neutral.500}" },
        /** #6E6C66 — decorative only on ink (≈3.4:1). */
        faint: { value: "{colors.neutral.600}" },
      },
    },

    border: {
      DEFAULT: fixed("{colors.stone.rule}"),
      subtle: fixed("{colors.neutral.200}"),
      muted: fixed("{colors.neutral.200}"),
      emphasized: fixed("{colors.neutral.300}"),
      strong: { value: "{colors.ink}" },
      pill: { value: "{colors.neutral.400}" },
      chrome: { value: "{colors.stone.chromeBorder}" },
      accent: {
        DEFAULT: { value: "{colors.primary.700}" },
        onDark: { value: "{colors.primary.400}" },
      },
      inverted: {
        DEFAULT: fixed("{colors.ink.line}"),
        subtle: { value: "{colors.ink.border}" },
        strong: { value: "{colors.ink.rule}" },
        emphasized: { value: "{colors.ink.strong}" },
      },
      /** Decorative grid lines (GridOverlay, work panel). */
      grid: {
        DEFAULT: { value: "rgba(21, 21, 19, 0.05)" },
        inverted: { value: "rgba(255, 255, 255, 0.045)" },
      },
    },
  },
});
