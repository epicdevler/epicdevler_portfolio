import { Box } from "@chakra-ui/react";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "../../section-ids";
import { ApproachStepItem } from "./ApproachStepItem";
import { APPROACH_HEADER, APPROACH_STEPS } from "./approach-content";

/** "How I work": stacked header plus a four-step process timeline. */
export function ApproachSection() {
  return (
    <Section id={SECTION_IDS.approach}>
      <Reveal>
        <SectionHeader
          eyebrow={APPROACH_HEADER.eyebrow}
          title={
            <Box as="span" display="block" maxW="1200px">
              {APPROACH_HEADER.title}
            </Box>
          }
          lead={APPROACH_HEADER.lead}
          size="xl"
          leadProps={{ maxW: "480px", alignSelf: "flex-end" }}
        />
      </Reveal>

      <Reveal mt="clamp(64px, 8vw, 112px)">
        <Box
          as="ol"
          listStyleType="none"
          m="0"
          p="0"
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
            xl: "repeat(4, minmax(0, 1fr))",
          }}
          gap="0"
        >
          {APPROACH_STEPS.map((step, index) => (
            <ApproachStepItem
              key={step.number}
              step={step}
              first={index === 0}
              last={index === APPROACH_STEPS.length - 1}
            />
          ))}
        </Box>
      </Reveal>
    </Section>
  );
}
