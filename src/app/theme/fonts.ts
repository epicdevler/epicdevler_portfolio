import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";

/**
 * Fonts follow the template convention: next/font exposes a CSS variable,
 * the variables are applied as classNames on <html> (see the marketing
 * layout) and the Chakra `fonts` tokens reference those variables.
 */
export const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/** Space-separated className string to put on <html>. */
export const fontVariables = `${schibstedGrotesk.variable} ${plexMono.variable}`;
