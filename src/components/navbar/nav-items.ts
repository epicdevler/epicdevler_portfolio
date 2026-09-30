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

/** Primary CTA shown at the end of the nav. */
export const NAV_CTA = {
  label: "Let's build something",
  href: "/#contact",
} as const;
