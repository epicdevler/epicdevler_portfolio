export type DoItem = {
  /** Two-digit index shown in mono, e.g. "01". */
  index: string;
  title: string;
  body: string;
  /** Marks the final step with a green dot instead of an arrow. */
  current?: boolean;
};

export const DO_HEADER = {
  eyebrow: "What I actually do",
  title: "From idea to working product.",
  lead: "I work across the layers that turn an idea into something people can actually use.",
} as const;

export const DO_ITEMS: readonly DoItem[] = [
  {
    index: "01",
    title: "Product thinking",
    body: "Understand the problem, the people involved and how the business actually works before deciding what should be built.",
  },
  {
    index: "02",
    title: "Experience",
    body: "Turn workflows and requirements into interfaces that feel clear, useful and intuitive.",
  },
  {
    index: "03",
    title: "Engineering",
    body: "Build the software, connect the data and structure the product so it can grow beyond its first version.",
  },
  {
    index: "04",
    title: "Delivery",
    body: "Ship the product, learn from how it performs and keep improving it.",
    current: true,
  },
];
