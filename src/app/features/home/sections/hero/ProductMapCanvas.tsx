"use client";

import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useRef, type ReactNode } from "react";
import { PRODUCT_MAP_CYCLE_MS, PRODUCT_MAP_STAGES } from "./hero-content";
import { useCycleIndex } from "./use-cycle-index";

export type ProductMapCardEntry = {
  body: ReactNode;
  /** Optional right-aligned adornment on the card's label row. */
  labelAside?: ReactNode;
};

type ProductMapCanvasProps = {
  /** Cards in stage order (see PRODUCT_MAP_STAGES). */
  cards: readonly ProductMapCardEntry[];
};

/** Per-card inner gap from the design (interface and data cards are tighter). */
const CARD_GAP = ["14px", "14px", "12px", "14px", "12px", "14px"] as const;

/**
 * The cycling grid of the hero product map. Highlights one card at a time.
 * The visual grid and header are decorative (aria-hidden); the stages are
 * described once by a visually hidden list in ProductMap, so the cycling is
 * never announced.
 */
export function ProductMapCanvas({ cards }: ProductMapCanvasProps) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useCycleIndex({
    count: cards.length,
    intervalMs: PRODUCT_MAP_CYCLE_MS,
    ref,
  });
  const activeName = PRODUCT_MAP_STAGES[active]?.name ?? "";

  return (
    <Box ref={ref} aria-hidden>
      <Flex
        justify="space-between"
        align="center"
        gap="16px"
        wrap="wrap"
        px="4px"
        pt="4px"
        pb="18px"
        textStyle="mono.sm"
        color="fg.inverted.subtle"
      >
        <Flex as="span" align="center" gap="8px">
          <Box
            as="span"
            display="block"
            boxSize="6px"
            borderRadius="full"
            bg="bg.accent.onDark"
          />
          Product map / working draft
        </Flex>
        <Box as="span">
          Now:{" "}
          <Box as="span" color="fg.accent.onDark">
            {activeName}
          </Box>
        </Box>
      </Flex>

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
        gap="12px"
      >
        {cards.map(({ body, labelAside }, index) => {
          const stage = PRODUCT_MAP_STAGES[index];
          const isActive = index === active;
          return (
            <Flex
              key={stage?.name ?? index}
              direction="column"
              gap={CARD_GAP[index] ?? "14px"}
              minH={index < 3 ? "200px" : "180px"}
              p={{ base: "16px", lg: "20px" }}
              bg="bg.inverted.subtle"
              color="fg.inverted"
              borderWidth="1px"
              borderRadius="card"
              borderColor={
                isActive ? "border.accent.onDark" : "border.inverted.subtle"
              }
              transition="border-color .6s"
              _motionReduce={{ transition: "none" }}
            >
              <Flex
                justify="space-between"
                align="baseline"
                wrap="wrap"
                columnGap="12px"
                textStyle="mono.sm"
              >
                <Text
                  as="span"
                  color={isActive ? "fg.accent.onDark" : "fg.inverted.subtle"}
                  transition="color .6s"
                  _motionReduce={{ transition: "none" }}
                >
                  {String(index + 1).padStart(2, "0")} · {stage?.name}
                </Text>
                {labelAside ? (
                  <Box as="span" color="fg.accent.onDark" whiteSpace="nowrap">
                    {labelAside}
                  </Box>
                ) : null}
              </Flex>
              {body}
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
}
