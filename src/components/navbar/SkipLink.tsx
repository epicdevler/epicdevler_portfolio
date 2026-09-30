import { Link as ChakraLink } from "@chakra-ui/react";
import { MAIN_CONTENT_ID } from "./nav-items";

/**
 * "Skip to content" link. Off-screen until it receives keyboard focus,
 * then slides into the top-left corner above the sticky nav.
 */
export function SkipLink() {
  return (
    <ChakraLink
      href={`#${MAIN_CONTENT_ID}`}
      variant="plain"
      position="fixed"
      top="12px"
      left="12px"
      zIndex="skipNav"
      px="16px"
      py="9px"
      borderRadius="pill"
      bg="bg.solid"
      color="fg.inverted.strong"
      fontSize="14px"
      fontWeight="500"
      transform="translateY(-200%)"
      transitionProperty="transform"
      transitionDuration="ui"
      transitionTimingFunction="reveal"
      _motionReduce={{ transition: "none" }}
      _hover={{ color: "fg.inverted.strong" }}
      _focus={{ transform: "translateY(0)" }}
    >
      Skip to content
    </ChakraLink>
  );
}
