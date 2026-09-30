import { Box, List, Text } from "@chakra-ui/react";
import type { ToolkitGroup } from "@/content/types";

type ToolkitGroupListProps = {
  group: ToolkitGroup;
};

/** One toolkit column: mono caps label over a stacked list of tools. */
export function ToolkitGroupList({ group }: ToolkitGroupListProps) {
  const labelId = `toolkit-${group.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <Box display="flex" flexDirection="column" gap="12px">
      <Text
        id={labelId}
        textStyle="mono.sm"
        letterSpacing="0.12em"
        color="fg.muted"
        m="0"
      >
        {group.label}
      </Text>
      <List.Root
        aria-labelledby={labelId}
        listStyleType="none"
        display="flex"
        flexDirection="column"
        gap="6px"
        m="0"
        p="0"
        fontSize="17px"
        lineHeight="1.4"
        color="fg"
      >
        {group.items.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List.Root>
    </Box>
  );
}
