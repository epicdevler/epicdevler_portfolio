/**
 * Brand colour per project, keyed by project slug.
 *
 * These are content values (each client product's own identity colour), not
 * part of this site's design system, so they live here as raw hex rather than
 * as theme tokens. The featured-work panel tints its dark background with them
 * (see `FeaturedMedia`); projects without an entry keep the plain ink panel.
 *
 * Values were sampled from the screenshots in `public/projects/` and, where
 * needed, lifted to a similar lightness so each reads equally through the
 * dark mix:
 * - errandking: hero overlay / nav band samples #2B397B; same indigo hue lifted.
 * - keepup: "Sign In" button fill samples #15A34A (logo/button green).
 * - wastevest: "Subscribe" CTA samples #1972F8; slightly desaturated to a
 *   steel/"star" blue so the panel stays muted.
 */
export const PROJECT_BRANDS: Readonly<Record<string, string>> = {
  errandking: "#4152B8",
  keepup: "#16A34A",
  wastevest: "#2F6FD6",
};

export const brandColorFor = (slug: string): string | undefined =>
  PROJECT_BRANDS[slug];
