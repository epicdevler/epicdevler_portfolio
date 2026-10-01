export type SocialKey = "github" | "linkedin" | "x";

export type ExternalLink = {
  label: string;
  href: string;
};

export type ContactChannel = {
  /** Human-readable value, e.g. "+234 808 0366 089". */
  display: string;
  /** Link target, e.g. "tel:+2348080366089". */
  href: string;
};

export type SiteConfigShape = {
  name: string;
  /** Handle / brand alias. */
  handle: string;
  role: string;
  tagline: string;
  description: string;
  siteUrl: string;
  locale: string;
  logo: {
    full?: string;
    iconOnly?: string;
  };
  profile: {
    src: string;
    alt: string;
  };
  contact: {
    email: ContactChannel;
    phone: ContactChannel;
    whatsapp: ContactChannel;
  };
  socials: Record<SocialKey, ExternalLink>;
};

export const SiteConfig = {
  name: "Philip Nwadike",
  handle: "epicdevler",
  role: "Software Engineer · Product Builder",
  tagline: "Building useful things, one problem at a time.",
  description:
    "Philip Nwadike is a software engineer and product builder who turns business ideas into practical digital products — from product structure and interface design to frontend systems, APIs and deployment.",
  siteUrl: "https://epicdevler.vercel.app",
  locale: "en_US",
  logo: {},
  /**
   * PROFILE PICTURE — single swap point.
   * Replace the file at `public/epicdevler.webp` (or change `src`) to update
   * the portrait everywhere it is used (About section, metadata, etc.).
   */
  profile: {
    src: "/epicdevler.webp",
    alt: "Portrait of Philip Nwadike",
  },
  contact: {
    email: {
      display: "dev.epicdevler@gmail.com",
      href: "mailto:dev.epicdevler@gmail.com",
    },
    phone: {
      display: "+234 808 0366 089",
      href: "tel:+2348080366089",
    },
    whatsapp: {
      display: "+234 808 0366 089",
      href: "https://wa.me/2348080366089",
    },
  },
  socials: {
    github: { label: "GitHub", href: "https://github.com/epicdevler" },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nwadikephilip",
    },
    x: { label: "X (Twitter)", href: "https://x.com/epicdevler" },
  },
} as const satisfies SiteConfigShape;
