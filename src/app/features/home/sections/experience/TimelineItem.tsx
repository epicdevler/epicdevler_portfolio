import { Box, Heading, Text, VisuallyHidden } from "@chakra-ui/react";
import type { ExperienceItem } from "@/content/types";
import { formatPeriod } from "./experience-content";

export type TimelineItemProps = {
  item: ExperienceItem;
  isFirst: boolean;
  isLast: boolean;
};

/** Offset of the dot from the item's top padding edge (design: 12px). */
const DOT_OFFSET = 12;
/** Vertical padding between items (design: 40px). */
const ITEM_GAP = 40;

/**
 * One entry of the experience timeline: dot on the rail, company + focus on
 * the left, one-line summary on the right. Renders an `<li>`.
 */
export function TimelineItem({ item, isFirst, isLast }: TimelineItemProps) {
  const period = formatPeriod(item.period);
  const isCurrent = item.current === true;

  return (
    <Box
      as="li"
      position="relative"
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 260px), 1fr))"
      columnGap="40px"
      rowGap="10px"
      pt={isFirst ? "0" : `${ITEM_GAP}px`}
      pb={isLast ? "0" : `${ITEM_GAP}px`}
      borderTopWidth={isFirst ? undefined : "1px"}
      borderColor="border"
    >
      {/* Rail dot: filled green for the current role, hollow otherwise. */}
      <Box
        as="span"
        aria-hidden
        position="absolute"
        left="-36px"
        top={`${(isFirst ? 0 : ITEM_GAP) + DOT_OFFSET}px`}
        boxSize="13px"
        borderRadius="full"
        display="block"
        {...(isCurrent
          ? { bg: "bg.accent" }
          : { bg: "bg.canvas", borderWidth: "1.5px", borderColor: "border.strong" })}
      />

      <Box display="flex" flexDirection="column" gap="6px" minW="0">
        <Heading as="h3" textStyle="title.sm" m="0" color="fg">
          {item.company}
          {isCurrent && <VisuallyHidden> (current role)</VisuallyHidden>}
        </Heading>
        <Text
          m="0"
          fontFamily="mono"
          fontSize="12px"
          lineHeight="1.5"
          letterSpacing="0.06em"
          color="fg.accent"
        >
          {item.focus}
        </Text>
        {period && (
          <Text m="0" textStyle="mono.md" color="fg.muted">
            {period}
          </Text>
        )}
      </Box>

      <Text m="0" fontSize="17px" lineHeight="1.55" color="fg.body" pt="6px">
        {item.summary}
      </Text>
    </Box>
  );
}
