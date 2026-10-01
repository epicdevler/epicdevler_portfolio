import { TOOLKIT } from "@/content/app-data";
import type { ToolkitGroup } from "@/content/types";

export const TOOLKIT_COPY = {
  eyebrow: "The toolkit",
  title: "The tools behind the work.",
  lead: "Technology supports the product. It doesn't define it.",
} as const;

/**
 * Extra technologies from the previous site, merged into the design's groups
 * (user decision). Keys must match `TOOLKIT` labels.
 */
const EXTRAS: Record<string, readonly string[]> = {
  "Backend & Data": [/* "Python", "FastAPI", "Ktor",  */"Firebase", "MongoDB"],
  Mobile: ["Android", "Gradle"],
  "Tools & Infrastructure": ["GitHub", "Figma", "AWS Amplify"],
};

/** Design groups (from `TOOLKIT`) with the extras appended, de-duplicated. */
export const TOOLKIT_GROUPS: ToolkitGroup[] = TOOLKIT.map((group) => ({
  label: group.label,
  items: [...new Set([...group.items, ...(EXTRAS[group.label] ?? [])])],
}));
