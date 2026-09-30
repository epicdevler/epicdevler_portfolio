import { PROJECTS } from "@/content/app-data";
import type { Project } from "@/content/types";

/** Static copy for the "Selected work" section (from the design). */
export const WORK_HEADER = {
  eyebrow: "Selected work",
  title: "Products built around real problems.",
  lead: "A selection of products, platforms and digital experiences I've helped shape and build.",
} as const;

/** Browser-bar URL pill on the featured panel. */
export const FEATURED_URL_LABEL = "errandking / dashboard";

// TODO(content): KeepUp has no screenshots yet — these captions label the placeholders.
export const KEEPUP_SCREENS = [
  "KeepUp — feed",
  "KeepUp — class channel",
  "KeepUp — schedule",
] as const;

const bySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);

/** The three highlighted articles, in design order. */
export const WORK_PROJECTS = {
  featured: bySlug("errandking"),
  phones: bySlug("keepup"),
  split: bySlug("wastevest"),
} as const;

const HIGHLIGHTED = new Set(["errandking", "keepup", "wastevest"]);

/** Everything else in app-data → compact "More work" list. */
export const MORE_PROJECTS: Project[] = PROJECTS.filter(
  (p) => !HIGHLIGHTED.has(p.slug),
);
