import { Box, Flex, Text, type BoxProps } from "@chakra-ui/react";
import { Chip } from "@/components/ui/Chip";
import { InterfaceWireframe } from "./InterfaceWireframe";

/*
 * Decorative mini mock-ups for the hero "product map" canvas.
 * Presentational only (server-safe). The whole grid is aria-hidden; a
 * visually hidden list in ProductMapCanvas summarises each stage.
 */

const problemChip: BoxProps = {
  px: "10px",
  py: "7px",
  bg: "bg.inverted.chip",
  borderRadius: "chip",
  _motionReduce: { transform: "none" },
};

export function ProblemCard() {
  return (
    <>
      <Text fontSize="17px" lineHeight="1.3" letterSpacing="-0.01em" m="0">
        Where does the work actually break down?
      </Text>
      <Flex
        direction="column"
        gap="6px"
        mt="auto"
        fontSize="12.5px"
        color="fg.inverted.muted"
      >
        <Box {...problemChip} transform="rotate(-1deg)">
          Requests tracked by hand
        </Box>
        <Box {...problemChip} transform="rotate(0.8deg)" ml="10px">
          No single view of status
        </Box>
        <Box {...problemChip}>Updates lost between people</Box>
      </Flex>
    </>
  );
}

const treeBranch: BoxProps = {
  py: "6px",
  pl: "14px",
  ml: "4px",
  borderLeftWidth: "1px",
  borderColor: "border.inverted.strong",
};

export function ProductCard() {
  return (
    <Flex direction="column" fontSize="13px" color="fg.inverted.body">
      <Box
        py="6px"
        borderBottomWidth="1px"
        borderColor="border.inverted"
        fontWeight="600"
        color="fg.inverted"
      >
        Platform
      </Box>
      <Box {...treeBranch}>Customers</Box>
      <Box {...treeBranch}>Requests</Box>
      <Box {...treeBranch} pl="28px" color="fg.inverted.subtle">
        Status · Assignment
      </Box>
      <Box {...treeBranch}>Operations</Box>
      <Box {...treeBranch} color="fg.inverted.subtle">
        Reporting
      </Box>
    </Flex>
  );
}

/** Animated wireframe: mobile sketch that re-flows into a desktop layout. */
export function InterfaceCard() {
  return <InterfaceWireframe />;
}

function FlowLine() {
  return (
    <Box
      as="span"
      display="block"
      flex="1"
      minW="12px"
      h="1px"
      bg="border.inverted.emphasized"
    />
  );
}

export function SystemCard() {
  return (
    <>
      <Flex align="center">
        <Chip variant="mono" tone="inverted" py="6px">
          Client
        </Chip>
        <FlowLine />
        <Chip variant="mono" tone="invertedAccent" py="6px">
          API
        </Chip>
        <FlowLine />
        <Chip variant="mono" tone="inverted" py="6px">
          Services
        </Chip>
      </Flex>
      <Flex
        justify="center"
        gap="10px"
        pt="12px"
        borderTopWidth="1px"
        borderTopStyle="dashed"
        borderColor="border.inverted.strong"
      >
        {["Auth", "Storage", "Queue"].map((label) => (
          <Chip
            key={label}
            variant="mono"
            tone="inverted"
            borderColor="border.inverted"
            color="fg.inverted.subtle"
          >
            {label}
          </Chip>
        ))}
      </Flex>
    </>
  );
}

const dataColumns = [
  { name: "id", type: "uuid", fk: false },
  { name: "status", type: "enum", fk: false },
  { name: "customer_id", type: "→ fk", fk: true },
] as const;

export function DataCard() {
  return (
    <Box
      fontFamily="mono"
      fontSize="11.5px"
      borderWidth="1px"
      borderColor="border.inverted"
      borderRadius="inset"
      overflow="hidden"
    >
      <Box px="10px" py="7px" bg="bg.inverted.chip" color="fg.inverted">
        requests
      </Box>
      {dataColumns.map((col) => (
        <Flex
          key={col.name}
          justify="space-between"
          px="10px"
          py="5px"
          color="fg.inverted.muted"
          borderTopWidth="1px"
          borderColor="border.inverted"
        >
          <Box as="span">{col.name}</Box>
          <Box
            as="span"
            color={col.fk ? "fg.accent.onDark" : "fg.inverted.faint"}
          >
            {col.type}
          </Box>
        </Flex>
      ))}
    </Box>
  );
}

const deliverySteps = ["Build", "Review", "Ship"] as const;

export function DeliveryCard() {
  return (
    <>
      <Flex direction="column" gap="9px" fontSize="13px" color="fg.inverted.body">
        {deliverySteps.map((step) => (
          <Flex key={step} justify="space-between">
            <Box as="span">{step}</Box>
            <Box as="span" color="fg.accent.onDark">
              ✓
            </Box>
          </Flex>
        ))}
        <Flex justify="space-between" color="fg.inverted.subtle">
          <Box as="span">Learn &amp; iterate</Box>
          <Box as="span">↻</Box>
        </Flex>
      </Flex>
      <Box
        h="3px"
        mt="auto"
        bg="border.inverted"
        borderRadius="2px"
        overflow="hidden"
      >
        <Box w="78%" h="full" bg="bg.accent.onDark" />
      </Box>
    </>
  );
}
