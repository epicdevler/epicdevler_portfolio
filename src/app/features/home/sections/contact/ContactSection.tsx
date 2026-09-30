import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SECTION_IDS } from "../../section-ids";

/** STUB — owned by the "contact" section agent. See CONTRACT.md. */
export function ContactSection() {
  return (
    <Section id={SECTION_IDS.contact} tone="ink" size="lg">
      <SectionHeader
        eyebrow="Let’s build something useful"
        title="Have a problem worth turning into software?"
        size="contact"
        onDark
      />
    </Section>
  );
}
