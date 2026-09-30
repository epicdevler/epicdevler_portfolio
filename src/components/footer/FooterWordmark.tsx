import { SiteConfig } from "@/site-config";
import { Box, Flex } from "@chakra-ui/react";

/**
 * Giant cropped name + green square. Purely decorative (the name is already
 * announced in the footer's first column), so hidden from assistive tech.
 *
 * The design's font-size floor of 56px overflows a 360px viewport, so the
 * floor is lowered to keep the fluid 13.6vw scale on small screens; the row
 * also clips horizontally as a safety net.
 */
export function FooterWordmark() {
  return (
    <Flex
      aria-hidden="true"
      borderTopWidth="1px"
      borderColor="border.strong"
      align="flex-end"
      gap="clamp(10px, 1.5vw, 20px)"
      pt="3"
      overflowX="clip"
    >
      <Box
        fontWeight="600"
        fontSize="clamp(36px, 13.6vw, 210px)"
        lineHeight="0.8"
        letterSpacing="-0.06em"
        whiteSpace="nowrap"
        transform="translateY(12%)"
        color="fg"
        minW="0"
      >
        {SiteConfig.name}
      </Box>
      <Box
        as="span"
        display="block"
        flexShrink={0}
        boxSize="clamp(12px, 1.6vw, 24px)"
        bg="bg.accent"
        mb="clamp(8px, 1vw, 14px)"
      />
    </Flex>
  );
}
