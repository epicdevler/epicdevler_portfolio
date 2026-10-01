"use client";

import { Box } from "@chakra-ui/react";
import { motion, useReducedMotion, type Transition } from "motion/react";
import { useEffect, useRef } from "react";
import { useTimelineStep } from "./use-cycle-index";
import {
  setWireframeViewport,
  useWireframeViewport,
} from "./wireframe-viewport-store";

/*
 * Decorative "sketching" wireframe for the Interface card. On a phone frame
 * an app screen is drawn element by element (outlines draw on, text lines
 * grow, fills settle) while a cursor moves to each element. The frame then
 * widens to desktop and the same elements re-flow into an app layout
 * (sidebar, header, content grid), holds, collapses back and is redrawn.
 *
 * Everything is one SVG in a fixed viewBox; only SVG geometry attributes,
 * pathLength, opacity and a transform on the cursor are animated.
 * First paint (SSR) and prefers-reduced-motion show the finished desktop.
 */

// ---------------------------------------------------------------- geometry

const VIEW_W = 320;
const VIEW_H = 136;

type Rect = { x: number; y: number; w: number; h: number; r?: number };
type Circle = { cx: number; cy: number; r: number };
type Tone = "neutral" | "media" | "accent";

type Shape =
  | { kind: "box"; tone: Tone; m: Rect; d: Rect }
  | { kind: "text"; tone: Tone; m: Rect; d: Rect }
  | { kind: "dot"; tone: Tone; m: Circle; d: Circle }
  /** Image-placeholder diagonal across a box; `flip` mirrors it. */
  | { kind: "slash"; flip: boolean; m: Rect; d: Rect };

type Group = { id: string; shapes: readonly Shape[] };

const FRAME = {
  m: { x: 122, y: 4, w: 76, h: 128, r: 9 },
  d: { x: 4, y: 4, w: 312, h: 128, r: 5 },
} as const satisfies { m: Rect; d: Rect };

const MEDIA = {
  m: { x: 128, y: 41, w: 64, h: 28, r: 3 },
  d: { x: 60, y: 49, w: 118, h: 77, r: 3 },
} as const satisfies { m: Rect; d: Rect };

/** Drawn one per step on mobile, in this order. */
const GROUPS: readonly Group[] = [
  {
    id: "top-bar",
    shapes: [
      {
        kind: "box",
        tone: "neutral",
        m: { x: 128, y: 10, w: 64, h: 7, r: 2 },
        d: { x: 60, y: 10, w: 250, h: 12, r: 2 },
      },
    ],
  },
  {
    id: "avatar",
    shapes: [
      {
        kind: "dot",
        tone: "neutral",
        m: { cx: 134, cy: 29, r: 6 },
        d: { cx: 302, cy: 16, r: 4 },
      },
    ],
  },
  {
    id: "heading",
    shapes: [
      {
        kind: "text",
        tone: "neutral",
        m: { x: 144, y: 25, w: 40, h: 3.5 },
        d: { x: 60, y: 29, w: 72, h: 5 },
      },
      {
        kind: "text",
        tone: "neutral",
        m: { x: 144, y: 31.5, w: 26, h: 3 },
        d: { x: 60, y: 38, w: 48, h: 3 },
      },
    ],
  },
  {
    id: "media",
    shapes: [
      { kind: "box", tone: "media", ...MEDIA },
      { kind: "slash", flip: false, ...MEDIA },
      { kind: "slash", flip: true, ...MEDIA },
    ],
  },
  {
    id: "row-a",
    shapes: [
      {
        kind: "dot",
        tone: "neutral",
        m: { cx: 132, cy: 77, r: 3.5 },
        d: { cx: 192, cy: 56, r: 4 },
      },
      {
        kind: "text",
        tone: "neutral",
        m: { x: 139, y: 75.5, w: 44, h: 3 },
        d: { x: 200, y: 54.5, w: 72, h: 3 },
      },
    ],
  },
  {
    id: "row-b",
    shapes: [
      {
        kind: "dot",
        tone: "neutral",
        m: { cx: 132, cy: 88, r: 3.5 },
        d: { cx: 192, cy: 69, r: 4 },
      },
      {
        kind: "text",
        tone: "neutral",
        m: { x: 139, y: 86.5, w: 32, h: 3 },
        d: { x: 200, y: 67.5, w: 52, h: 3 },
      },
    ],
  },
  {
    id: "button",
    shapes: [
      {
        kind: "box",
        tone: "accent",
        m: { x: 128, y: 96, w: 64, h: 10, r: 5 },
        d: { x: 262, y: 28, w: 48, h: 11, r: 5.5 },
      },
      {
        kind: "text",
        tone: "accent",
        m: { x: 148, y: 99.75, w: 24, h: 2.5 },
        d: { x: 274, y: 32.25, w: 24, h: 2.5 },
      },
    ],
  },
  {
    id: "tab-bar",
    shapes: [
      {
        kind: "box",
        tone: "neutral",
        m: { x: 128, y: 112, w: 64, h: 14, r: 3 },
        d: { x: 10, y: 10, w: 44, h: 116, r: 3 },
      },
      // Tab icons re-flow into the sidebar's nav items.
      ...[0, 1, 2, 3].map(
        (i): Shape => ({
          kind: "dot",
          tone: i === 0 ? "accent" : "neutral",
          m: { cx: 139 + i * 14, cy: 119, r: 1.8 },
          d: { cx: 20, cy: 34 + i * 12, r: 2 },
        }),
      ),
    ],
  },
];

