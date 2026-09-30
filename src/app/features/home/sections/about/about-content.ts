import { CURRENTLY_EXPLORING } from "@/content/app-data";

/** Static copy for the About section (from the design). */
export const ABOUT_CONTENT = {
  eyebrow: "About",
  title: "The person behind the products.",
  caption: {
    name: "Philip Nwadike",
    role: "Software Engineer",
  },
  intro:
    "I'm Philip Nwadike, a software engineer focused on building digital products that solve practical problems.",
  paragraphs: [
    "My work sits at the intersection of product thinking and engineering. I enjoy understanding how a business or workflow operates, breaking it down into systems, and turning those systems into software people can actually use.",
    "My strongest area today is frontend engineering, while I'm deliberately expanding deeper into backend engineering, databases and system architecture.",
  ],
  exploring: {
    heading: "Currently exploring",
    items: CURRENTLY_EXPLORING,
  },
} as const;
