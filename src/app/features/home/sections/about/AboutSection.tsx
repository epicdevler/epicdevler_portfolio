import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SECTION_IDS } from "../../section-ids";

/** STUB — owned by the "about" section agent. See CONTRACT.md. */
export function AboutSection() {
  return (
    <Section id={SECTION_IDS.about} tone="sand">
      <SectionHeader eyebrow="About" title="The person behind the products." />
    </Section>
  );
}
