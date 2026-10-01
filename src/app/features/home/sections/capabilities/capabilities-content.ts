export type Capability = {
  /** Display index, e.g. "01". */
  index: string;
  title: string;
  description: string;
};

export const CAPABILITIES_HEADER = {
  eyebrow: "Capabilities",
  title: "What I build.",
  lead: "I work across product, interface and engineering — helping turn ideas and operational problems into useful software.",
} as const;

export const CAPABILITIES: readonly Capability[] = [
  {
    index: "01",
    title: "Digital products",
    description: "Web applications built around real business workflows.",
  },
  {
    index: "02",
    title: "Frontend systems",
    description:
      "React and Next.js interfaces designed with reusable systems, clear state management and long-term maintainability in mind.",
  },
  {
    index: "03",
    title: "Product interfaces",
    description:
      "Complex processes translated into simple, understandable user experiences.",
  },
  {
    index: "04",
    title: "Data & backend integration",
    description:
      "Connecting products to the data, services and APIs they need to operate.",
  },
  {
    index: "05",
    title: "Product architecture",
    description:
      "Thinking beyond individual screens to structure products that can evolve as the business grows.",
  },
];
