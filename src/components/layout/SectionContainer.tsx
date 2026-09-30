import { Box, type BoxProps } from "@chakra-ui/react";

export type SectionContainerProps = BoxProps;

/**
 * Page-width container: max 1440px, centred, horizontal gutter.
 * Position is relative so it stacks above absolutely-positioned overlays.
 */
export function SectionContainer(props: SectionContainerProps) {
  return (
    <Box
      position="relative"
      w="full"
      maxW="page"
      mx="auto"
      px="gutter"
      {...props}
    />
  );
}
