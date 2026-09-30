import { Box, Text, type BoxProps } from "@chakra-ui/react";
import Image from "next/image";

export type MediaSlotProps = Omit<BoxProps, "children"> & {
  /** Image path (under /public or a whitelisted remote). Omit to show a placeholder. */
  src?: string;
  /** Required alt text. Use "" only for purely decorative images. */
  alt: string;
  /** CSS aspect-ratio, e.g. "16 / 9", "4 / 5", 9 / 19. Omit to fill the parent's height. */
  aspectRatio?: BoxProps["aspectRatio"];
  /** next/image `sizes` — describe the rendered width, e.g. "(min-width: 1024px) 60vw, 100vw". */
  sizes: string;
  /** Eager-load (above-the-fold only). */
  priority?: boolean;
  /** Radius token: card | frame | portrait | canvas | panel | device … */
  radius?: BoxProps["borderRadius"];
  /** Placeholder caption (mono). Defaults to `alt`. */
  caption?: string;
  /** object-fit. Default "cover". */
  fit?: "cover" | "contain";
  /** object-position. Default "center". */
  objectPosition?: string;
  /** Placeholder surface tone. Default "tile". */
  placeholderTone?: "tile" | "paper" | "ink";
};

const placeholderBg = {
  tile: { bg: "bg.tile", color: "fg.muted" },
  paper: { bg: "bg.canvas", color: "fg.muted" },
  ink: { bg: "bg.inverted.subtle", color: "fg.inverted.muted" },
} as const;

/**
 * Image slot: renders a `next/image` (fill + cover) when `src` is set,
 * otherwise a neutral placeholder with a mono caption so layouts hold
 * their shape before real screenshots exist.
 *
 * @example
 * <MediaSlot
 *   src={project.image?.src}
 *   alt={project.image?.alt ?? project.title}
 *   caption={project.placeholder}
 *   aspectRatio="16 / 9"
 *   sizes="(min-width: 1440px) 1000px, 80vw"
 *   radius="frame"
 * />
 */
export function MediaSlot({
  src,
  alt,
  aspectRatio,
  sizes,
  priority = false,
  radius,
  caption,
  fit = "cover",
  objectPosition = "center",
  placeholderTone = "tile",
  ...rest
}: MediaSlotProps) {
  const tone = placeholderBg[placeholderTone];

  return (
    <Box
      position="relative"
      w="full"
      h={aspectRatio ? undefined : "full"}
      aspectRatio={aspectRatio}
      overflow="hidden"
      borderRadius={radius}
      bg={tone.bg}
      {...rest}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: fit, objectPosition }}
        />
      ) : (
        <Box
          role={alt ? "img" : undefined}
          aria-label={alt || undefined}
          aria-hidden={alt ? undefined : true}
          position="absolute"
          inset="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="4"
          textAlign="center"
          bgImage="repeating-linear-gradient(135deg, transparent 0 14px, {colors.border.grid} 14px 15px)"
        >
          <Text as="span" textStyle="mono.sm" color={tone.color} aria-hidden>
            {caption ?? alt}
          </Text>
        </Box>
      )}
    </Box>
  );
}
