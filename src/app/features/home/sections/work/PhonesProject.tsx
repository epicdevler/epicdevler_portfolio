import { Box, Heading, Text } from "@chakra-ui/react";
import { MediaSlot } from "@/components/media/MediaSlot";
import { Reveal } from "@/components/motion/Reveal";
import type { Project } from "@/content/types";
import { MetaList } from "./MetaList";
import { ProjectKicker } from "./ProjectKicker";
import { RuleLink } from "./RuleLink";
import { KEEPUP_SCREENS } from "./work-content";

const PHONE_OFFSETS = ["18%", "0", "9%"] as const;

/** 02 — text left, tile panel with three staggered phone frames right. */
export function PhonesProject({ project }: { project: Project }) {
  return (
    <Reveal
      as="article"
      mt="clamp(96px, 12vw, 176px)"
      display="flex"
      flexWrap="wrap"
      gap="clamp(32px, 5vw, 72px)"
      alignItems="flex-end"
    >
      <Box
        flex="1 1 280px"
        display="flex"
        flexDirection="column"
        gap="22px"
        maxW="460px"
      >
        <ProjectKicker index={project.index} category={project.category} />
        <Heading as="h3" textStyle="title.xl" m="0">
          {project.title}
        </Heading>
        <Text
          textStyle="lead"
          fontSize="clamp(17px, 1.4vw, 20px)"
          color="fg.body"
          m="0"
        >
          {project.summary}
        </Text>
        <Box display="flex" flexDirection="column">
          {project.role && (
            <MetaList items={[{ label: "Role", value: project.role }]} />
          )}
          {project.liveUrl ? (
            <RuleLink
              href={project.liveUrl}
              label="Explore project"
              context={project.title}
            />
          ) : (
            // TODO(content): KeepUp has no live URL or case study yet.
            <Box
              display="flex"
              justifyContent="space-between"
              py="16px"
              borderTopWidth="1px"
              borderBottomWidth="1px"
              borderColor="border.strong"
              fontWeight="500"
              color="fg.muted"
            >
              <span>Case study coming soon</span>
            </Box>
          )}
        </Box>
      </Box>

      {/* TODO(content): real KeepUp screenshots → set `src` on each MediaSlot. */}
      <Box
        flex="2.4 1 480px"
        maxW="860px"
        ml="auto"
        minW="0"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap="clamp(12px, 2vw, 28px)"
        bg="bg.tile"
        borderRadius="panel"
        py="clamp(24px, 5vw, 72px)"
        px="clamp(20px, 4vw, 56px)"
        aria-hidden
      >
        {KEEPUP_SCREENS.map((caption, i) => (
          <Box
            key={caption}
            aspectRatio="9 / 19"
            borderRadius="device"
            overflow="hidden"
            borderWidth="6px"
            borderColor="border.strong"
            bg="bg.canvas"
            shadow="device.sm"
            mt={PHONE_OFFSETS[i]}
          >
            <MediaSlot
              alt=""
              caption={caption}
              sizes="(min-width: 1440px) 240px, 28vw"
              placeholderTone="paper"
            />
          </Box>
        ))}
      </Box>
    </Reveal>
  );
}
