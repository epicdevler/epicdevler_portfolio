import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "../../section-ids";
import { FeaturedProject } from "./FeaturedProject";
import { MoreWork } from "./MoreWork";
import { PhonesProject } from "./PhonesProject";
import { SplitProject } from "./SplitProject";
import { MORE_PROJECTS, WORK_HEADER, WORK_PROJECTS } from "./work-content";

/** "Selected work" — featured project, two highlighted projects, then a compact list. */
export function WorkSection() {
  const { featured, phones, split } = WORK_PROJECTS;

  return (
    <Section id={SECTION_IDS.work} tone="sand">
      <Reveal maxW="1100px">
        <SectionHeader
          eyebrow={WORK_HEADER.eyebrow}
          title={WORK_HEADER.title}
          lead={WORK_HEADER.lead}
          size="xl"
          leadProps={{ ml: "clamp(0px, 18vw, 280px)" }}
        />
      </Reveal>

      {featured && <FeaturedProject project={featured} />}
      {phones && <PhonesProject project={phones} />}
      {split && <SplitProject project={split} />}
      <MoreWork projects={MORE_PROJECTS} />
    </Section>
  );
}
