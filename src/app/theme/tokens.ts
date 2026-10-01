import { defineTokens } from "@chakra-ui/react";

/**
 * Raw design tokens. Section code should prefer the SEMANTIC tokens
 * (bg.*, fg.*, border.*) defined in `semantic-tokens.ts`; raw scales are
 * here so semantic tokens (and `colorPalette`) have something to point at.
 *
 * All hex values are taken from `asset/new-design/Philip Nwadike Portfolio.dc.html`.
 */
export const tokens = defineTokens({
  colors: {
    /** Warm neutral scale (light → dark). Every shade is a design value. */
    neutral: {
      DEFAULT: { value: "#5C5A53" },
      0: { value: "#FFFFFF" },
      50: { value: "#F3F1EB" }, // paper — page background
      100: { value: "#ECE8DE" }, // light chip bg
      150: { value: "#EAE7DF" }, // sand — alt section bg
      200: { value: "#DEDAD0" }, // nav / subtle border
      300: { value: "#CFCABE" }, // emphasized border
      400: { value: "#BDB7AA" }, // pill border
      500: { value: "#8D8B84" }, // dim text
      600: { value: "#6E6C66" }, // faint text on dark
      700: { value: "#5C5A53" }, // muted text
      800: { value: "#4A4842" }, // secondary text
      850: { value: "#3B3A35" }, // body text
      900: { value: "#1C1D1A" }, // dark card
      950: { value: "#141512" }, // ink background
      1000: { value: "#000000" },
    },
    /** Accent green scale. 700 is the design accent, 800 the pressed/dark accent. */
    primary: {
      DEFAULT: { value: "#116832" },
      0: { value: "#FFFFFF" },
      50: { value: "#EEF6F0" },
      100: { value: "#DCEBDF" }, // green tint (status chip bg)
      150: { value: "#C6E2CD" },
      200: { value: "#A9D6B6" },
      300: { value: "#7DCB97" }, // green text on dark
      400: { value: "#4FB374" }, // green dots / borders on dark
      500: { value: "#2F9556" },
      600: { value: "#1D7C41" },
      700: { value: "#116832" }, // accent
      800: { value: "#0D5428" }, // accent dark
      850: { value: "#0B4722" },
      900: { value: "#083A1C" },
      950: { value: "#042010" },
      1000: { value: "#000000" },
    },
    /** Dark ("ink") surfaces and rules that don't fit the neutral scale. */
    ink: {
      DEFAULT: { value: "#151513" }, // ink text / solid button bg
      bg: { value: "#141512" },
      card: { value: "#1C1D1A" },
      hover: { value: "#1B1C19" },
      panel: { value: "#151613" }, // featured work panel
      chip: { value: "#252622" },
      border: { value: "#2A2B27" },
      line: { value: "#2E2F2A" },
      rule: { value: "#3A3B36" },
      strong: { value: "#4A4B45" },
    },
    /** Light one-offs: rules, browser chrome, tile panels. */
    stone: {
      rule: { value: "#D9D5CB" },
      chrome: { value: "#E3DFD5" },
      chromeBorder: { value: "#D2CDC1" },
      chromeDot: { value: "#C9C4B8" },
      tile: { value: "#DAD5C9" },
      tileHover: { value: "#D3CDBF" },
    },
    /** Text colours used on ink backgrounds. */
    ash: {
      muted: { value: "#B5B2A9" },
      lead: { value: "#C9C6BD" },
      body: { value: "#D5D2C9" },
      fg: { value: "#E9E7E0" },
    },
  },

  fonts: {
    heading: {
      value:
        'var(--font-schibsted), "Schibsted Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif',
    },
    body: {
      value:
        'var(--font-schibsted), "Schibsted Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif',
    },
    mono: {
      value:
        'var(--font-plex-mono), "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
    },
  },

  spacing: {
    /** Horizontal page gutter. */
    gutter: { value: "clamp(20px, 5vw, 72px)" },
    /** Vertical section padding. */
    section: {
      DEFAULT: { value: "clamp(88px, 11vw, 168px)" },
      sm: { value: "clamp(80px, 9vw, 136px)" },
      lg: { value: "clamp(96px, 13vw, 200px)" },
    },
    /** Approximate sticky nav height, used for scroll-margin. */
    nav: { value: "72px" },
  },

  sizes: {
    /** Max content width of every section container. */
    page: { value: "1440px" },
  },

  radii: {
    pill: { value: "9999px" },
    device: { value: "22px" }, // phone mockups (KeepUp)
    panel: { value: "20px" },
    canvas: { value: "18px" },
    portrait: { value: "14px" },
    frame: { value: "12px" },
    card: { value: "10px" },
    inset: { value: "8px" },
    chip: { value: "6px" },
  },

  shadows: {
    canvas: { value: "0 40px 80px -40px rgba(20, 21, 18, 0.5)" },
    device: {
      DEFAULT: { value: "0 30px 60px -20px rgba(0, 0, 0, 0.6)" },
      sm: { value: "0 24px 50px -24px rgba(20, 21, 18, 0.5)" },
    },
  },

  easings: {
    reveal: { value: "cubic-bezier(0.2, 0.7, 0.2, 1)" },
  },

  durations: {
    reveal: { value: "0.9s" },
    ui: { value: "0.25s" },
  },

  zIndex: {
    nav: { value: 50 },
  },
});
