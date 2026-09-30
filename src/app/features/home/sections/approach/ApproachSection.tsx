import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SECTION_IDS } from "../../section-ids";

/** STUB — owned by the "approach" section agent. See CONTRACT.md. */
export function ApproachSection() {
  return (
    <Section id={SECTION_IDS.approach}>
      <SectionHeader
        eyebrow="How I work"
        title="Good software starts before the first line of code."
        size="xl"
      />
    </Section>
  );
}
