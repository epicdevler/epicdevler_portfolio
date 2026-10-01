import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useState, useSyncExternalStore, type RefObject } from "react";

function subscribeVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

const getVisible = () => document.visibilityState === "visible";
const getServerVisible = () => true;

/**
 * Whether a decorative loop tied to `ref` may run: not under
 * prefers-reduced-motion, element on-screen and the document visible.
 */
function useLoopGate(ref: RefObject<Element | null>) {
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { amount: 0.15 });
  const documentVisible = useSyncExternalStore(
    subscribeVisibility,
    getVisible,
    getServerVisible,
  );
  return { reduceMotion, running: !reduceMotion && inView && documentVisible };
}

type UseCycleIndexOptions = {
  count: number;
  intervalMs: number;
  /** Element whose visibility gates the cycle. */
  ref: RefObject<Element | null>;
};

/**
 * Returns an index that advances every `intervalMs`, looping over `count`.
 * Pauses while `ref` is off-screen or the document is hidden.
 * Under prefers-reduced-motion it never advances and always returns 0.
 */
export function useCycleIndex({ count, intervalMs, ref }: UseCycleIndexOptions) {
  const { reduceMotion, running } = useLoopGate(ref);
  const [active, setActive] = useState(0);

  const enabled = running && count > 1;

  useEffect(() => {
    if (!enabled) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [enabled, count, intervalMs]);

  return reduceMotion ? 0 : active;
}

type UseTimelineStepOptions = {
  /** How long each step is held, in ms. Must be a stable (module) constant. */
  durations: readonly number[];
  /** Step shown on first paint and under prefers-reduced-motion. */
  start: number;
  /** Element whose visibility gates the timeline. */
  ref: RefObject<Element | null>;
};

/**
 * Like useCycleIndex, but each step has its own duration. Loops over
 * `durations`, pauses while `ref` is off-screen or the document is hidden,
 * and stays on `start` under prefers-reduced-motion.
 */
export function useTimelineStep({ durations, start, ref }: UseTimelineStepOptions) {
  const { reduceMotion, running } = useLoopGate(ref);
  const [step, setStep] = useState(start);

  const count = durations.length;
  const enabled = running && count > 1;
  const holdMs = durations[step] ?? 1000;

  useEffect(() => {
    if (!enabled) return;
    const timer = window.setTimeout(() => {
      setStep((current) => (current + 1) % count);
    }, holdMs);
    return () => window.clearTimeout(timer);
  }, [enabled, step, count, holdMs]);

  return reduceMotion ? start : step;
}
