import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Eyebrow } from "@/components/layout/Eyebrow";
import { Section } from "@/components/layout/Section";
import { MediaSlot } from "@/components/media/MediaSlot";
import { Reveal } from "@/components/motion/Reveal";
import { Chip } from "@/components/ui/Chip";
import { SiteConfig } from "@/site-config";
import { SECTION_IDS } from "../../section-ids";
import { ABOUT_CONTENT } from "./about-content";

const HEADING_ID = "about-heading";
const EXPLORING_ID = "about-exploring-heading";

/** About: portrait + caption (left), headline, bio and "Currently exploring" chips (right). */
export function AboutSection() {
  const { eyebrow, title, caption, intro, paragraphs, exploring } =
    ABOUT_CONTENT;

  return (
    <Section id={SECTION_IDS.about} tone="sand" aria-labelledby={HEADING_ID}>
      <Flex
        wrap="wrap"
        gap="clamp(40px,6vw,96px)"
        align="flex-start"
      >
        {/* Left: eyebrow, portrait, caption */}
        <Reveal
          flex="1 1 260px"
          maxW="420px"
          display="flex"
          flexDirection="column"
          gap="20px"
        >
          <Eyebrow>{eyebrow}</Eyebrow>
          <MediaSlot
            src={SiteConfig.profile.src}
            alt={SiteConfig.profile.alt}
            aspectRatio="4 / 5"
            radius="portrait"
            placeholderTone="tile"
            sizes="(min-width: 480px) 420px, calc(100vw - 40px)"
          />
          <Flex
            textStyle="mono.md"
            color="fg.muted"
            justify="space-between"
            gap="12px"
            wrap="wrap"
          >
            <Text as="span">{caption.name}</Text>
            <Text as="span">{caption.role}</Text>
          </Flex>
        </Reveal>

        {/* Right: headline, bio, currently exploring */}
        <Reveal
          flex="2.4 1 480px"
          minW="0"
          display="flex"
          flexDirection="column"
          gap="clamp(28px,3vw,40px)"
          pt="clamp(0px,4vw,56px)"
        >
          {/* <Heading as="h2" id={HEADING_ID} textStyle="display.lg" m="0">
            {title}
          </Heading> */}

          <Flex direction="column" gap="22px" maxW="720px">
            <Text
              m="0"
              fontSize="clamp(20px,1.8vw,26px)"
              lineHeight="1.42"
              letterSpacing="-0.01em"
              textWrap="pretty"
              color="fg"
            >
              {intro}
            </Text>
            {paragraphs.map((paragraph) => (
              <Text
                key={paragraph}
                m="0"
                textStyle="body.lg"
                lineHeight="1.6"
                color="fg.body"
              >
                {paragraph}
              </Text>
            ))}
          </Flex>

          <Flex
            direction="column"
            gap="16px"
            borderTopWidth="1px"
            borderColor="border.emphasized"
            pt="24px"
            maxW="720px"
          >
            <Heading
              as="h3"
              id={EXPLORING_ID}
              fontSize="15px"
              fontWeight="600"
              lineHeight="1.4"
              m="0"
            >
              {exploring.heading}
            </Heading>
            <Box
              as="ul"
              aria-labelledby={EXPLORING_ID}
              display="flex"
              flexWrap="wrap"
              gap="10px"
              listStyleType="none"
              m="0"
              p="0"
            >
              {exploring.items.map((item) => (
                <Box as="li" key={item} display="flex">
                  <Chip dot>{item}</Chip>
                </Box>
              ))}
            </Box>
          </Flex>
        </Reveal>
      </Flex>
    </Section>
  );
}
