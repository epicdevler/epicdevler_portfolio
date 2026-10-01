import { Box, type BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type ProjectKickerProps = BoxProps & {
  index: ReactNode;
  category: string;
};

/** Mono "02  PRODUCTIVITY · COMMUNICATION" line above a project title. */
export function ProjectKicker({ index, category, ...rest }: ProjectKickerProps) {
  return (
    <Box
      display="flex"
      gap="16px"
      flexWrap="wrap"
      textStyle="mono.sm"
      fontSize="12px"
      color="fg"
      {...rest}
    >
      <span>{index}</span>
      <Box as="span" color="fg.accent">
        {category}
      </Box>
    </Box>
  );
}
