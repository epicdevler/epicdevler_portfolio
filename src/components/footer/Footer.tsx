import { SectionContainer } from "@/components/layout/SectionContainer";
import { SiteConfig } from "@/site-config";
import { Box, Text } from "@chakra-ui/react";

/**
 * STUB — owned by the "nav/footer" agent. See CONTRACT.md.
 * Rendered once in the marketing layout, after page content.
 */
export function Footer() {
  return (
    <Box as="footer" bg="bg.canvas" overflow="hidden">
      <SectionContainer pt="clamp(56px, 6vw, 88px)" pb="10">
        <Text fontWeight="600" fontSize="16px">
          {SiteConfig.name}
        </Text>
        <Text fontSize="14px" color="fg.muted">
          {SiteConfig.role}
        </Text>
      </SectionContainer>
    </Box>
  );
}
