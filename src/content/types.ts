export type ImageAsset = {
  /** Path under /public or a whitelisted remote URL. */
  src: string;
  alt: string;
};

export type Period = {
  /** Free-form, e.g. "Aug 2023". */
  start: string;
  /** Free-form; omit for ongoing work. */
  end?: string;
};

export type ProjectPlatform = "Web" | "Android" | "Mobile";

export type Project = {
  slug: string;
  /** Display index, e.g. "01". */
  index: string;
  title: string;
  /** Mono category line, e.g. "LOGISTICS · DIGITAL PLATFORM". */
  category: string;
  summary: string;
  role?: string;
  stack: string[];
  platforms: ProjectPlatform[];
  /** Client work vs personal/self-initiated. */
  kind: "client" | "personal";
  featured?: boolean;
  /**
   * Primary screenshot. `undefined` = no asset yet → render a MediaSlot
   * placeholder using `placeholder`.
   */
  image?: ImageAsset;
  /** Extra screens (e.g. mobile views). */
  gallery?: ImageAsset[];
  /** Caption shown when an image is missing. */
  placeholder?: string;
  liveUrl?: string;
  githubUrl?: string;
  period?: Period;
};

export type TechnologyGroup =
  | "Frontend"
  | "Backend & Data"
  | "Mobile"
  | "Tools & Infrastructure"
  | "Design";

export type Technology = {
  name: string;
  group: TechnologyGroup;
  /** Icon under /public/techs, when one exists. */
  icon?: string;
  /** Part of the day-to-day core stack. */
  core?: boolean;
};

export type ToolkitGroup = {
  label: string;
  items: string[];
};

export type ExperienceItem = {
  slug: string;
  company: string;
  /** Mono subtitle in the timeline, e.g. "Frontend Engineering". */
  focus: string;
  role: string;
  period?: Period;
  current?: boolean;
  /** One-line description used in the timeline. */
  summary: string;
  highlights: string[];
  technologies: string[];
  logo?: ImageAsset;
};
