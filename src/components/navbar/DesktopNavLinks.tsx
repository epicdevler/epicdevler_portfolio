"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import {
  Box,
  Link as ChakraLink,
  HStack,
  type StackProps,
} from "@chakra-ui/react";
import {
  LayoutGroup,
  motion,
  useReducedMotion,
  type Transition,
} from "motion/react";
import NextLink from "next/link";
import { DESKTOP_NAV_ITEMS, NAV_SECTION_IDS } from "./nav-items";

/** Shared-element id for the sliding active-link bar. */
const INDICATOR_LAYOUT_ID = "desktop-nav-active-indicator";

/** Matches the `ui` duration token (0.25s) and `reveal` easing. */
const SLIDE_TRANSITION: Transition = {
  duration: 0.25,
  ease: [0.2, 0.7, 0.2, 1],
};

/**
 * Inline section links (md and up). Client leaf: needed for the
 * scroll-driven `aria-current` state and the sliding active indicator.
 *
 * The indicator is a thin accent bar under the active link, shared across
 * links via `layoutId` so it slides between them. It is decorative
 * (`aria-hidden`); `aria-current="location"` carries the semantics.
 * No section active (e.g. hero at the top, or Contact, which has no inline
 * link) → no indicator.
 */
export function DesktopNavLinks(props: StackProps) {
  const active = useActiveSection(NAV_SECTION_IDS);
  const reduceMotion = useReducedMotion();
  const transition: Transition = reduceMotion
    ? { duration: 0 }
    : SLIDE_TRANSITION;

  return (
    <LayoutGroup id="desktop-nav">
      <HStack
        asChild
        listStyleType="none"
        gap="clamp(16px, 2.4vw, 32px)"
        {...props}
      >
        {/* layoutRoot: the nav is sticky, so page scroll must not be read as
            the indicator moving vertically. */}
        <motion.ul layoutRoot>
          {DESKTOP_NAV_ITEMS.map((item) => {
            const isActive = active === item.sectionId;
            return (
              <Box as="li" key={item.href} position="relative">
                <ChakraLink asChild variant="nav" fontSize="14px">
                  <NextLink
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {item.label}
                  </NextLink>
                </ChakraLink>
                {isActive && (
                  <Box
                    asChild
                    position="absolute"
                    left="0"
                    right="0"
                    bottom="-7px"
                    h="2px"
                    bg="bg.accent"
                    pointerEvents="none"
                  >
                    <motion.span
                      aria-hidden
                      layoutId={INDICATOR_LAYOUT_ID}
                      transition={transition}
                    />
                  </Box>
                )}
              </Box>
            );
          })}
        </motion.ul>
      </HStack>
    </LayoutGroup>
  );
}
