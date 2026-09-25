import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { genPalette } from "./them-util";

const palette = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  // accent: "lime",
  // neutral: "cream",
} as const;

const config = defineConfig({
  cssVarsPrefix: "pui",
  globalCss: {
    "::selection": {
      bg: "orange",
      color: "white",
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: {
            value: "#0062FF",
            0: { value: "#FFFFFF" },
            50: { value: "#E5EFFF" },
            100: { value: "#CCE0FF" },
            150: { value: "#B2D0FF" },
            200: { value: "#99C0FF" },
            300: { value: "#66A1FF" },
            400: { value: "#3381FF" },
            500: { value: "#0062FF" },
            600: { value: "#004ECC" },
            700: { value: "#003B99" },
            800: { value: "#002766" },
            850: { value: "#001D4D" },
            900: { value: "#001433" },
            950: { value: "#000A1A" },
            1000: { value: "#000000" },
          },
        },
        secondary: {
          DEFAULT: {
            value: "orange",
            50: { value: "" },
            100: { value: "" },
            200: { value: "" },
            300: { value: "" },
            400: { value: "" },
            500: { value: "orange" },
            600: { value: "" },
            700: { value: "" },
            800: { value: "" },
            900: { value: "" },
          },
        },
        tertiary: {
          DEFAULT: {
            value: "gold",
            50: { value: "" },
            100: { value: "" },
            200: { value: "" },
            300: { value: "" },
            400: { value: "" },
            500: { value: "gold" },
            600: { value: "" },
            700: { value: "" },
            800: { value: "" },
            900: { value: "" },
          },
        },
      },
      fonts: {
        heading: { value: `var(--font-abyssinica)` }, //${abyssinica_sil.variable}
        body: { value: `var(--font-afacad)` }, //${afacad.variable}
        mono: { value: "" },
        monospace: { value: "" },
      },
    },

    semanticTokens: {
      colors: {
        primary: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "{colors.primary.0}" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.50}" },
          emphasized: { value: "{colors.primary.200}" },
          focusRing: { value: "{colors.primary.500}" },
        },

        colorPalette: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "{colors.primary.0}" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.50}" },
          emphasized: { value: "{colors.primary.200}" },
          focusRing: { value: "{colors.primary.500}" },

          // Optional shade aliases used internally by some recipes
          50: { value: "{colors.primary.50}" },
          100: { value: "{colors.primary.100}" },
          200: { value: "{colors.primary.200}" },
          300: { value: "{colors.primary.300}" },
          400: { value: "{colors.primary.400}" },
          500: { value: "{colors.primary.500}" },
          600: { value: "{colors.primary.600}" },
          700: { value: "{colors.primary.700}" },
          800: { value: "{colors.primary.800}" },
          900: { value: "{colors.primary.900}" },
          950: { value: "{colors.primary.950}" },
        },
        ...Object.fromEntries(
          Object.entries(palette).map(([name, color]) => [
            name,
            genPalette(color),
          ]),
        ),
      },
    },
  },
});

const SystemTheme = createSystem(defaultConfig, config);

export default SystemTheme