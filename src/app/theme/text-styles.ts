import { defineTextStyles } from "@chakra-ui/react";

/**
 * Typography scale extracted from the design. Weight 500 unless noted.
 * Display styles balance their line breaks.
 */
const display = (
  fontSize: string,
  lineHeight: string,
  letterSpacing: string,
) => ({
  value: {
    fontFamily: "heading",
    fontWeight: "500",
    fontSize,
    lineHeight,
    letterSpacing,
    textWrap: "balance",
  },
});

export const textStyles = defineTextStyles({
  display: {
    hero: display("clamp(46px, 7.6vw, 124px)", "0.95", "-0.048em"),
    contact: display("clamp(52px, 9vw, 152px)", "0.92", "-0.05em"),
    xl: display("clamp(44px, 7vw, 112px)", "0.95", "-0.045em"),
    lg: display("clamp(40px, 5.4vw, 84px)", "0.98", "-0.04em"),
    md: display("clamp(36px, 4.4vw, 68px)", "1", "-0.04em"),
    sm: display("clamp(32px, 3.4vw, 52px)", "1.02", "-0.035em"),
  },
  title: {
    xl: {
      value: {
        fontWeight: "500",
        fontSize: "clamp(40px, 5vw, 76px)",
        lineHeight: "1",
        letterSpacing: "-0.04em",
      },
    },
    lg: {
      value: {
        fontWeight: "500",
        fontSize: "clamp(36px, 4vw, 60px)",
        lineHeight: "1",
        letterSpacing: "-0.04em",
      },
    },
    md: {
      value: {
        fontWeight: "500",
        fontSize: "clamp(26px, 2.8vw, 42px)",
        lineHeight: "1.1",
        letterSpacing: "-0.03em",
      },
    },
    sm: {
      value: {
        fontWeight: "500",
        fontSize: "clamp(26px, 2.6vw, 38px)",
        lineHeight: "1.1",
        letterSpacing: "-0.03em",
      },
    },
  },
  lead: {
    value: {
      fontSize: "clamp(18px, 1.5vw, 21px)",
      lineHeight: "1.5",
      textWrap: "pretty",
    },
  },
  body: {
    lg: {
      value: {
        fontSize: "clamp(17px, 1.3vw, 19px)",
        lineHeight: "1.55",
        textWrap: "pretty",
      },
    },
  },
  /** Big step numerals (approach). Weight 400. */
  step: {
    value: {
      fontWeight: "400",
      fontSize: "clamp(56px, 6vw, 88px)",
      lineHeight: "1",
      letterSpacing: "-0.05em",
    },
  },
  /** Small caps-style labels ("PRODUCT THINKING"). Weight 600. */
  label: {
    value: {
      fontSize: "15px",
      fontWeight: "600",
      lineHeight: "1.3",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },
  /** Section eyebrow ("SELECTED WORK"). */
  eyebrow: {
    value: {
      fontFamily: "mono",
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "1.4",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
    },
  },
  mono: {
    /** Meta labels ("ROLE", "01 · PROBLEM"). */
    sm: {
      value: {
        fontFamily: "mono",
        fontSize: "11px",
        fontWeight: "400",
        lineHeight: "1.4",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      },
    },
    /** Mono body copy (12px, no transform). */
    md: {
      value: {
        fontFamily: "mono",
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "1.6",
      },
    },
  },
});
