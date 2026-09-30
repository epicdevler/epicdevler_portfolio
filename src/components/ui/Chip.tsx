"use client";

import {
  Box,
  chakra,
  type HTMLChakraProps,
  type RecipeVariantProps,
} from "@chakra-ui/react";
import { chipRecipe } from "@/app/theme/recipes/chip";

const StyledChip = chakra("span", chipRecipe);

export type ChipProps = HTMLChakraProps<"span"> &
  RecipeVariantProps<typeof chipRecipe> & {
    /** Leading 6px dot in the accent colour. */
    dot?: boolean;
  };

/**
 * Pill / tag primitive backed by the `chip` recipe.
 *
 * @example
 * <Chip dot>PostgreSQL</Chip>
 * <Chip variant="status" tone="accent">Active</Chip>
 * <Chip variant="mono" tone="invertedAccent">API</Chip>
 */
export function Chip({ dot = false, children, ...rest }: ChipProps) {
  const onDark = rest.tone === "inverted" || rest.tone === "invertedAccent";
  return (
    <StyledChip {...rest}>
      {dot && (
        <Box
          as="span"
          aria-hidden
          boxSize="6px"
          borderRadius="full"
          bg={onDark ? "bg.accent.onDark" : "bg.accent"}
          flexShrink={0}
        />
      )}
      {children}
    </StyledChip>
  );
}
