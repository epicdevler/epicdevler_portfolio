import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SECTION_IDS } from "../../section-ids";

/** STUB — owned by the "experience" section agent. See CONTRACT.md. */
export function ExperienceSection() {
  return (
    <Section id={SECTION_IDS.experience} size="sm" bordered>
      <SectionHeader
        eyebrow="Experience"
        title="Building, learning and shipping."
        size="md"
      />
    </Section>
  );
}
