import { Box, Heading, Link, Text, VisuallyHidden } from "@chakra-ui/react";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/motion/Reveal";
import type { Project } from "@/content/types";

/**
 * Compact list of the remaining projects (user decision — not in the design).
 * Styled after the design's rule links and meta rows.
 */
export function MoreWork({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <Reveal
      as="div"
      mt="clamp(96px, 12vw, 176px)"
      display="flex"
      flexDirection="column"
      gap="clamp(20px, 2vw, 28px)"
    >
      <Heading
        as="h3"
        id="more-work-title"
        textStyle="eyebrow"
        color="fg.accent"
        m="0"
      >
        More work
      </Heading>
      <Box
        as="ul"
        aria-labelledby="more-work-title"
        listStyleType="none"
        m="0"
        p="0"
        borderTopWidth="1px"
        borderColor="border.strong"
      >
        {projects.map((project) => (
          <MoreWorkRow key={project.slug} project={project} />
        ))}
      </Box>
    </Reveal>
  );
}

function MoreWorkRow({ project }: { project: Project }) {
  const links = [
    project.liveUrl && { href: project.liveUrl, label: "Live site" },
    project.githubUrl && { href: project.githubUrl, label: "GitHub" },
  ].filter((l): l is { href: string; label: string } => Boolean(l));

  return (
    <Box
      as="li"
      display="grid"
      gridTemplateColumns={{
        base: "1fr",
        md: "56px minmax(0, 1.3fr) minmax(0, 1fr)",
        xl: "56px minmax(0, 1.3fr) minmax(0, 1fr) auto",
      }}
      columnGap="clamp(20px, 3vw, 48px)"
      rowGap="14px"
      alignItems="baseline"
      py="clamp(20px, 2.4vw, 28px)"
      borderBottomWidth="1px"
      borderColor="border.emphasized"
    >
      <Text as="span" textStyle="mono.sm" fontSize="12px" color="fg.muted">
        {project.index}
      </Text>

      <Box display="flex" flexDirection="column" gap="8px" minW="0">
        <Heading
          as="h4"
          m="0"
          fontSize="clamp(24px, 2.4vw, 34px)"
          lineHeight="1.1"
          letterSpacing="-0.03em"
          fontWeight="500"
        >
          {project.title}
        </Heading>
        <Text m="0" fontSize="16px" lineHeight="1.5" color="fg.body" maxW="520px">
          {project.summary}
        </Text>
      </Box>

      <Box display="flex" flexDirection="column" gap="10px" minW="0">
        <Text as="span" textStyle="mono.sm" color="fg.accent">
          {project.category}
        </Text>
        {project.stack.length > 0 && (
          <Box
            as="ul"
            aria-label={`${project.title} stack`}
            listStyleType="none"
            m="0"
            p="0"
            display="flex"
            flexWrap="wrap"
            gap="6px"
          >
            {project.stack.map((tech) => (
              <Box as="li" key={tech}>
                <Chip variant="mono">{tech}</Chip>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {links.length > 0 && (
        <Box
          display="flex"
          gap="20px"
          flexWrap="wrap"
          gridColumn={{ md: "2 / -1", xl: "auto" }}
          justifySelf={{ xl: "end" }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="plain"
              fontWeight="500"
              fontSize="15px"
              whiteSpace="nowrap"
              borderBottomWidth="1px"
              borderColor="border.strong"
              borderRadius="0"
              pb="2px"
              _hover={{ color: "fg.accent", borderColor: "border.accent" }}
            >
              {link.label}
              <VisuallyHidden>
                {`: ${project.title} (opens in a new tab)`}
              </VisuallyHidden>
              <Box as="span" aria-hidden ml="6px">
                ↗
              </Box>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}
