import { PROJECTS } from "@/content/app-data";
import type { Project } from "@/content/types";

/** Static copy for the "Selected work" section (from the design). */
export const WORK_HEADER = {
  eyebrow: "Selected work",
  title: "Products built around real problems.",
  lead: "A selection of products, platforms and digital experiences I've helped shape and build.",
} as const;

/**
 * Placeholder captions for mobile projects without a `gallery` yet, keyed by
 * project slug.
 */
export const PHONE_PLACEHOLDERS: Record<string, readonly string[]> = {};

/** Featured articles, in display order. */
const FEATURED_SLUGS = ["errandking", "keepup", "wastevest"] as const;

export const FEATURED_PROJECTS: Project[] = FEATURED_SLUGS.map((slug) =>
  PROJECTS.find((p) => p.slug === slug),
).filter((p): p is Project => Boolean(p));

const FEATURED = new Set<string>(FEATURED_SLUGS);

/** Everything else in app-data → compact "More work" list. */
export const MORE_PROJECTS: Project[] = PROJECTS.filter(
  (p) => !FEATURED.has(p.slug),
);

/** Browser-bar URL pill, e.g. "errandking.com". */
export const urlLabel = (project: Project): string => {
  if (!project.liveUrl) return project.slug;
  try {
    return new URL(project.liveUrl).host.replace(/^www\./, "");
  } catch {
    return project.slug;
  }
};

/** Whether a project has long-form copy for the details dialog. */
export const hasDetails = (project: Project): boolean =>
  Boolean(project.contribution?.length || project.story);
