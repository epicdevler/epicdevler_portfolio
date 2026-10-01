import { Box, Text, type TextProps } from "@chakra-ui/react";

export type EyebrowProps = TextProps & {
  /** Leading 28px rule (hero). */
  rule?: boolean;
  /** Leading 6px dot. */
  dot?: boolean;
  /** Use on ink backgrounds (on-dark green). */
  onDark?: boolean;
  /** Override tone: accent (default) or muted grey. */
  tone?: "accent" | "muted";
};

/**
 * Mono, uppercase section label ("SELECTED WORK").
 * Text is rendered as written; CSS uppercases it.
 */
export function Eyebrow({
  rule = false,
  dot = false,
  onDark = false,
  tone = "accent",
  children,
  ...rest
}: EyebrowProps) {
  const color =
    tone === "muted"
      ? onDark
        ? "fg.inverted.subtle"
        : "fg.muted"
      : onDark
        ? "fg.accent.onDark"
        : "fg.accent";

  return (
    <Text
      as="p"
      textStyle="eyebrow"
      color={color}
      display="flex"
      alignItems="center"
      gap={rule ? "12px" : "8px"}
      m="0"
      {...rest}
    >
      {rule && (
        <Box
          as="span"
          aria-hidden
          w="28px"
          h="1px"
          bg="currentColor"
          flexShrink={0}
        />
      )}
      {dot && (
        <Box
          as="span"
          aria-hidden
          boxSize="6px"
          borderRadius="full"
          bg="currentColor"
          flexShrink={0}
        />
      )}
      <Box as="span">{children}</Box>
    </Text>
  );
}
