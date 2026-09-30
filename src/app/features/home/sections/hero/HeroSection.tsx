import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { GridOverlay } from "@/components/layout/GridOverlay";
import { Section } from "@/components/layout/Section";
import { SECTION_IDS, sectionHref } from "../../section-ids";
import { HERO_CONTENT } from "./hero-content";
import { ProductMap } from "./ProductMap";

/**
 * Hero (`#top`). Holds the page's only h1. The product map canvas sits
 * below the copy at full container width (layout change from the design).
 */
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
        {HERO_CONTENT.eyebrow}
      </Eyebrow>
      <Heading as="h1" textStyle="display.hero" maxW="1280px" m="0">
        {HERO_CONTENT.headline.lead}{" "}
        <Box as="span" color="fg.accent">
          {HERO_CONTENT.headline.accent}
        </Box>
      </Heading>

      <Flex
        direction="column"
        gap="32px"
        maxW="440px"
        mt="clamp(48px, 6vw, 88px)"
      >
        <Text textStyle="lead" color="fg.body" m="0">
          {HERO_CONTENT.lead}
        </Text>
        <Flex gap="12px" wrap="wrap">
          <Button asChild variant="solid" size="lg">
            <NextLink href={sectionHref(SECTION_IDS.work)}>
              {HERO_CONTENT.primaryCta} <span aria-hidden>↓</span>
            </NextLink>
          </Button>
          <Button asChild variant="outline" size="lg">
            <NextLink href={sectionHref(SECTION_IDS.contact)}>
              {HERO_CONTENT.secondaryCta}
            </NextLink>
          </Button>
        </Flex>
        <Text
          textStyle="mono.md"
          color="fg.muted"
          borderTopWidth="1px"
          borderColor="border"
          pt="16px"
          m="0"
        >
          {HERO_CONTENT.note}
        </Text>
      </Flex>

      <ProductMap />
    </Section>
  );
}
