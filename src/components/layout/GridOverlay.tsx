import { Box, type BoxProps } from "@chakra-ui/react";

export type GridOverlayProps = BoxProps & {
  /** light = on paper (hero), dark = on ink (contact). */
  variant?: "light" | "dark";
  /** Fade lines out towards the bottom. Default: true for light, false for dark. */
  fade?: boolean;
  /** Number of columns. Default 12. */
  columns?: number;
};

/**
 * Decorative vertical column lines. Purely visual: aria-hidden, no pointer
 * events, absolutely positioned — place it as the first child of a
 * `position: relative` parent (e.g. `<Section overlay={<GridOverlay />}>`).
 */
export function GridOverlay({
  variant = "light",
  fade,
  columns = 12,
  ...rest
}: GridOverlayProps) {
  const shouldFade = fade ?? variant === "light";
  const line =
    variant === "light"
      ? "{colors.border.grid}"
      : "{colors.border.grid.inverted}";
  const mask =
    "linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)";

  return (
    <Box
      aria-hidden
      position="absolute"
      inset="0"
      pointerEvents="none"
      bgImage={`linear-gradient(to right, ${line} 1px, transparent 1px)`}
      bgSize={
        variant === "light"
          ? `calc((100% - 2px) / ${columns}) 100%`
          : `calc(100% / ${columns}) 100%`
      }
      maskImage={shouldFade ? mask : undefined}
      style={shouldFade ? { WebkitMaskImage: mask } : undefined}
      {...rest}
    />
  );
}
