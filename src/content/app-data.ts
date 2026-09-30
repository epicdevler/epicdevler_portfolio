import type {
  ExperienceItem,
  Project,
  Technology,
  ToolkitGroup,
} from "./types";

/**
 * Real content for the portfolio.
 * Sources: the previous site (`src/data/data/appData.ts`, the `_projects`
 * array in `src/app/home/sections/projects/index.tsx`) and the new design.
 */

/* -------------------------------------------------------------------------- */
/*                                  PROJECTS                                  */
/* -------------------------------------------------------------------------- */

export const PROJECTS: Project[] = [
  {
    slug: "errandking",
    index: "01",
    title: "ErrandKing",
    category: "Logistics · Digital Platform",
    summary:
      "A logistics platform designed to bring customers, requests and operational workflows into one digital experience.",
    role: "Product Engineering · Frontend · Backend Integration",
    stack: ["Next.js", "TypeScript", "Supabase", "TanStack Query"],
    platforms: ["Web"],
    kind: "client",
    featured: true,
    image: {
      src: "/projects/errandking.com.preview.webp",
      alt: "ErrandKing Logistics website preview",
    },
    placeholder: "ErrandKing — dashboard screenshot",
    liveUrl: "https://errandking.com",
  },
  {
    slug: "keepup",
    index: "02",
    title: "KeepUp",
    category: "Productivity · Communication",
    summary:
      "A communication-first productivity platform designed to help students, lecturers and institutions stay connected and organized.",
    role: "Product Concept · Product Design · Engineering",
    stack: [],
    platforms: ["Mobile"],
    kind: "personal",
    // No screenshots yet — the work section renders MediaSlot placeholders.
    placeholder: "KeepUp — feed",
  },
  {
    slug: "myinstitute",
    index: "03",
    title: "myInstitute",
    category: "Education · Web Application",
    summary:
      "A course registration system for higher institutions — students sign in, pick their courses and complete registration in one place.",
    role: "Product Design · Full-stack Engineering",
    stack: ["Next.js", "TypeScript"],
    platforms: ["Web"],
    kind: "personal",
    image: {
      src: "/projects/myInstitute.webp",
      alt: "myInstitute login page",
    },
    githubUrl: "https://github.com/epicdevler/myInstitute.git",
    liveUrl: "https://myInstitute.vercel.app/",
    period: { start: "Aug 2025", end: "Aug 2025" },
  },
  {
    slug: "foodapp",
    index: "04",
    title: "FoodApp",
    category: "Hospitality · Ordering System",
    summary:
      "A restaurant ordering system that lets customers browse a menu, build an order and check out online.",
    role: "Frontend Engineering",
    stack: ["React", "Next.js"],
    platforms: ["Web"],
    kind: "personal",
    image: {
      src: "/projects/foodApp_graphics.webp",
      alt: "FoodApp restaurant ordering system graphic",
    },
    githubUrl: "https://github.com/epicdevler/csp-foodapp.git",
    liveUrl: "https://decutleries.vercel.app/",
    period: { start: "Aug 2023", end: "Nov 2023" },
  },
  {
    slug: "aminote",
    index: "05",
    title: "Aminote (minote)",
    category: "Productivity · Android",
    summary:
      "An Android note-taking app, under continuous development since 2022.",
    role: "Mobile Engineering",
    stack: ["Kotlin", "Jetpack Compose"],
    platforms: ["Android"],
    kind: "personal",
    image: {
      src: "/projects/minote_graphics.webp",
      alt: "Aminote app graphic",
    },
    githubUrl: "https://github.com/epicdevler/aminote.git",
    period: { start: "Aug 2022" },
  },
];

export const FEATURED_PROJECT = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];

/* -------------------------------------------------------------------------- */
/*                                 EXPERIENCE                                 */
/* -------------------------------------------------------------------------- */

