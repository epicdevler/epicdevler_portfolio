import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { Reveal } from "@/components/motion/Reveal";
import type { Project } from "@/content/types";
import { FeaturedMedia } from "./FeaturedMedia";
import { MetaList } from "./MetaList";
import { ProjectDetailsDialog } from "./ProjectDetailsDialog";
import { RuleLink } from "./RuleLink";
import { hasDetails } from "./work-content";

/**
 * Shared featured-project layout: meta bar, full-width media panel, then a
 * two-column brief. Long-form copy lives in the details dialog.
 */
export function FeaturedArticle({
  project,
  first = false,
}: {
  project: Project;
  first?: boolean;
}) {
  const media = <FeaturedMedia project={project} />;

  return (
    <Reveal
      as="article"
      mt={first ? "clamp(72px, 9vw, 136px)" : "clamp(96px, 12vw, 176px)"}
      display="flex"
      flexDirection="column"
      gap="clamp(28px, 3vw, 40px)"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        gap="16px"
        flexWrap="wrap"
        textStyle="mono.sm"
        fontSize="12px"
        borderBottomWidth="1px"
        borderColor="border.strong"
        pb="14px"
      >
        <span>{project.index} — Featured</span>
        <Box as="span" color="fg.accent">
          {project.category}
        </Box>
      </Box>

      {project.liveUrl ? (
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live site (opens in a new tab)`}
          display="block"
          variant="plain"
          borderRadius="panel"
          transitionProperty="transform"
          transitionDuration="0.5s"
          transitionTimingFunction="reveal"
          _hover={{ transform: "translateY(-4px)" }}
          _motionReduce={{ transition: "none", _hover: { transform: "none" } }}
        >
          {media}
        </Link>
      ) : (
        media
      )}

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 320px), 1fr))"
        gap="clamp(32px, 5vw, 80px)"
        alignItems="start"
      >
        <Box display="flex" flexDirection="column" gap="20px">
          <Heading as="h3" textStyle="title.xl" m="0">
            {project.title}
          </Heading>
          <Text
            textStyle="lead"
            fontSize="clamp(18px, 1.5vw, 22px)"
            lineHeight="1.45"
            color="fg.body"
            maxW="560px"
            m="0"
          >
            {project.summary}
          </Text>
        </Box>
        <Box display="flex" flexDirection="column">
          <MetaList
            items={[
              ...(project.role ? [{ label: "Role", value: project.role }] : []),
              ...(project.stack.length
                ? [{ label: "Stack", value: project.stack.join(" · ") }]
                : []),
            ]}
          />
          {project.liveUrl ? (
            <RuleLink
              href={project.liveUrl}
              label="Explore project"
              context={project.title}
            />
          ) : (
            // TODO(content): no live URL or case study yet.
            <Box
              py="16px"
              borderTopWidth="1px"
              borderBottomWidth="1px"
              borderColor="border.strong"
              fontWeight="500"
              color="fg.muted"
            >
              Case study coming soon
            </Box>
          )}
          {hasDetails(project) && <ProjectDetailsDialog project={project} />}
        </Box>
      </Box>
    </Reveal>
  );
}
