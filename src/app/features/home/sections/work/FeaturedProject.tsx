import { Box, Heading, Link, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { MediaSlot } from "@/components/media/MediaSlot";
import { Reveal } from "@/components/motion/Reveal";
import type { Project } from "@/content/types";
import { MetaList } from "./MetaList";
import { RuleLink } from "./RuleLink";
import { FEATURED_URL_LABEL } from "./work-content";

const panelGrid =
  "linear-gradient({colors.border.grid.inverted} 1px, transparent 1px), linear-gradient(to right, {colors.border.grid.inverted} 1px, transparent 1px)";

/** 01 — featured project: dark panel with browser + phone frames. */
export function FeaturedProject({ project }: { project: Project }) {
  const panel = <FeaturedPanel project={project} />;

  return (
    <Reveal
      as="article"
      mt="clamp(72px, 9vw, 136px)"
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
          {panel}
        </Link>
      ) : (
        panel
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
          {project.liveUrl && (
            <RuleLink
              href={project.liveUrl}
              label="Explore project"
              context={project.title}
            />
          )}
        </Box>
      </Box>
    </Reveal>
  );
}

function FeaturedPanel({ project }: { project: Project }): ReactNode {
  return (
    <Box
      position="relative"
      bg="bg.inverted.panel"
      borderRadius="panel"
      overflow="hidden"
      pt="clamp(20px, 5vw, 72px)"
      px="clamp(20px, 5vw, 72px)"
    >
      <Box
        aria-hidden
        position="absolute"
        inset="0"
        pointerEvents="none"
        bgImage={panelGrid}
        bgSize="48px 48px"
      />

      {/* Browser frame */}
      <Box
        position="relative"
        w="82%"
        bg="bg.canvas"
        borderTopRadius="frame"
        overflow="hidden"
        shadow="device"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="6px"
          py="11px"
          px="14px"
          bg="bg.chrome"
          borderBottomWidth="1px"
          borderColor="border.chrome"
          aria-hidden
        >
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              as="span"
              display="block"
              boxSize="9px"
              flexShrink={0}
              borderRadius="full"
              bg="bg.chrome.dot"
            />
          ))}
          <Box
            as="span"
            ml="12px"
            fontFamily="mono"
            fontSize="11px"
            color="fg.muted"
            bg="bg.canvas"
            py="3px"
            px="12px"
            borderRadius="pill"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            minW="0"
          >
            {FEATURED_URL_LABEL}
          </Box>
        </Box>
        <MediaSlot
          src={project.image?.src}
          alt={project.image?.alt ?? project.title}
          caption={project.placeholder}
          aspectRatio="16 / 9"
          objectPosition="top"
          sizes="(min-width: 1440px) 940px, 72vw"
          placeholderTone="paper"
        />
      </Box>

      {/* Phone frame.
          TODO(content): no ErrandKing mobile screenshot exists — this shows a
          top-left crop of the desktop preview. Swap in a real mobile screen. */}
      <Box
        position="absolute"
        right="clamp(16px, 4vw, 64px)"
        bottom="clamp(24px, 5vw, 72px)"
        w="24%"
        minW="120px"
        aspectRatio="9 / 17"
        borderRadius="canvas"
        overflow="hidden"
        borderWidth="6px"
        borderColor="border.inverted.subtle"
        shadow="device"
        bg="bg.canvas"
      >
        <MediaSlot
          src={project.image?.src}
          alt=""
          caption="Mobile request flow"
          objectPosition="left top"
          sizes="(min-width: 1440px) 300px, (min-width: 500px) 24vw, 120px"
          placeholderTone="paper"
        />
      </Box>
    </Box>
  );
}