const fixedRect = (r: Rect) => ({ m: r, d: r });

/** Desktop-only additions, drawn once the frame has widened. */
const EXTRAS: readonly Group[] = [
  {
    id: "nav-labels",
    shapes: [0, 1, 2, 3].map(
      (i): Shape => ({
        kind: "text",
        tone: "neutral",
        ...fixedRect({ x: 27, y: 32.5 + i * 12, w: i === 0 ? 20 : 16, h: 3 }),
      }),
    ),
  },
  {
    id: "card-a",
    shapes: [
      { kind: "box", tone: "neutral", ...fixedRect({ x: 186, y: 80, w: 58, h: 46, r: 3 }) },
      { kind: "text", tone: "neutral", ...fixedRect({ x: 192, y: 116, w: 34, h: 3 }) },
    ],
  },
  {
    id: "card-b",
    shapes: [
      { kind: "box", tone: "neutral", ...fixedRect({ x: 252, y: 80, w: 58, h: 46, r: 3 }) },
      { kind: "text", tone: "neutral", ...fixedRect({ x: 258, y: 116, w: 26, h: 3 }) },
    ],
  },
];

type Point = { x: number; y: number };

/** Cursor start: the top-left of the first element to be drawn. */
const CURSOR_REST: Point = { x: 128, y: 10 };

/** Where the cursor rests while an element is being drawn (its end point). */
function anchorOf(shape: Shape, desktop: boolean): Point {
  if (shape.kind === "dot") {
    const c = desktop ? shape.d : shape.m;
    return { x: c.cx + c.r * 0.7, y: c.cy + c.r * 0.7 };
  }
  const r = desktop ? shape.d : shape.m;
  return shape.kind === "text"
    ? { x: r.x + r.w, y: r.y + r.h / 2 }
    : { x: r.x + r.w, y: r.y + r.h };
}

function groupAnchor(group: Group | undefined, desktop: boolean): Point {
  const first = group?.shapes[0];
  return first ? anchorOf(first, desktop) : CURSOR_REST;
}

const BUTTON = GROUPS.find((g) => g.id === "button");
const CARD_B = EXTRAS.find((g) => g.id === "card-b");

// ---------------------------------------------------------------- timeline

const DRAW_MS = 560;
/** Step hold times: one per drawn group, then hold / widen / hold / collapse / clear. */
const STEP_DURATIONS: readonly number[] = [
  ...GROUPS.map(() => DRAW_MS),
  700, // hold mobile
  1300, // widen to desktop, draw extras
  1400, // hold desktop
  1000, // collapse to mobile
  500, // clear
];
const HOLD_MOBILE = GROUPS.length;
const TO_DESKTOP = HOLD_MOBILE + 1;
const HOLD_DESKTOP = TO_DESKTOP + 1;
const TO_MOBILE = HOLD_DESKTOP + 1;
/** First paint (SSR) and reduced motion show the finished desktop. */
const START_STEP = HOLD_DESKTOP;

/** Seconds the extras / cursor wait for the frame to widen. */
const WIDEN_DELAY = 0.55;

type StepState = {
  desktop: boolean;
  /** Number of GROUPS drawn. */
  drawn: number;
  extras: boolean;
  /** Id of the group under the cursor (shown selected). */
  selected: string | null;
  cursor: Point;
  cursorDelay: number;
  cursorVisible: boolean;
};

