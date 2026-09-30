import { SECTION_IDS, type SectionId } from "@/app/features/home/section-ids";

export type NavItem = {
  label: string;
  /** Section the link targets (also used for active-state tracking). */
  sectionId: SectionId;
  href: `/#${string}`;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Work", sectionId: SECTION_IDS.work, href: "/#work" },
  {
    label: "Capabilities",
    sectionId: SECTION_IDS.capabilities,
    href: "/#capabilities",
  },
  { label: "Approach", sectionId: SECTION_IDS.approach, href: "/#approach" },
  { label: "About", sectionId: SECTION_IDS.about, href: "/#about" },
  { label: "Contact", sectionId: SECTION_IDS.contact, href: "/#contact" },
];

/**
 * Links shown inline on desktop. Contact is reached through the CTA pill,
 * so it is omitted here (matches the design).
 */
export const DESKTOP_NAV_ITEMS: readonly NavItem[] = NAV_ITEMS.filter(
  (item) => item.sectionId !== SECTION_IDS.contact,
);

/** Section ids observed for the active-link state. */
export const NAV_SECTION_IDS: readonly SectionId[] = NAV_ITEMS.map(
  (item) => item.sectionId,
);

/** Primary CTA shown at the end of the nav. */
export const NAV_CTA = {
  label: "Let's build something",
  href: "/#contact",
} as const;

/** Target of the "Skip to content" link (the `<main>` landmark). */
export const MAIN_CONTENT_ID = "main";
