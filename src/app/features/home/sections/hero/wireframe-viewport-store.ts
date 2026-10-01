import { useSyncExternalStore } from "react";

/**
 * Tiny external store shared by the Interface card's wireframe (writer) and
 * its label-row width indicator (reader), so the "Mobile · 390" /
 * "Desktop · 1440" text stays in step with the animation. There is only one
 * product map on the page, so a module-level store is sufficient.
 */
export type WireframeViewport = "mobile" | "desktop";

/** First paint (SSR) and reduced motion show the finished desktop layout. */
const INITIAL_VIEWPORT: WireframeViewport = "desktop";

let current: WireframeViewport = INITIAL_VIEWPORT;
const listeners = new Set<() => void>();

export function setWireframeViewport(next: WireframeViewport) {
  if (next === current) return;
  current = next;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const getSnapshot = () => current;
const getServerSnapshot = () => INITIAL_VIEWPORT;

export function useWireframeViewport() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
