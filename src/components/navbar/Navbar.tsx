import { SectionContainer } from "@/components/layout/SectionContainer";
import { SiteConfig } from "@/site-config";
import { Box, Button, Link as ChakraLink, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { DesktopNavLinks } from "./DesktopNavLinks";
import { MobileNavMenu } from "./MobileNavMenu";
import { NAV_CTA } from "./nav-items";
import { SkipLink } from "./SkipLink";

/**
 * Sticky site navigation (server shell). Client leaves:
 * - `DesktopNavLinks` (md+) for the scroll-driven `aria-current` state;
 * - `MobileNavMenu` (<md) for the drawer.
 */
export function Navbar() {
  return (
    <>
      <SkipLink />
      <Box
        as="nav"
        aria-label="Primary"
        position="sticky"
        top="0"
        zIndex="nav"
        bg="bg.nav"
        backdropFilter="blur(14px)"
        borderBottomWidth="1px"
        borderColor="border.subtle"
      >
        <SectionContainer
          py="16px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={{ base: "12px", md: "24px" }}
        >
          <ChakraLink
            asChild
            variant="plain"
            display="flex"
            alignItems="center"
            gap="10px"
            flexShrink={0}
            fontWeight="600"
            fontSize="16px"
            letterSpacing="-0.01em"
          >
            <NextLink href="/#top">
              <Box
                as="span"
                aria-hidden
                display="block"
                boxSize="10px"
                bg="bg.accent"
              />
              {SiteConfig.name}
            </NextLink>
          </ChakraLink>

          <HStack gap={{ base: "8px", md: "clamp(16px, 2.4vw, 32px)" }}>
            <DesktopNavLinks hideBelow="md" />
            <Button
              asChild
              variant="solid"
              size={{ base: "sm", md: "md" }}
              hideBelow="sm"
            >
              <NextLink href={NAV_CTA.href}>{NAV_CTA.label}</NextLink>
            </Button>
            <MobileNavMenu hideFrom="md" />
          </HStack>
        </SectionContainer>
      </Box>
    </>
  );
}
