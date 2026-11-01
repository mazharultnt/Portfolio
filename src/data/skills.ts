/**
 * SKILLS
 * "level" is 1 to 5 (self-assessed). Update the numbers as you grow.
 * 1 = just started, 3 = comfortable with projects, 5 = very strong.
 */

export type Skill = {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  note: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  accent: "blue" | "teal" | "violet" | "green";
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "foundations",
    title: "Web Foundations",
    blurb: "The base everything else sits on.",
    accent: "blue",
    skills: [
      { name: "HTML5", level: 4, note: "Semantic, accessible, SEO-friendly markup" },
      { name: "CSS3", level: 4, note: "Flexbox, Grid, animations, responsive layouts" },
      { name: "JavaScript (ES6+)", level: 3, note: "DOM, events, arrays, functions, async basics" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    blurb: "Faster, more structured ways to build interfaces.",
    accent: "violet",
    skills: [
      { name: "React.js", level: 3, note: "Components, props, state, hooks, JSX" },
      { name: "Next.js", level: 3, note: "App Router, routing, metadata, static pages" },
      { name: "TypeScript", level: 3, note: "Typed props, interfaces and safer components" },
      { name: "Tailwind CSS", level: 4, note: "Utility-first styling and design tokens" },
      { name: "Bootstrap 5", level: 4, note: "Grid system, components, quick prototyping" },
    ],
  },
  {
    id: "tools",
    title: "Runtime & Tools",
    blurb: "What I use around the code every day.",
    accent: "teal",
    skills: [
      { name: "Node.js", level: 2, note: "Runtime basics, npm and scripts" },
      { name: "Git & GitHub", level: 3, note: "Branches, commits, pushing, resolving conflicts" },
      { name: "VS Code", level: 4, note: "Daily editor with a clean workflow" },
    ],
  },
];

export const practices = [
  {
    title: "Responsive by default",
    text: "Every page I build is checked on phone, tablet and desktop widths before I call it done.",
    accent: "blue",
  },
  {
    title: "Pixel-accurate UI",
    text: "I practice by rebuilding Figma designs closely: spacing, type scale, colors and states.",
    accent: "teal",
  },
  {
    title: "SEO-friendly code",
    text: "Proper headings, meta tags, alt text and clean structure so pages are easy to find and read.",
    accent: "green",
  },
  {
    title: "Clean, readable code",
    text: "Clear naming, small components and consistent formatting that a teammate can pick up quickly.",
    accent: "violet",
  },
  {
    title: "Consistent practice",
    text: "I aim to build a new landing page or small site every week, using different tools each time.",
    accent: "amber",
  },
  {
    title: "Always learning",
    text: "Backend development is my current study area, so I can grow into a full-stack developer.",
    accent: "rose",
  },
] as const;

export const learningNow = [
  "Backend development fundamentals",
  "Building REST APIs with Node.js",
  "Writing more type-safe React with TypeScript",
  "Accessibility and performance basics",
];