function stepState(step: number): StepState {
  const all = GROUPS.length;
  const base = { extras: false, cursorDelay: 0, cursorVisible: true };
  if (step < HOLD_MOBILE) {
    const group = GROUPS[step];
    return {
      ...base,
      desktop: false,
      drawn: step + 1,
      selected: group?.id ?? null,
      cursor: groupAnchor(group, false),
    };
  }
  switch (step) {
    case HOLD_MOBILE:
    case TO_MOBILE:
      return {
        ...base,
        desktop: false,
        drawn: all,
        selected: "button",
        cursor: groupAnchor(BUTTON, false),
      };
    case TO_DESKTOP:
      return {
        ...base,
        desktop: true,
        drawn: all,
        extras: true,
        selected: "card-b",
        cursor: groupAnchor(CARD_B, true),
        cursorDelay: WIDEN_DELAY + 0.4,
      };
    case HOLD_DESKTOP:
      return {
        ...base,
        desktop: true,
        drawn: all,
        extras: true,
        selected: "button",
        cursor: groupAnchor(BUTTON, true),
      };
    default: // clear
      return {
        ...base,
        desktop: false,
        drawn: 0,
        selected: null,
        cursor: CURSOR_REST,
        cursorVisible: false,
      };
  }
}

const STATIC_STATE: StepState = {
  ...stepState(HOLD_DESKTOP),
  selected: null,
  cursorVisible: false,
};

// ---------------------------------------------------------------- colours

const color = (token: string) => `var(--epd-colors-${token})`;

const STROKE: Record<Tone, string> = {
  neutral: color("fg-inverted-faint"),
  media: color("fg-inverted-faint"),
  accent: color("border-accent-on-dark"),
};
const FILL: Record<Tone, string> = {
  neutral: color("fg-inverted-faint"),
  media: color("fg-inverted-faint"),
  accent: color("bg-accent-on-dark"),
};
/** Fill opacity of boxes/dots once "settled" (text lines are solid). */
const FILL_OPACITY: Record<Tone, number> = {
  neutral: 0.14,
  media: 0.28,
  accent: 0.22,
};
const TEXT_FILL: Record<Tone, string> = {
  neutral: color("fg-inverted-faint"),
  media: color("fg-inverted-faint"),
  accent: color("fg-accent-on-dark"),
};
const SELECTED_STROKE = color("border-accent-on-dark");

// ---------------------------------------------------------------- motion

const EASE = [0.65, 0, 0.35, 1] as const;
const INSTANT: Transition = { duration: 0 };
const GEOMETRY: Transition = { duration: 0.8, ease: EASE };

type Timing = { drawn: boolean; delay: number; instant: boolean };

function drawTransitions({ drawn, delay, instant }: Timing): Transition {
  if (instant) {
    return { default: INSTANT, pathLength: INSTANT, opacity: INSTANT, fillOpacity: INSTANT };
  }
  return drawn
    ? {
        default: GEOMETRY,
        pathLength: { duration: 0.55, delay, ease: EASE },
        opacity: { duration: 0.12, delay },
        fillOpacity: { duration: 0.45, delay: delay + 0.4 },
      }
    : {
        default: GEOMETRY,
        // Reset the stroke only after the fade-out has finished.
        pathLength: { duration: 0, delay: 0.4 },
        opacity: { duration: 0.35 },
        fillOpacity: { duration: 0.3 },
      };
}

type WireShapeProps = Timing & {
  shape: Shape;
  desktop: boolean;
  selected: boolean;
};

function WireShape({ shape, desktop, selected, ...timing }: WireShapeProps) {
  const { drawn, delay, instant } = timing;
  const t = drawTransitions(timing);
  const strokeTransition = instant ? undefined : "stroke .4s";

  if (shape.kind === "dot") {
    const c = desktop ? shape.d : shape.m;
    return (
      <motion.circle
        initial={false}
        animate={{
          cx: c.cx,
          cy: c.cy,
          r: c.r,
          pathLength: drawn ? 1 : 0,
          opacity: drawn ? 1 : 0,
          fillOpacity: drawn ? Math.min(1, FILL_OPACITY[shape.tone] * 3) : 0,
        }}
        transition={t}
        fill={FILL[shape.tone]}
        strokeWidth={1}
        style={{
          stroke: selected ? SELECTED_STROKE : STROKE[shape.tone],
          transition: strokeTransition,
        }}
      />
    );
  }

  const r = desktop ? shape.d : shape.m;

  if (shape.kind === "slash") {
    const [y1, y2] = shape.flip ? [r.y, r.y + r.h] : [r.y + r.h, r.y];
    return (
      <motion.line
        initial={false}
        animate={{
          x1: r.x,
          y1,
          x2: r.x + r.w,
          y2,
          pathLength: drawn ? 1 : 0,
          opacity: drawn ? 0.6 : 0,
        }}
        transition={t}
        strokeWidth={0.75}
        style={{ stroke: STROKE.media }}
      />
    );
  }

  if (shape.kind === "text") {
    return (
      <motion.rect
        initial={false}
        animate={{
          attrX: r.x,
          attrY: r.y,
          width: drawn ? r.w : 0,
          height: r.h,
          rx: r.h / 2,
          opacity: drawn ? 1 : 0,
        }}
        transition={{
          ...t,
          width: instant
            ? INSTANT
            : drawn
              ? { duration: 0.6, delay, ease: EASE }
              : { duration: 0.3 },
        }}
        fill={TEXT_FILL[shape.tone]}
      />
    );
  }

  return (
    <motion.rect
      initial={false}
      animate={{
        attrX: r.x,
        attrY: r.y,
        width: r.w,
        height: r.h,
        rx: r.r ?? 2,
        pathLength: drawn ? 1 : 0,
        opacity: drawn ? 1 : 0,
        fillOpacity: drawn ? FILL_OPACITY[shape.tone] : 0,
      }}
      transition={t}
      fill={FILL[shape.tone]}
      strokeWidth={1}
      style={{
        stroke: selected ? SELECTED_STROKE : STROKE[shape.tone],
        transition: strokeTransition,
      }}
    />
  );
}

