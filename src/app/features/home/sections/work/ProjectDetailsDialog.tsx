"use client";

import {
  Box,
  chakra,
  CloseButton,
  Dialog,
  Heading,
  Portal,
  Text,
} from "@chakra-ui/react";
import { MediaSlot } from "@/components/media/MediaSlot";
import type { Project } from "@/content/types";
import { MetaList } from "./MetaList";
import { ProjectKicker } from "./ProjectKicker";
import { RuleLink } from "./RuleLink";

/**
 * "View details" rule-row trigger + dialog with a project's long-form copy
 * (what I worked on, project story). The page itself only shows a brief.
 */
export function ProjectDetailsDialog({ project }: { project: Project }) {
  return (
    <Dialog.Root
      size={{ base: "full", md: "lg" }}
      scrollBehavior="inside"
      placement="center"
    >
      <Dialog.Trigger asChild>
        <chakra.button
          type="button"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="4"
          w="full"
          py="16px"
          borderBottomWidth="1px"
          borderColor="border.strong"
          fontWeight="500"
          textAlign="start"
          cursor="pointer"
          transitionProperty="color, padding"
          transitionDuration="0.3s"
          _hover={{ color: "fg.accent", pl: "8px" }}
          _motionReduce={{ transition: "none" }}
          aria-haspopup="dialog"
        >
          <span>
            View details
            <Box as="span" srOnly>
              {`: ${project.title}`}
            </Box>
          </span>
          <Box as="span" aria-hidden>
            +
          </Box>
        </chakra.button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop _motionReduce={{ animation: "none" }} />
        <Dialog.Positioner>
          <Dialog.Content
            bg="bg.canvas"
            color="fg"
            borderRadius={{ base: "0", md: "panel" }}
            _motionReduce={{ animation: "none" }}
          >
            <Dialog.Header
              display="flex"
              flexDirection="column"
              gap="14px"
              px="clamp(20px, 4vw, 40px)"
              pt="clamp(24px, 4vw, 40px)"
              pb="0"
            >
              <ProjectKicker
                index={project.index}
                category={project.category}
                pr="40px"
              />
              <Dialog.Title asChild>
                <Heading as="h2" textStyle="title.lg" m="0">
                  {project.title}
                </Heading>
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.CloseTrigger asChild top="16px" insetEnd="16px">
              <CloseButton aria-label="Close project details" size="md" />
            </Dialog.CloseTrigger>

            <Dialog.Body
              display="flex"
              flexDirection="column"
              gap="28px"
              px="clamp(20px, 4vw, 40px)"
              py="28px"
            >
              {project.image && (
                <MediaSlot
                  src={project.image.src}
                  alt={project.image.alt}
                  aspectRatio="16 / 10"
                  radius="frame"
                  borderWidth="1px"
                  borderColor="border.emphasized"
                  objectPosition="top"
                  flexShrink={0}
                  sizes="(min-width: 768px) 640px, 100vw"
                />
              )}

              <Text textStyle="lead" color="fg.body" m="0">
                {project.summary}
              </Text>

              {project.contribution?.length ? (
                <DetailBlock
                  label="What I worked on"
                  paragraphs={project.contribution}
                />
              ) : null}
              {project.story ? (
                <DetailBlock label="Project story" paragraphs={[project.story]} />
              ) : null}

              <Box display="flex" flexDirection="column">
                <MetaList
                  items={[
                    ...(project.role
                      ? [{ label: "Role", value: project.role }]
                      : []),
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
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

function DetailBlock({
  label,
  paragraphs,
}: {
  label: string;
  paragraphs: string[];
}) {
  return (
    <Box display="flex" flexDirection="column" gap="10px">
      <Heading as="h3" textStyle="mono.sm" color="fg.muted" m="0">
        {label}
      </Heading>
      {paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          fontSize="16px"
          lineHeight="1.6"
          color="fg.secondary"
          m="0"
        >
          {paragraph}
        </Text>
      ))}
    </Box>
  );
}
