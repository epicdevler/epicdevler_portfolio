/** Static copy for the "How I work" section (from the design). */

export type ApproachStep = {
  number: string;
  title: string;
  lines: readonly string[];
};

export const APPROACH_HEADER = {
  eyebrow: "How I work",
  title: "Good software starts before the first line of code.",
  lead: "The best solutions usually come from understanding the problem before trying to solve it.",
} as const;

export const APPROACH_STEPS: readonly ApproachStep[] = [
  {
    number: "01",
    title: "Understand",
    lines: [
      "What is the actual problem?",
      "Who experiences it?",
      "How does the current workflow operate?",
    ],
  },
  {
    number: "02",
    title: "Structure",
    lines: [
      "Define the product.",
      "Map the information.",
      "Simplify the workflow.",
      "Choose what needs to exist.",
    ],
  },
  {
    number: "03",
    title: "Build",
    lines: [
      "Design the interface.",
      "Engineer the product.",
      "Connect the data.",
      "Turn the structure into working software.",
    ],
  },
  {
    number: "04",
    title: "Iterate",
    lines: [
      "See how people use it.",
      "Fix what doesn't work.",
      "Improve what does.",
      "Keep moving the product forward.",
    ],
  },
] as const;
