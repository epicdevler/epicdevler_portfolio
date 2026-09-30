import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SECTION_IDS } from "../../section-ids";

/** STUB — owned by the "capabilities" section agent. See CONTRACT.md. */
export function CapabilitiesSection() {
  return (
    <Section id={SECTION_IDS.capabilities} tone="ink">
      <SectionHeader
        eyebrow="Capabilities"
        title="What I build."
        size="xl"
        layout="split"
        onDark
      />
    </Section>
  );
}
