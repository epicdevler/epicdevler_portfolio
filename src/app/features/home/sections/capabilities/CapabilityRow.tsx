import { Box, Heading, Text } from "@chakra-ui/react";
import type { Capability } from "./capabilities-content";

type CapabilityRowProps = {
  capability: Capability;
};

/** One capability row: green mono index + h3 title on the left, description on the right. */
export function CapabilityRow({ capability }: CapabilityRowProps) {
  return (
    <Box
      as="li"
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 280px), 1fr))"
      columnGap="40px"
      rowGap="12px"
      alignItems="baseline"
      py="clamp(22px, 2.6vw, 34px)"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="border.inverted"
      transitionProperty="padding, background-color"
      transitionDuration=".35s"
      transitionTimingFunction="reveal"
      _motionReduce={{ transition: "none" }}
      css={{
        "@media (hover: hover)": {
          "&:hover": {
            paddingInlineStart: "20px",
            bg: "bg.inverted.hover",
          },
        },
      }}
    >
      <Box display="flex" gap="24px" alignItems="baseline">
        <Text
          as="span"
          fontFamily="mono"
          fontSize="12px"
          color="fg.accent.onDark"
          aria-hidden
        >
          {capability.index}
        </Text>
        <Heading as="h3" textStyle="title.md" m="0" color="inherit">
          {capability.title}
        </Heading>
      </Box>
      <Text
        m="0"
        fontSize="17px"
        lineHeight="1.5"
        color="fg.inverted.muted"
        maxW="520px"
        textWrap="pretty"
      >
        {capability.description}
      </Text>
    </Box>
  );
}
