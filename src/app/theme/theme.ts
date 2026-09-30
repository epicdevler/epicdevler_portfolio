import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./recipes/button";
import { chipRecipe } from "./recipes/chip";
import { linkRecipe } from "./recipes/link";
import { semanticTokens } from "./semantic-tokens";
import { textStyles } from "./text-styles";
import { tokens } from "./tokens";

/**
 * Palettes available through `colorPalette="…"`. Raw scales live in
 * tokens.ts, the generated `solid/contrast/fg/…` keys in semantic-tokens.ts.
 */
export const palette = {
  primary: "primary",
  neutral: "neutral",
} as const;

const config = defineConfig({
  cssVarsPrefix: "epd",
  globalCss: {
    html: {
      colorPalette: "neutral",
      bg: "bg.canvas",
      color: "fg",
      _motionSafe: { scrollBehavior: "smooth" },
    },
    body: {
      bg: "bg.canvas",
      color: "fg",
      fontFamily: "body",
      // Antialiasing + optimizeLegibility come from Chakra's preflight (html).
    },
    "section[id], header[id]": {
      scrollMarginTop: "nav",
    },
    "*::selection": {
      bg: "bg.accent",
      color: "fg.onAccent",
    },
    ":where(a, button, input, textarea, select, summary, [tabindex]):focus-visible":
      {
        outline: "2px solid",
        outlineColor: "border.accent",
        outlineOffset: "2px",
      },
  },
  theme: {
    tokens,
    semanticTokens,
    textStyles,
    recipes: {
      button: buttonRecipe,
      link: linkRecipe,
      chip: chipRecipe,
    },
  },
});

/**
 * Chakra ships `bg.inverted`, `fg.inverted` and `border.inverted` as leaf
 * tokens. Deep-merging our nested `inverted.{DEFAULT,subtle,…}` groups onto a
 * leaf keeps its `value` and silently drops every child token, so remove the
 * defaults before merging.
 */
const withoutInvertedLeaves = (() => {
  const colors = { ...defaultConfig.theme?.semanticTokens?.colors };
  for (const group of ["bg", "fg", "border"] as const) {
    const rest = { ...(colors[group] as Record<string, unknown>) };
    delete rest.inverted;
    colors[group] = rest as (typeof colors)[typeof group];
  }
  return {
    ...defaultConfig,
    theme: {
      ...defaultConfig.theme,
      semanticTokens: { ...defaultConfig.theme?.semanticTokens, colors },
    },
  };
})();

const SystemTheme = createSystem(withoutInvertedLeaves, config);

export default SystemTheme;
