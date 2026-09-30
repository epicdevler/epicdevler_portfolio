import { Eyebrow } from "@/components/layout/Eyebrow";
import { GridOverlay } from "@/components/layout/GridOverlay";
import { Section } from "@/components/layout/Section";
import { Heading } from "@chakra-ui/react";
import { SECTION_IDS } from "../../section-ids";

/** STUB — owned by the "hero" section agent. See CONTRACT.md. */
export function HeroSection() {
  return (
    <Section
      id={SECTION_IDS.top}
      as="header"
      size="none"
      overlay={<GridOverlay />}
      containerProps={{
        pt: "clamp(64px, 9vw, 128px)",
        pb: "clamp(64px, 8vw, 112px)",
      }}
    >
      <Eyebrow rule mb="clamp(28px, 4vw, 48px)">
        Software Engineer · Product Builder
      </Eyebrow>
      <Heading as="h1" textStyle="display.hero" maxW="1280px">
        I turn business ideas into digital products people can actually use.
      </Heading>
    </Section>
  );
}
