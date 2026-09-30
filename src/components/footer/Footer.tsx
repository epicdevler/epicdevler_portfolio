import { SectionContainer } from "@/components/layout/SectionContainer";
import { NAV_ITEMS } from "@/components/navbar/nav-items";
import { SiteConfig } from "@/site-config";
import { Box, Link, Stack, Text, VisuallyHidden } from "@chakra-ui/react";
import NextLink from "next/link";
import { FOOTER_EXTERNAL_LINKS } from "./footer-links";
import { FooterWordmark } from "./FooterWordmark";

const linkListProps = {
  as: "ul",
  listStyleType: "none",
  m: "0",
  p: "0",
  gap: "2",
  fontSize: "14px",
  alignItems: "flex-start",
} as const;

/**
 * Site footer. Rendered once in the marketing layout, after page content.
 */
export function Footer() {
  return (
    <Box as="footer" bg="bg.canvas" color="fg" overflow="hidden">
      <SectionContainer pt="clamp(56px, 6vw, 88px)" pb="0">
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 180px), 1fr))"
          gap="10"
          pb="clamp(48px, 6vw, 80px)"
        >
          <Stack gap="1.5">
            <Text fontWeight="600" fontSize="16px">
              {SiteConfig.name}
            </Text>
            <Text fontSize="14px" color="fg.muted">
              {SiteConfig.role}
            </Text>
          </Stack>

          <Box as="nav" aria-label="Footer">
            <Stack {...linkListProps}>
              {NAV_ITEMS.map((item) => (
                <li key={item.sectionId}>
                  <Link asChild variant="plain">
                    <NextLink href={item.href}>{item.label}</NextLink>
                  </Link>
                </li>
              ))}
            </Stack>
          </Box>

          <Stack {...linkListProps} aria-label="Elsewhere">
            {FOOTER_EXTERNAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  variant="plain"
                  href={link.href}
                  {...(link.newTab
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                  {link.newTab ? (
                    <VisuallyHidden> (opens in a new tab)</VisuallyHidden>
                  ) : null}
                </Link>
              </li>
            ))}
          </Stack>

          <Text
            fontSize="clamp(18px, 1.6vw, 22px)"
            lineHeight="1.35"
            letterSpacing="-0.01em"
            maxW="280px"
          >
            {SiteConfig.tagline}
          </Text>
        </Box>

        <FooterWordmark />
      </SectionContainer>
    </Box>
  );
}