export const EXPERIENCE: ExperienceItem[] = [
  {
    slug: "technoville",
    company: "Technoville",
    focus: "Frontend Engineering",
    role: "Frontend Engineer",
    current: true,
    // TODO(content): dates not in the previous site data.
    summary:
      "Building and maintaining frontend systems, product interfaces and company web experiences.",
    highlights: [],
    technologies: ["React", "Next.js", "TypeScript"],
  },
  {
    slug: "freelance",
    company: "Independent / Freelance",
    focus: "Product Engineering",
    role: "Software Developer",
    period: { start: "2023" },
    summary:
      "Working across product ideas, interfaces, web applications and digital systems.",
    highlights: [
      "Engineered responsive web applications using modern frameworks and modular architecture patterns.",
      "Built data-driven interfaces for logistics, ride-hailing, inventory, education and workforce systems.",
      "Implemented robust API integrations.",
      "Designed scalable component structures optimized for maintainability and performance.",
      "Deployed live platforms using cloud hosting and CI-based workflows.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Supabase",
      "Firebase",
      "Zustand",
      "TanStack Query",
      "Git",
      "Cloud Deployments",
    ],
  },
  {
    slug: "cedars",
    company: "Cedars Productivity Centre",
    focus: "Software Development · IT Systems · Mobile",
    role: "Technical Intern",
    period: { start: "2020", end: "2023" },
    summary:
      "Experience across software development, mobile applications, IT systems and technical operations.",
    highlights: [
      "Developed web applications and supported UI improvements across internal projects.",
      "Assisted in debugging, performance tuning and interface refinement.",
      "Delivered structured training sessions covering HTML, CSS, JavaScript and presentation tools.",
      "Mentored beginner developers through hands-on coding sessions.",
      "Provided system support, network configuration assistance and troubleshooting.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Kotlin",
      "Android",
      "System Diagnostics",
      "Networking Basics",
    ],
    logo: {
      src: "/work/cedars_logo.png",
      alt: "Cedars Productivity Centre logo",
    },
  },
];

/* -------------------------------------------------------------------------- */
/*                                TECHNOLOGIES                                */
/* -------------------------------------------------------------------------- */

/** Toolkit columns exactly as in the design. */
export const TOOLKIT: ToolkitGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "TanStack"] },
  {
    label: "Backend & Data",
    items: ["REST APIs", "Supabase", "PostgreSQL", "Kotlin / Spring"],
  },
  { label: "Mobile", items: ["Kotlin", "Jetpack Compose"] },
  {
    label: "Tools & Infrastructure",
    items: ["Git", "Docker", "Cloud Deployment"],
  },
];

/** Everything Philip has worked with (icons exist under /public/techs). */
export const TECHNOLOGIES: Technology[] = [
  { name: "React", group: "Frontend", icon: "/techs/React.svg", core: true },
  {
    name: "Next.js",
    group: "Frontend",
    icon: "/techs/Next.Js.svg",
    core: true,
  },
  {
    name: "TypeScript",
    group: "Frontend",
    icon: "/techs/TypeScript.svg",
    core: true,
  },
  { name: "HTML", group: "Frontend", icon: "/techs/HTML.svg" },
  { name: "CSS", group: "Frontend", icon: "/techs/CSS.svg" },
  { name: "Kotlin", group: "Mobile", icon: "/techs/Kotlin.svg", core: true },
  { name: "Android", group: "Mobile", icon: "/techs/android.svg" },
  { name: "Ktor", group: "Backend & Data", icon: "/techs/Ktor.svg" },
  { name: "FastAPI", group: "Backend & Data", icon: "/techs/FastAPI.svg" },
  { name: "Python", group: "Backend & Data", icon: "/techs/Python.svg" },
  { name: "Firebase", group: "Backend & Data", icon: "/techs/Firebase.svg" },
  { name: "MongoDB", group: "Backend & Data", icon: "/techs/MongoDB.svg" },
  { name: "Git", group: "Tools & Infrastructure", icon: "/techs/Git.svg" },
  {
    name: "GitHub",
    group: "Tools & Infrastructure",
    icon: "/techs/GitHub.svg",
    core: true,
  },
  {
    name: "Gradle",
    group: "Tools & Infrastructure",
    icon: "/techs/Gradle.svg",
  },
  { name: "Figma", group: "Design", icon: "/techs/Figma.svg" },
];

/** "Currently exploring" chips (About section). */
export const CURRENTLY_EXPLORING: string[] = [
  "Backend Architecture",
  "PostgreSQL",
  "Kotlin / Spring",
  "System Design",
  "Product Strategy",
];