// ---------------------------------------------------------------- component

/** Stagger between the shapes of one group, in seconds. */
const SHAPE_STAGGER = 0.12;

export function InterfaceWireframe() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const step = useTimelineStep({
    durations: STEP_DURATIONS,
    start: START_STEP,
    ref,
  });
  const state = reduceMotion ? STATIC_STATE : stepState(step);
  const { desktop } = state;
  const instant = reduceMotion;

  // Keep the card's label-row width indicator in step with the frame.
  useEffect(() => {
    setWireframeViewport(desktop ? "desktop" : "mobile");
  }, [desktop]);
  useEffect(() => () => setWireframeViewport("desktop"), []);

  const frame = desktop ? FRAME.d : FRAME.m;

  return (
    <Box
      ref={ref}
      flex="1"
      minH="112px"
      display="flex"
      alignItems="center"
      borderRadius="inset"
      bgImage="radial-gradient({colors.border.inverted} 1px, transparent 1px)"
      bgSize="10px 10px"
      p="6px"
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        width="100%"
        focusable="false"
        style={{ display: "block", height: "auto", overflow: "visible" }}
      >
        <motion.rect
          initial={false}
          animate={{
            attrX: frame.x,
            attrY: frame.y,
            width: frame.w,
            height: frame.h,
            rx: frame.r,
          }}
          transition={instant ? INSTANT : GEOMETRY}
          fill={color("bg-inverted")}
          strokeWidth={1}
          strokeDasharray="3 3"
          style={{ stroke: color("border-inverted-emphasized") }}
        />

        {GROUPS.map((group, index) => {
          const drawn = index < state.drawn;
          const selected = state.selected === group.id;
          return group.shapes.map((shape, i) => (
            <WireShape
              key={`${group.id}-${i}`}
              shape={shape}
              desktop={desktop}
              selected={selected}
              drawn={drawn}
              delay={i * SHAPE_STAGGER}
              instant={instant}
            />
          ));
        })}

        {EXTRAS.map((group, index) => {
          const selected = state.selected === group.id;
          return group.shapes.map((shape, i) => (
            <WireShape
              key={`${group.id}-${i}`}
              shape={shape}
              desktop
              selected={selected}
              drawn={state.extras}
              delay={WIDEN_DELAY + index * 0.18 + i * SHAPE_STAGGER * 0.5}
              instant={instant}
            />
          ));
        })}

        <motion.g
          initial={false}
          animate={{
            x: state.cursor.x,
            y: state.cursor.y,
            opacity: state.cursorVisible ? 1 : 0,
          }}
          transition={
            instant
              ? INSTANT
              : {
                  default: { duration: 0.5, delay: state.cursorDelay, ease: EASE },
                  opacity: { duration: 0.3 },
                }
          }
        >
          <circle
            r={5.5}
            fill="none"
            strokeWidth={1}
            strokeOpacity={0.4}
            style={{ stroke: SELECTED_STROKE }}
          />
          <circle r={2.4} style={{ fill: color("bg-accent-on-dark") }} />
        </motion.g>
      </svg>
    </Box>
  );
}

/**
 * Right-aligned "Mobile · 390" / "Desktop · 1440" indicator for the
 * Interface card's label row, synced with InterfaceWireframe.
 */
export function InterfaceWidthIndicator() {
  const viewport = useWireframeViewport();
  return <>{viewport === "desktop" ? "Desktop · 1440" : "Mobile · 390"}</>;
}
