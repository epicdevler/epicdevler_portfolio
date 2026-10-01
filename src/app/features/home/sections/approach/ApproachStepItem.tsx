import { Box, Heading } from "@chakra-ui/react";
import type { ApproachStep } from "./approach-content";
import { StepTrack } from "./StepTrack";

type ApproachStepItemProps = {
  step: ApproachStep;
  first: boolean;
  last: boolean;
};

/** One `<li>` of the approach timeline: track, numeral, title and lines. */
export function ApproachStepItem({ step, first, last }: ApproachStepItemProps) {
  return (
    <Box
      as="li"
      display="grid"
      alignContent="start"
      gridTemplateColumns={{ base: "14px 1fr", md: "1fr" }}
      columnGap="20px"
      rowGap="22px"
      pr={{ base: "0", md: last ? "0" : "28px" }}
      pb="40px"
    >
      <Box
        gridRow={{ base: "1 / span 3", md: "auto" }}
        pt={{ base: "12px", md: "0" }}
      >
        <StepTrack active={first} last={last} />
      </Box>
      <Box
        aria-hidden="true"
        textStyle="step"
        color={first ? "fg.accent" : "fg"}
      >
        {step.number}
      </Box>
      <Heading as="h3" textStyle="label" letterSpacing="0.1em" m="0">
        {step.title}
      </Heading>
      <Box
        as="ul"
        listStyleType="none"
        m="0"
        p="0"
        display="flex"
        flexDirection="column"
        fontSize="17px"
        lineHeight="1.4"
        color="fg.body"
      >
        {step.lines.map((line) => (
          <Box as="li" key={line} py="10px" borderTopWidth="1px" borderColor="border">
            {line}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
