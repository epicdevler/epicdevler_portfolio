import { Box, type BoxProps } from "@chakra-ui/react";

export type MetaItem = { label: string; value: string };

export type MetaListProps = BoxProps & { items: MetaItem[] };

/** ROLE / STACK rows: 90px mono label column, 1px top rule per row. */
export function MetaList({ items, ...rest }: MetaListProps) {
  return (
    <Box as="dl" m="0" fontSize="15px" {...rest}>
      {items.map((item) => (
        <Box
          key={item.label}
          display="grid"
          gridTemplateColumns="90px 1fr"
          gap="16px"
          py="14px"
          borderTopWidth="1px"
          borderColor="border.emphasized"
        >
          <Box as="dt" textStyle="mono.sm" color="fg.muted" pt="3px">
            {item.label}
          </Box>
          <Box as="dd" m="0" color="fg">
            {item.value}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
