import {
  Box,
  Heading,
  Text,
  type BoxProps,
  type TextProps,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export type SectionHeaderSize = "sm" | "md" | "lg" | "xl" | "contact";

export type SectionHeaderProps = Omit<BoxProps, "title"> & {
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  /**
   * split = eyebrow+title left, lead right-aligned at the bottom (do, capabilities)
   * stack = eyebrow, title, lead stacked (work, approach, toolkit)
   */
  layout?: "split" | "stack";
  /** Title text style: sm/md/lg/xl → display.*, contact → display.contact. */
  size?: SectionHeaderSize;
  onDark?: boolean;
  /** Heading element. Default "h2". */
  as?: "h1" | "h2" | "h3";
  /** Extra props for the lead paragraph (maxW, ml, alignSelf…). */
  leadProps?: TextProps;
};

const titleStyle: Record<SectionHeaderSize, string> = {
  sm: "display.sm",
  md: "display.md",
  lg: "display.lg",
  xl: "display.xl",
  contact: "display.contact",
};

/**
 * Eyebrow + heading (+ optional lead) block used at the top of sections.
 *
 * @example
 * <SectionHeader
 *   eyebrow="What I actually do"
 *   title="From idea to working product."
 *   lead="I work across the layers…"
 *   layout="split"
 *   size="lg"
 * />
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  layout = "stack",
  size = "lg",
  onDark = false,
  as = "h2",
  leadProps,
  ...rest
}: SectionHeaderProps) {
  const heading = (
    <Heading as={as} textStyle={titleStyle[size]} m="0" color="inherit">
      {title}
    </Heading>
  );

  const leadNode = lead ? (
    <Text
      textStyle="lead"
      color={onDark ? "fg.inverted.muted" : "fg.body"}
      m="0"
      maxW={layout === "split" ? "460px" : "520px"}
      justifySelf={layout === "split" ? "end" : undefined}
      {...leadProps}
    >
      {lead}
    </Text>
  ) : null;

  if (layout === "split") {
    return (
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 300px), 1fr))"
        gap="clamp(32px, 5vw, 72px)"
        alignItems="end"
        {...rest}
      >
        <Box display="flex" flexDirection="column" gap="28px">
          <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
          {heading}
        </Box>
        {leadNode}
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap="28px" {...rest}>
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      {heading}
      {leadNode}
    </Box>
  );
}
