"use client";

import { Box, Flex } from "@chakra-ui/react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { useCycleIndex } from "./use-cycle-index";

/*
 * Decorative "sketching" wireframe for the Interface card: blocks are drawn
 * one by one on a mobile frame, the frame then widens to desktop and the
 * blocks re-flow, then it collapses back. Reduced motion → static desktop.
 */

const STEP_MS = 650;
const STEPS = 12;
/** Loop starts on the desktop hold (see `stepState`). */
const START_STEP = 6;
const BLOCKS = ["nav", "hero", "card-a", "card-b"] as const;
type Block = (typeof BLOCKS)[number];

/** Frame + drawn block count for each step of the loop. */
function stepState(step: number): { desktop: boolean; drawn: number } {
  if (step <= 4) return { desktop: false, drawn: step }; // draw blocks
  if (step === 5) return { desktop: false, drawn: 4 }; // hold mobile
  if (step <= 8) return { desktop: true, drawn: 4 }; // morph + hold desktop
  if (step <= 10) return { desktop: false, drawn: 4 }; // back to mobile
  return { desktop: false, drawn: 0 }; // clear, loop
}

const AREAS = {
  mobile: `"nav" "hero" "card-a" "card-b"`,
  desktop: `"nav nav nav" "hero hero card-a" "hero hero card-b"`,
} as const;

const BLOCK_HEIGHT: Record<Block, { mobile: string; desktop: string }> = {
  nav: { mobile: "10px", desktop: "10px" },
  hero: { mobile: "30px", desktop: "auto" },
  "card-a": { mobile: "16px", desktop: "auto" },
  "card-b": { mobile: "16px", desktop: "auto" },
};

const spring = { type: "spring", stiffness: 260, damping: 30 } as const;

export function InterfaceWireframe() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const tick = useCycleIndex({ count: STEPS, intervalMs: STEP_MS, ref });
  // Offset so the first paint (SSR, pre-hydration) is the finished desktop
  // wireframe rather than an empty frame.
  const step = (tick + START_STEP) % STEPS;
  const { desktop, drawn } = reduceMotion
    ? { desktop: true, drawn: BLOCKS.length }
    : stepState(step);
  const newest = reduceMotion ? null : BLOCKS[drawn - 1];

  return (
    <Flex ref={ref} direction="column" gap="10px" flex="1">
      <Flex
        justify="space-between"
        textStyle="mono.sm"
        fontSize="10px"
        color="fg.inverted.subtle"
      >
        <span>Wireframe</span>
        <Box as="span" color="fg.accent.onDark">
          {desktop ? "Desktop · 1440" : "Mobile · 390"}
        </Box>
      </Flex>

      <Flex
        flex="1"
        minH="118px"
        align="center"
        justify="center"
        borderRadius="inset"
        bgImage="radial-gradient({colors.border.inverted} 1px, transparent 1px)"
        bgSize="10px 10px"
        p="8px"
      >
        <LayoutGroup>
            <motion.div
              layout={!reduceMotion}
              transition={spring}
              style={{
                width: desktop ? "100%" : "34%",
                height: desktop ? "96px" : "110px",
                display: "grid",
                gridTemplateAreas: desktop ? AREAS.desktop : AREAS.mobile,
                gridTemplateColumns: desktop ? "1fr 1fr 1fr" : "1fr",
                gridTemplateRows: desktop ? "10px 1fr 1fr" : "auto",
                alignContent: "start",
                gap: "5px",
                padding: "6px",
                borderRadius: 6,
                border: "1px dashed var(--epd-colors-border-inverted-emphasized)",
              }}
            >
              <AnimatePresence>
                {BLOCKS.slice(0, drawn).map((block) => (
                  <motion.div
                    key={block}
                    layout={!reduceMotion}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={spring}
                    style={{
                      gridArea: block,
                      height: desktop
                        ? BLOCK_HEIGHT[block].desktop
                        : BLOCK_HEIGHT[block].mobile,
                      position: "relative",
                      borderRadius: 3,
                      border: `1px solid ${
                        block === newest
                          ? "var(--epd-colors-border-accent-on-dark)"
                          : "var(--epd-colors-border-inverted-strong)"
                      }`,
                      transition: "border-color .4s",
                    }}
                  >
                    {block === newest && (
                      <motion.span
                        layoutId="wireframe-cursor"
                        transition={spring}
                        style={{
                          position: "absolute",
                          right: -4,
                          bottom: -4,
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: "var(--epd-colors-bg-accent-on-dark)",
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
        </LayoutGroup>
      </Flex>
    </Flex>
  );
}
