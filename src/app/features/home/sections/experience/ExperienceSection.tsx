import { Box } from "@chakra-ui/react";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "../../section-ids";
import { EXPERIENCE_COPY, EXPERIENCE_TIMELINE } from "./experience-content";
import { TimelineItem } from "./TimelineItem";

/** Experience: heading on the left, vertical timeline of roles on the right. */
export function ExperienceSection() {
  return (
    <Section id={SECTION_IDS.experience} size="sm" bordered>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="clamp(40px, 6vw, 96px)"
        alignItems="flex-start"
      >
        <Reveal flex="1 1 260px" minW="0">
          <SectionHeader
            eyebrow={EXPERIENCE_COPY.eyebrow}
            title={EXPERIENCE_COPY.title}
            size="md"
            gap="22px"
          />
        </Reveal>

        <Reveal
          flex="2.4 1 480px"
          minW="0"
          position="relative"
          ps="36px"
        >
          {/* Timeline rail */}
          <Box
            aria-hidden
            position="absolute"
            left="6px"
            top="14px"
            bottom="14px"
            w="1px"
            bg="border.strong"
          />
          <Box
            as="ol"
            listStyleType="none"
            m="0"
            p="0"
            display="flex"
            flexDirection="column"
            aria-label="Work history"
          >
            {EXPERIENCE_TIMELINE.map((item, index) => (
              <TimelineItem
                key={item.slug}
                item={item}
                isFirst={index === 0}
                isLast={index === EXPERIENCE_TIMELINE.length - 1}
              />
            ))}
          </Box>
        </Reveal>
      </Box>
    </Section>
  );
}
