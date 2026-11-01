/**
 * PROJECTS
 * Edit titles, descriptions and links freely. Add "repo" (GitHub link) and "live" (deployed link)
 * for any project. If "repo" is missing, the card links to your GitHub repositories page.
 * Tip: update the "tech" lists so each one matches what you really used.
 */

export type Project = {
  slug: string;
  title: string;
  category: "Landing Page" | "Website" | "Web App" | "Practice";
  accent: "blue" | "teal" | "violet" | "green" | "amber" | "rose";
  summary: string;
  highlights: string[];
  tech: string[];
  featured: boolean;
  /** file inside public/images (only featured projects have a thumbnail) */
  thumb?: string;
  repo?: string;
  live?: string;
};

const gh = "https://github.com/mazharultnt";

export const projects: Project[] = [
  {
    slug: "shopwave",
    title: "ShopWave",
    category: "Website",
    accent: "blue",
    summary:
      "A six-page e-commerce website built to practice multi-page structure and consistent design across pages.",
    highlights: [
      "Six connected pages with shared header and footer",
      "Product grid and card layouts that adapt to screen size",
      "Consistent spacing, type and color system across pages",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
    thumb: "project-1-thumb.jpg",
  },
  {
    slug: "my-portfolio-website",
    title: "Personal Portfolio",
    category: "Website",
    accent: "teal",
    summary:
      "My first personal portfolio website, built from scratch with custom CSS animations. This site you are on now is the next, redesigned version.",
    highlights: [
      "Fully responsive layout",
      "Custom CSS animations and hover effects",
      "Clean section structure: hero, about, projects, contact",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    featured: true,
    thumb: "project-2-thumb.jpg",
    repo: `${gh}/My-portfolio-website`,
  },
  {
    slug: "nura-headphones",
    title: "Nura Headphones Landing Page",
    category: "Landing Page",
    accent: "violet",
    summary:
      "A landing page converted from a Figma design with close attention to spacing, typography and layout accuracy.",
    highlights: [
      "Built from a Figma design",
      "Responsive layout using the Bootstrap 5 grid",
      "Sections for features, product details and calls to action",
    ],
    tech: ["HTML5", "CSS3", "Bootstrap 5"],
    featured: true,
    thumb: "project-3-thumb.jpg",
    repo: `${gh}/nura-headphones-landing-page`,
  },
  {
    slug: "cssforge",
    title: "CSSForge",
    category: "Web App",
    accent: "green",
    summary:
      "A small developer tool for working with CSS, built to practice JavaScript logic, DOM updates and live previews.",
    highlights: [
      "Interactive controls that update the result instantly",
      "Practice with DOM manipulation and events",
      "Clean, focused interface",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
    thumb: "project-4-thumb.jpg",
  },
  {
    slug: "wanderlust",
    title: "Wanderlust Travel Blog",
    category: "Website",
    accent: "amber",
    summary:
      "A travel blog website with a content-first layout, built to practice typography, card grids and readable article pages.",
    highlights: [
      "Blog-style layout with article cards",
      "Typography and spacing tuned for reading",
      "Responsive across screen sizes",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
    thumb: "project-5-thumb.jpg",
  },
  {
    slug: "dashboard",
    title: "Clock, Timer & Counter Dashboard",
    category: "Web App",
    accent: "rose",
    summary:
      "A dashboard with a live clock, a timer and counters, built to practice JavaScript intervals, state and event handling.",
    highlights: [
      "Live clock using setInterval",
      "Start, pause and reset timer logic",
      "Counters with increment and decrement controls",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
    thumb: "project-6-thumb.jpg",
  },
  {
    slug: "burgerbash",
    title: "BurgerBash",
    category: "Landing Page",
    accent: "amber",
    summary: "A bold restaurant landing page concept with menu highlights and clear calls to action.",
    highlights: ["Hero, menu and offer sections", "Mobile-first responsive layout"],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    slug: "lumiere-beauty-studio",
    title: "Lumière Beauty Studio",
    category: "Landing Page",
    accent: "rose",
    summary: "An elegant beauty studio website concept focused on soft visuals, services and booking prompts.",
    highlights: ["Service and pricing sections", "Clean, airy visual style"],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    slug: "serenova-resort",
    title: "Serenova Resort",
    category: "Website",
    accent: "teal",
    summary: "A resort and hospitality website concept with a calm layout and structured sections.",
    highlights: ["Room, amenities and contact sections", "Responsive navigation"],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    slug: "medicare-clinic",
    title: "MediCare Clinic",
    category: "Website",
    accent: "blue",
    summary: "A clean clinic website concept with services, doctors and appointment sections.",
    highlights: ["Clear information hierarchy", "Trust-focused, easy-to-scan layout"],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    slug: "drivex",
    title: "DriveX",
    category: "Landing Page",
    accent: "violet",
    summary: "A modern automotive landing page concept with strong typography and feature sections.",
    highlights: ["Feature and pricing sections", "Smooth hover interactions"],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    slug: "ironforge",
    title: "IronForge",
    category: "Landing Page",
    accent: "green",
    summary: "A fitness-focused landing page concept with programs, plans and a strong call to action.",
    highlights: ["Program and membership sections", "High-contrast, energetic styling"],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    slug: "nexashop",
    title: "NexaShop",
    category: "Website",
    accent: "blue",
    summary: "An online store interface concept built to practice product cards, filters and layout systems.",
    highlights: ["Product card grid", "Responsive store layout"],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    slug: "shopbd",
    title: "ShopBD (NSDA Web Design Level 3)",
    category: "Website",
    accent: "amber",
    summary:
      "A multi-page Bootstrap e-commerce site built for the NSDA Web Design Level 3 exam, including carousels and a jQuery setup I debugged along the way.",
    highlights: ["Multi-page Bootstrap 4 structure", "Carousels powered by jQuery"],
    tech: ["HTML", "CSS", "Bootstrap 4", "jQuery"],
    featured: false,
  },
  {
    slug: "slite-clone",
    title: "Slite Landing Page Clone",
    category: "Landing Page",
    accent: "teal",
    summary: "A responsive clone of the Slite landing page, built to practice Bootstrap layouts.",
    highlights: ["Responsive Bootstrap grid", "Section-by-section recreation from a reference"],
    tech: ["HTML", "CSS", "Bootstrap"],
    featured: false,
    repo: `${gh}/bootstrap-second-project`,
  },
  {
    slug: "todo-list",
    title: "To-Do List App",
    category: "Practice",
    accent: "green",
    summary: "My early DOM project: add, complete and remove tasks using plain JavaScript.",
    highlights: ["Create and remove elements dynamically", "Event handling basics"],
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    repo: `${gh}/DOM-Project-01`,
  },
  {
    slug: "day-night-switcher",
    title: "Day / Night Switcher",
    category: "Practice",
    accent: "violet",
    summary: "A small practice project that switches between day and night using functions and events.",
    highlights: ["Functions and click events", "Dynamic content swapping"],
    tech: ["HTML", "JavaScript"],
    featured: false,
    repo: `${gh}/day-night-switcher`,
  },
];

export const projectCategories = ["All", "Landing Page", "Website", "Web App", "Practice"] as const;
