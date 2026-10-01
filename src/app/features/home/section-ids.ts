/** Anchor ids of the home page sections, in page order. */
export const SECTION_IDS = {
  top: "top",
  do: "do",
  work: "work",
  capabilities: "capabilities",
  approach: "approach",
  about: "about",
  toolkit: "toolkit",
  experience: "experience",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const SECTION_ORDER: readonly SectionId[] = Object.values(SECTION_IDS);

/** `#id` helper for in-page links. */
export const sectionHref = (id: SectionId) => `#${id}` as const;
