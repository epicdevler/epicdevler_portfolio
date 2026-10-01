import { Box } from "@chakra-ui/react";

type StepTrackProps = {
  /** First step: filled green node. */
  active?: boolean;
  /** Last step: rule fades out and ends with a green ↻. */
  last?: boolean;
};

/**
 * Decorative timeline track for an approach step.
 * Vertical (node on top, rule running down) when steps are stacked on
 * narrow screens; horizontal (node, then rule to the right) from `md`.
 */
export function StepTrack({ active = false, last = false }: StepTrackProps) {
  return (
    <Box
      aria-hidden="true"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      h={{ base: "full", md: "auto" }}
    >
      <Box
        as="span"
        display="block"
        flexShrink={0}
        boxSize="14px"
        borderRadius="pill"
        bg={active ? "bg.accent" : "bg.canvas"}
        borderWidth={active ? "0" : "1.5px"}
        borderStyle="solid"
        borderColor="border.strong"
      />
      <Box
        as="span"
        display="block"
        flex="1"
        w={{ base: "1px", md: "auto" }}
        h={{ base: "auto", md: "1px" }}
        bg={last ? undefined : "border.strong"}
        bgImage={
          last
            ? {
                base: "linear-gradient(to bottom, {colors.border.strong}, transparent)",
                md: "linear-gradient(to right, {colors.border.strong}, transparent)",
              }
            : undefined
        }
      />
      {last ? (
        <Box
          as="span"
          fontFamily="mono"
          fontSize="12px"
          lineHeight="1"
          color="fg.accent"
          pl={{ base: "0", md: "8px" }}
          pt={{ base: "8px", md: "0" }}
        >
          ↻
        </Box>
      ) : null}
    </Box>
  );
}
