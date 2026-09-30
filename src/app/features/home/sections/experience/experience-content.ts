import { EXPERIENCE } from "@/content/app-data";
import type { ExperienceItem, Period } from "@/content/types";

/** Static copy that only appears in the experience section. */
export const EXPERIENCE_COPY = {
  eyebrow: "Experience",
  title: "Building, learning and shipping.",
} as const;

/**
 * Timeline entries, in design order (current role first).
 *
 * TODO(content): Technoville has no `period` in `@/content/app-data`. Once
 * start/end dates are known, add them there and the date line renders
 * automatically. Until then the date line is omitted for that entry.
 */
export const EXPERIENCE_TIMELINE: readonly ExperienceItem[] = EXPERIENCE;

/**
 * Formats a period for display, e.g. "2020 – 2023" or "2023 – Present".
 * Returns `null` when no period is known so callers can omit the line.
 */
export function formatPeriod(period: Period | undefined): string | null {
  if (!period) return null;
  return `${period.start} – ${period.end ?? "Present"}`;
}
