import { Box, Heading, Text } from "@chakra-ui/react";
import { MediaSlot } from "@/components/media/MediaSlot";
import { Reveal } from "@/components/motion/Reveal";
import type { Project } from "@/content/types";
import { MetaList } from "./MetaList";
import { ProjectKicker } from "./ProjectKicker";
import { RuleLink } from "./RuleLink";

/** 03 — ink top rule, 16:10 screenshot left, details right. */
export function SplitProject({ project }: { project: Project }) {
  return (
    <Reveal
      as="article"
      mt="clamp(96px, 12vw, 176px)"
      display="flex"
      flexWrap="wrap"
      gap="clamp(32px, 5vw, 72px)"
      alignItems="flex-start"
      borderTopWidth="1px"
      borderColor="border.strong"
      pt="clamp(28px, 3vw, 40px)"
    >
      <MediaSlot
        src={project.image?.src}
        alt={project.image?.alt ?? project.title}
        caption={project.placeholder}
        aspectRatio="16 / 10"
        radius="panel"
        borderWidth="1px"
        borderColor="border.emphasized"
        placeholderTone="paper"
        objectPosition="top"
        sizes="(min-width: 1440px) 860px, (min-width: 900px) 62vw, 100vw"
        flex="2.4 1 480px"
        w="auto"
        minW="0"
      />
      <Box flex="1 1 280px" display="flex" flexDirection="column" gap="22px">
        <ProjectKicker index={project.index} category={project.category} />
        <Heading as="h3" textStyle="title.lg" m="0">
          {project.title}
        </Heading>
        <Text fontSize="18px" lineHeight="1.5" color="fg.body" m="0">
          {project.summary}
        </Text>
        <Box display="flex" flexDirection="column">
          <MetaList
            items={[
              ...(project.role ? [{ label: "Role", value: project.role }] : []),
              ...(project.stack.length
                ? [{ label: "Stack", value: project.stack.join(" · ") }]
                : []),
            ]}
          />
          {project.liveUrl && (
            <RuleLink
              href={project.liveUrl}
              label="Visit live site"
              context={project.title}
            />
          )}
          {project.githubUrl && (
            <RuleLink
              href={project.githubUrl}
              label="View source on GitHub"
              context={project.title}
            />
          )}
        </Box>
      </Box>
    </Reveal>
  );
}
