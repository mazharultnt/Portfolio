import type { Post } from "./types";

export const tailwindBootstrapCustom: Post = {
  slug: "tailwind-bootstrap-or-custom-css-how-i-choose",
  title: "Tailwind, Bootstrap or Custom CSS? How I Choose",
  excerpt:
    "I practice with all three, and each one has a moment where it is the right tool. Here is my honest comparison and a simple way to decide.",
  category: "Tooling",
  date: "2026-09-02",
  tags: ["Tailwind CSS", "Bootstrap", "CSS", "Tooling"],
  accent: "green",
  blocks: [
    {
      type: "p",
      text: "A weekly habit of mine is to build a landing page three different ways: with custom CSS, with Bootstrap and with Tailwind CSS. It sounds repetitive, but it taught me something no article could: the question is never which one is the best. The question is which one fits this project.",
    },
    {
      type: "p",
      text: "This is my honest, beginner-to-intermediate view of each, based on actually using them.",
    },
    { type: "h2", text: "Custom CSS: full control and the best learning" },
    {
      type: "p",
      text: "Writing your own CSS means every decision is yours. It is the best way to learn how layout, the box model and responsiveness really work, because nothing is hiding the details from you.",
    },
    {
      type: "ul",
      items: [
        "Total design freedom and no framework weight.",
        "Forces you to understand Flexbox, Grid and the cascade.",
        "Slower to start, and it needs discipline to stay organised as the project grows.",
      ],
    },
    {
      type: "code",
      lang: "css",
      code: `.btn {
  display: inline-flex;
  padding: 14px 26px;
  border-radius: 999px;
  background: #1d4ed8;
  color: #fff;
  font-weight: 700;
  transition: transform 0.25s ease;
}

.btn:hover {
  transform: translateY(-3px);
}`,
    },
    { type: "h2", text: "Bootstrap: speed with ready-made components" },
    {
      type: "p",
      text: "Bootstrap gives you a grid, buttons, navbars, modals, carousels and more, already styled and responsive. When I need a working, decent-looking page quickly, it is hard to beat.",
    },
    {
      type: "code",
      lang: "html",
      code: `<div class="container">
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card p-4">
        <h3 class="h5">Fast to build</h3>
        <p>The grid and components are ready.</p>
        <a href="#" class="btn btn-primary">Learn more</a>
      </div>
    </div>
  </div>
</div>`,
    },
    {
      type: "ul",
      items: [
        "Excellent for prototypes, admin panels and exam-style projects.",
        "Consistent, tested components with accessibility built in.",
        "Sites can start to look alike unless you customise the theme.",
      ],
    },
    { type: "h2", text: "Tailwind CSS: design in the markup" },
    {
      type: "p",
      text: "Tailwind gives you small utility classes such as `flex`, `p-6` and `rounded-2xl`, and you build the design directly in your HTML. There is a learning curve at the start, but once the class names are familiar, building feels very fast and consistent.",
    },
    {
      type: "code",
      lang: "html",
      code: `<a
  href="#"
  class="inline-flex items-center rounded-full bg-blue-700 px-6 py-3
         font-bold text-white transition hover:-translate-y-1"
>
  Get started
</a>`,
    },
    {
      type: "ul",
      items: [
        "A built-in design system (spacing, colors, type) keeps things consistent.",
        "No jumping between HTML and CSS files all day.",
        "Long class lists can look noisy, and components help keep them tidy.",
      ],
    },
    { type: "h2", text: "Side by side" },
    {
      type: "table",
      head: ["", "Custom CSS", "Bootstrap", "Tailwind CSS"],
      rows: [
        ["Speed to first page", "Slower", "Fastest", "Fast once learned"],
        ["Design freedom", "Total", "Medium", "High"],
        ["Learning value", "Highest", "Medium", "High"],
        ["Ready components", "None", "Many", "Few (build your own)"],
        ["Best for", "Learning, unique designs", "Prototypes, dashboards", "Modern custom UI, React apps"],
      ],
    },
    { type: "h2", text: "My simple decision guide" },
    {
      type: "ol",
      items: [
        "Learning a concept or building a very unique design? Start with custom CSS.",
        "Need a working page or admin interface fast, with standard components? Choose Bootstrap.",
        "Building a custom-looking interface with React or Next.js? Tailwind is a natural fit.",
        "Not sure? Build a small section in all three and see which one feels right.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Do not skip plain CSS",
      text: "Frameworks change, but the CSS underneath does not. The better I understand plain CSS, the faster I became with both Bootstrap and Tailwind.",
    },
    {
      type: "p",
      text: "My conclusion after many practice pages: tools are only tools. What matters is understanding the ideas under them, and being able to choose calmly when a new project starts.",
    },
  ],
};
