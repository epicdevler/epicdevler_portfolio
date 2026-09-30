import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SECTION_IDS } from "../../section-ids";

/** STUB — owned by the "toolkit" section agent. See CONTRACT.md. */
export function ToolkitSection() {
  return (
    <Section id={SECTION_IDS.toolkit} size="sm">
      <SectionHeader
        eyebrow="The toolkit"
        title="The tools behind the work."
        size="sm"
      />
    </Section>
  );
}
