import { Box, Link, VisuallyHidden } from "@chakra-ui/react";

export type RuleLinkProps = {
  href: string;
  /** Visible label, e.g. "Explore project". */
  label: string;
  /** Extra context for screen readers, e.g. the project name. */
  context: string;
};

/**
 * Full-width row link between two ink rules; text shifts 8px and turns
 * accent on hover (transition disabled under reduced motion by the recipe).
 * Always external → new tab.
 */
export function RuleLink({ href, label, context }: RuleLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="plain"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="4"
      py="16px"
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor="border.strong"
      borderRadius="0"
      fontWeight="500"
      transitionDuration="0.3s"
      _hover={{ color: "fg.accent", pl: "8px" }}
      css={{ "& + &": { borderTopWidth: "0" } }}
    >
      <span>
        {label}
        <VisuallyHidden>
          {`: ${context} (opens in a new tab)`}
        </VisuallyHidden>
      </span>
      <Box as="span" aria-hidden>
        →
      </Box>
    </Link>
  );
}
