"use client";

import { useEffect, useState } from "react";

export type UseActiveSectionOptions = {
  /**
   * IntersectionObserver rootMargin. The default treats a thin band ~40%
   * down the viewport as the "reading line"; the section crossing it is active.
   */
  rootMargin?: string;
};

/**
 * Returns the id of the section currently under the reading line, or `null`
 * when none of the given sections is (e.g. at the very top, above them).
 *
 * @example
 * const active = useActiveSection(NAV_ITEMS.map((i) => i.sectionId));
 */
export function useActiveSection(
  ids: readonly string[],
  { rootMargin = "-40% 0px -55% 0px" }: UseActiveSectionOptions = {},
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const key = ids.join("|");

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const elements = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting);
        }
        // First (top-most, in DOM order) section intersecting the band wins.
        const current = elements.find((el) => visible.get(el.id));
        setActiveId(current ? current.id : null);
      },
      { rootMargin, threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key, rootMargin]);

  return activeId;
}
