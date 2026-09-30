"use client";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function usePinNavbar({
  baseHeight = window.innerHeight,
}: {
  baseHeight: number;
}) {
  const { scrollY } = useScroll();
  const [pin, setPin] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const show = current > previous && current > baseHeight;

    setPin(show);
  });

  return { pinNav: pin };
}
