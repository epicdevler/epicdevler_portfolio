import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "../../section-ids";
import { FeaturedArticle } from "./FeaturedArticle";
import { MoreWork } from "./MoreWork";
import { FEATURED_PROJECTS, MORE_PROJECTS, WORK_HEADER } from "./work-content";

/** "Selected work" — featured projects in one shared layout, then a compact list. */
export function WorkSection() {
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

      {FEATURED_PROJECTS.map((project, i) => (
        <FeaturedArticle key={project.slug} project={project} first={i === 0} />
      ))}
      <MoreWork projects={MORE_PROJECTS} />
    </Section>
  );
}
