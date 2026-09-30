import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SECTION_IDS } from "../../section-ids";

/** STUB — owned by the "work" section agent. See CONTRACT.md. */
export function WorkSection() {
  return (
    <Section id={SECTION_IDS.work} tone="sand">
      <SectionHeader
        eyebrow="Selected work"
        title="Products built around real problems."
        size="xl"
      />
    </Section>
  );
}
