import { Box, Heading, Text } from "@chakra-ui/react";
import { Reveal } from "@/components/motion/Reveal";
import type { DoItem } from "./do-content";

type DoColumnProps = {
  item: DoItem;
  /** Position in the grid (0-based); drives dividers and padding per breakpoint. */
  position: number;
  total: number;
};

const COLUMN_GAP = "28px";
const STAGGER = 0.08;

/**
 * One step of the "What I actually do" grid.
 *
 * Layout per breakpoint:
 * - base (1 col): items stacked, horizontal rules between them.
 * - md (2 cols): vertical divider after the left column, rule between rows.
 * - xl (4 cols): vertical dividers between every column (design layout).
 */
export function DoColumn({ item, position, total }: DoColumnProps) {
  const isFirst = position === 0;
  const isLast = position === total - 1;
  const isLeftOfPair = position % 2 === 0;
  const isSecondRow = position >= 2;

  return (
    <Reveal
      as="li"
      delay={position * STAGGER}
      display="flex"
      flexDirection="column"
      gap="18px"
      pt="28px"
      pb={{ base: isLast ? "8px" : "28px", xl: "8px" }}
      ps={{
        base: "0",
        md: isLeftOfPair ? "0" : COLUMN_GAP,
        xl: isFirst ? "0" : COLUMN_GAP,
      }}
      pe={{
        base: "0",
        md: isLeftOfPair ? COLUMN_GAP : "0",
        xl: isLast ? "0" : COLUMN_GAP,
      }}
      borderColor="border"
      borderTopWidth={{
        base: isFirst ? "0" : "1px",
        md: isSecondRow ? "1px" : "0",
        xl: "0",
      }}
      borderEndWidth={{
        base: "0",
        md: isLeftOfPair ? "1px" : "0",
        xl: isLast ? "0" : "1px",
      }}
    >
      <Box
        aria-hidden
        display="flex"
        justifyContent="space-between"
        fontFamily="mono"
        fontSize="12px"
        color={item.current ? "fg.accent" : "fg.muted"}
      >
        <span>{item.index}</span>
        <span>{item.current ? "●" : "→"}</span>
      </Box>
      <Heading as="h3" textStyle="label" m="0" color="fg">
        {item.title}
      </Heading>
      <Text
        m="0"
        fontSize="16px"
        lineHeight="1.55"
        color="fg.secondary"
        textWrap="pretty"
      >
        {item.body}
      </Text>
    </Reveal>
  );
}
