import { SiteConfig } from "@/site-config";

export type FooterExternalLink = {
  label: string;
  href: string;
  /** Opens in a new tab (web URLs). `mailto:` links stay in place. */
  newTab: boolean;
};

/** External links column (order matches the design). */
export const FOOTER_EXTERNAL_LINKS: readonly FooterExternalLink[] = [
  {
    label: "LinkedIn",
    href: SiteConfig.socials.linkedin.href,
    newTab: true,
  },
  { label: "GitHub", href: SiteConfig.socials.github.href, newTab: true },
  { label: "Email", href: SiteConfig.contact.email.href, newTab: false },
];
