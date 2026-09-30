"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { Link as ChakraLink, HStack, type StackProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { DESKTOP_NAV_ITEMS, NAV_SECTION_IDS } from "./nav-items";

/**
 * Inline section links (md and up). Client leaf: only needed for the
 * scroll-driven `aria-current` state.
 */
export function DesktopNavLinks(props: StackProps) {
  const active = useActiveSection(NAV_SECTION_IDS);

  return (
    <HStack
      as="ul"
      listStyleType="none"
      gap="clamp(16px, 2.4vw, 32px)"
      {...props}
    >
      {DESKTOP_NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <ChakraLink asChild variant="nav" fontSize="14px">
            <NextLink
              href={item.href}
              aria-current={active === item.sectionId ? "location" : undefined}
            >
              {item.label}
            </NextLink>
          </ChakraLink>
        </li>
      ))}
    </HStack>
  );
}
