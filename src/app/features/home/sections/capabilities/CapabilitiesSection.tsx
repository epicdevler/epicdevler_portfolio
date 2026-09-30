import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "../../section-ids";
import { CAPABILITIES, CAPABILITIES_HEADER } from "./capabilities-content";
import { CapabilityRow } from "./CapabilityRow";

/** "What I build." — ink section listing the five capability areas. */
export function CapabilitiesSection() {
  return (
    <Section
      id={SECTION_IDS.capabilities}
      tone="ink"
      aria-labelledby="capabilities-heading"
    >
      <Reveal>
        <SectionHeader
          eyebrow={CAPABILITIES_HEADER.eyebrow}
          title={<span id="capabilities-heading">{CAPABILITIES_HEADER.title}</span>}
          lead={CAPABILITIES_HEADER.lead}
          size="xl"
          layout="split"
          onDark
        />
      </Reveal>

      <Reveal
        as="ul"
        role="list"
        listStyleType="none"
        m="0"
        p="0"
        mt="clamp(56px, 7vw, 96px)"
        borderTopWidth="1px"
        borderTopStyle="solid"
        borderTopColor="border.inverted.strong"
      >
        {CAPABILITIES.map((capability) => (
          <CapabilityRow key={capability.index} capability={capability} />
        ))}
      </Reveal>
    </Section>
  );
}
