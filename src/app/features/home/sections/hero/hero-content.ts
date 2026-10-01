/** Static copy that only appears in the hero (from the design). */
export const HERO_CONTENT = {
  eyebrow: "Software Engineer · Product Builder",
  headline: {
    lead: "I turn business ideas into digital products people can",
    accent: "actually use.",
  },
  lead: "From product structure and interface design to frontend systems, APIs and deployment — I build practical software around how the business actually works.",
  primaryCta: "View selected work",
  secondaryCta: "Let's build something",
  note: "Product thinking + engineering for practical digital products.",
} as const;

export type ProductMapStage = {
  /** Upper-case name shown after "NOW:". */
  name: string;
  /** Screen-reader summary of what the card depicts. */
  summary: string;
};

/** The six stages of the decorative "product map" canvas, in cycle order. */
export const PRODUCT_MAP_STAGES = [
  {
    name: "PROBLEM",
    summary:
      "Problem: find where the work actually breaks down, such as requests tracked by hand, no single view of status and updates lost between people.",
  },
  {
    name: "PRODUCT",
    summary:
      "Product: structure the platform into customers, requests with status and assignment, and operations with reporting.",
  },
  {
    name: "INTERFACE",
    summary:
      "Interface: design screens such as a request list showing active and queued jobs.",
  },
  {
    name: "SYSTEM",
    summary:
      "System: connect the client to an API and services, backed by auth, storage and a queue.",
  },
  {
    name: "DATA",
    summary:
      "Data: model the records, for example a requests table with an id, a status and a customer reference.",
  },
  {
    name: "DELIVERY",
    summary: "Delivery: build, review and ship, then learn and iterate.",
  },
] as const satisfies readonly ProductMapStage[];

export const PRODUCT_MAP_CYCLE_MS = 2600;
