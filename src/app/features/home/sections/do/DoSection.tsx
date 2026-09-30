import { Box } from "@chakra-ui/react";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SECTION_IDS } from "../../section-ids";
import { DoColumn } from "./DoColumn";
import { DO_HEADER, DO_ITEMS } from "./do-content";

/** "What I actually do": split header + four-step grid. */
export function DoSection() {
  return (
    <Section id={SECTION_IDS.do} bordered aria-labelledby="do-heading">
      <Reveal>
        <SectionHeader
          eyebrow={DO_HEADER.eyebrow}
          title={<span id="do-heading">{DO_HEADER.title}</span>}
          lead={DO_HEADER.lead}
          layout="split"
          size="lg"
          leadProps={{ maxW: "420px" }}
        />
      </Reveal>

      <Box
        as="ul"
        role="list"
        listStyleType="none"
        m="0"
        p="0"
        mt="clamp(56px, 7vw, 104px)"
        display="grid"
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, minmax(0, 1fr))",
          xl: "repeat(4, minmax(0, 1fr))",
        }}
        borderTopWidth="1px"
        borderColor="border.strong"
      >
        {DO_ITEMS.map((item, i) => (
          <DoColumn
            key={item.index}
            item={item}
            position={i}
            total={DO_ITEMS.length}
          />
        ))}
      </Box>
    </Section>
  );
}
