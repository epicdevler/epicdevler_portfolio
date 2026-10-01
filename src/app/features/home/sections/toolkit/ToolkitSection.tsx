import { Box } from "@chakra-ui/react";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "../../section-ids";
import { TOOLKIT_COPY, TOOLKIT_GROUPS } from "./toolkit-content";
import { ToolkitGroupList } from "./ToolkitGroupList";

export function ToolkitSection() {
  return (
    <Section id={SECTION_IDS.toolkit} size="sm">
      <Reveal
        display="flex"
        flexWrap="wrap"
        gap="clamp(40px, 6vw, 96px)"
        alignItems="flex-start"
      >
        <SectionHeader
          flex="1 1 260px"
          gap="22px"
          eyebrow={TOOLKIT_COPY.eyebrow}
          title={TOOLKIT_COPY.title}
          lead={TOOLKIT_COPY.lead}
          size="sm"
          leadProps={{
            textStyle: "body.lg",
            fontSize: "17px",
            lineHeight: "1.55",
            color: "fg.muted",
            maxW: "360px",
          }}
        />
        <Box
          flex="2.4 1 480px"
          minW="0"
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 150px), 1fr))"
          gap="32px"
          borderTopWidth="1px"
          borderTopStyle="solid"
          borderTopColor="border.strong"
          pt="24px"
        >
          {TOOLKIT_GROUPS.map((group) => (
            <ToolkitGroupList key={group.label} group={group} />
          ))}
        </Box>
      </Reveal>
    </Section>
  );
}
