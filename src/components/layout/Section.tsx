import { Box, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import {
  SectionContainer,
  type SectionContainerProps,
} from "./SectionContainer";

export type SectionTone = "paper" | "sand" | "ink";
export type SectionSize = "sm" | "md" | "lg" | "none";

export type SectionProps = Omit<BoxProps, "as"> & {
  /** Anchor id — use a value from SECTION_IDS. */
  id: string;
  /** paper = page bg, sand = alt bg, ink = dark. Default "paper". */
  tone?: SectionTone;
  /** 1px top rule (light or dark to match tone). */
  bordered?: boolean;
  /**
   * Vertical padding of the inner container.
   * sm = clamp(80,9vw,136) · md = clamp(88,11vw,168) · lg = clamp(96,13vw,200)
   * none = no padding (set your own via containerProps).
   */
  size?: SectionSize;
  /** Rendered element. Default "section" (hero uses "header"). */
  as?: "section" | "header" | "footer" | "div";
  /** Decorative layer rendered behind the container (e.g. <GridOverlay />). */
  overlay?: ReactNode;
  /** Props for the inner max-width container. */
  containerProps?: SectionContainerProps;
  children?: ReactNode;
};

const toneStyles: Record<SectionTone, BoxProps> = {
  paper: { bg: "bg.canvas", color: "fg" },
  sand: { bg: "bg.sand", color: "fg" },
  ink: {
    bg: "bg.inverted",
    color: "fg.inverted",
    // The light accent focus ring is too dark on ink — swap to on-dark green.
    css: {
      "& :where(a, button, input, textarea, select, [tabindex]):focus-visible":
        { outlineColor: "border.accent.onDark" },
    },
  },
};

const sizePadding: Record<SectionSize, string | undefined> = {
  sm: "section.sm",
  md: "section",
  lg: "section.lg",
  none: undefined,
};

/**
 * Full-bleed section with a toned background and a 1440px container.
 *
 * @example
 * <Section id={SECTION_IDS.work} tone="sand">
 *   <SectionHeader eyebrow="Selected work" title="…" />
 * </Section>
 */
export function Section({
  id,
  tone = "paper",
  bordered = false,
  size = "md",
  as = "section",
  overlay,
  containerProps,
  children,
  ...rest
}: SectionProps) {
  return (
    <Box
      as={as}
      id={id}
      position="relative"
      borderTopWidth={bordered ? "1px" : undefined}
      borderColor={
        bordered
          ? tone === "ink"
            ? "border.inverted.strong"
            : "border"
          : undefined
      }
      overflow={overlay ? "hidden" : undefined}
      {...toneStyles[tone]}
      {...rest}
    >
      {overlay}
      <SectionContainer py={sizePadding[size]} {...containerProps}>
        {children}
      </SectionContainer>
    </Box>
  );
}
