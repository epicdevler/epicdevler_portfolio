import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SECTION_IDS } from "../../section-ids";

/** STUB — owned by the "do" section agent. See CONTRACT.md. */
export function DoSection() {
  return (
    <Section id={SECTION_IDS.do} bordered>
      <SectionHeader
        eyebrow="What I actually do"
        title="From idea to working product."
        layout="split"
      />
    </Section>
  );
}
