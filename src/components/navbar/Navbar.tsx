import { SectionContainer } from "@/components/layout/SectionContainer";
import { SiteConfig } from "@/site-config";
import { Box, Button, HStack, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { NAV_CTA, NAV_ITEMS } from "./nav-items";

/**
 * STUB — owned by the "nav/footer" agent. See CONTRACT.md.
 * Rendered once in the marketing layout (sticky). Functional baseline:
 * brand, section links and CTA. Active-state + mobile menu to be added
 * (use `useActiveSection` in a small client child).
 */
export function Navbar() {
  return (
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
        gap="24px"
        flexWrap="wrap"
      >
        <ChakraLink
          asChild
          variant="plain"
          display="flex"
          alignItems="center"
          gap="10px"
          fontWeight="600"
          fontSize="16px"
          letterSpacing="-0.01em"
        >
          <NextLink href="/#top">
            <Box as="span" aria-hidden boxSize="10px" bg="bg.accent" />
            {SiteConfig.name}
          </NextLink>
        </ChakraLink>

        <HStack gap="clamp(16px, 2.4vw, 32px)" fontSize="14px" flexWrap="wrap">
          {NAV_ITEMS.filter((item) => item.sectionId !== "contact").map(
            (item) => (
              <ChakraLink key={item.href} asChild variant="nav">
                <NextLink href={item.href}>{item.label}</NextLink>
              </ChakraLink>
            ),
          )}
          <Button asChild variant="solid" size="md">
            <NextLink href={NAV_CTA.href}>{NAV_CTA.label}</NextLink>
          </Button>
        </HStack>
      </SectionContainer>
    </Box>
  );
}
