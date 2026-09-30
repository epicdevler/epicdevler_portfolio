import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useState, useSyncExternalStore, type RefObject } from "react";

function subscribeVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

const getVisible = () => document.visibilityState === "visible";
const getServerVisible = () => true;

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
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { amount: 0.15 });
  const documentVisible = useSyncExternalStore(
    subscribeVisibility,
    getVisible,
    getServerVisible,
  );
  const [active, setActive] = useState(0);

  const running = !reduceMotion && inView && documentVisible && count > 1;

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [running, count, intervalMs]);

  return reduceMotion ? 0 : active;
}
