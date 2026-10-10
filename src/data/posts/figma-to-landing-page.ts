import type { Post } from "./types";

export const figmaToLandingPage: Post = {
  slug: "turn-figma-designs-into-landing-pages",
  title: "How I Turn a Figma Design into a Real Landing Page",
  excerpt:
    "The step-by-step routine I follow when I practice by rebuilding Figma designs: from reading the design to a polished, responsive page.",
  category: "Workflow",
  date: "2026-10-06",
  tags: ["Figma", "HTML", "CSS", "Workflow"],
  accent: "teal",
  blocks: [
    {
      type: "p",
      text: "A big part of how I learn front-end development is rebuilding real designs. I open a Figma file, study it, and try to build it as close as I can in code. Doing this every week taught me more than any single tutorial, because a design never tells you how to build it. You have to make decisions.",
    },
    {
      type: "p",
      text: "This post is the routine I follow. It is not a secret method, just a calm order of steps that stops me from getting lost halfway through a page.",
    },
    { type: "h2", text: "Step 1: Read the design before writing any code" },
    {
      type: "p",
      text: "I spend the first ten minutes only looking. I scroll through the whole design and try to answer a few questions: how many sections are there, which parts repeat, and what feels like the main idea of the page? Repeated parts such as cards, buttons and section headings are a signal that I should build them once and reuse them.",
    },
    {
      type: "ul",
      items: [
        "Count the sections from top to bottom and give each a name (hero, features, pricing, footer).",
        "Spot repeating elements: cards, buttons, badges, list items.",
        "Note anything interactive: hover states, sliders, tabs, menus.",
        "Check if the design includes a mobile version. If not, I decide how it should collapse.",
      ],
    },
    { type: "h2", text: "Step 2: Pull out the design tokens" },
    {
      type: "p",
      text: "Before the first line of HTML, I collect the design tokens: colors, font sizes, font weights, spacing and border radius. I write them down as CSS variables. This single step removes most of the “why does this look slightly off?” problems later.",
    },
    {
      type: "code",
      lang: "css",
      caption: "tokens.css: the whole look of the page in one place",
      code: `:root {
  --color-primary: #1d4ed8;
  --color-accent: #0e7490;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-surface: #ffffff;

  --font-heading: "Plus Jakarta Sans", sans-serif;
  --font-body: "Inter", sans-serif;

  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 48px;

  --radius: 16px;
}`,
    },
    {
      type: "callout",
      tone: "tip",
      title: "Use a spacing scale",
      text: "If the design uses multiples of 8px, stick to them. Picking random values like 13px or 27px is how pages start to look uneven.",
    },
    { type: "h2", text: "Step 3: Build the structure with semantic HTML" },
    {
      type: "p",
      text: "I write the HTML first, with no styling at all. I use real elements like `header`, `nav`, `main`, `section` and `footer`, and I keep headings in a clean order. A page that reads well without CSS is usually easy to style and also good for SEO and accessibility.",
    },
    {
      type: "code",
      lang: "html",
      caption: "A section skeleton I reuse",
      code: `<section class="features" id="features">
  <div class="container">
    <h2 class="section-title">Why people love it</h2>
    <p class="section-subtitle">A short supporting line.</p>

    <div class="feature-grid">
      <article class="feature-card">
        <h3>Fast setup</h3>
        <p>One sentence about this feature.</p>
      </article>
      <!-- repeat the card -->
    </div>
  </div>
</section>`,
    },
    { type: "h2", text: "Step 4: Style mobile-first, then scale up" },
    {
      type: "p",
      text: "I write the small-screen styles first and use `min-width` media queries to enhance the layout on larger screens. It feels slower for the first page, but it prevents the painful situation of squeezing a finished desktop layout into a phone.",
    },
    {
      type: "code",
      lang: "css",
      code: `.feature-grid {
  display: grid;
  gap: var(--space-3);
}

@media (min-width: 700px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
    },
    { type: "h2", text: "Step 5: Compare against the design, then polish" },
    {
      type: "p",
      text: "When the page is roughly done, I put the browser and the Figma file side by side and compare section by section. I look at spacing first, then type size, then colors. Small differences add up, so I fix them one at a time instead of trusting my eyes in general.",
    },
    {
      type: "ol",
      items: [
        "Check spacing between sections and inside cards.",
        "Check font sizes and line heights of headings and paragraphs.",
        "Check button sizes, radius and hover states.",
        "Resize the browser slowly and watch where the layout breaks.",
        "Add small interactions last: hover lifts, smooth scroll, subtle fades.",
      ],
    },
    { type: "h2", text: "What this routine taught me" },
    {
      type: "p",
      text: "The biggest lesson is that speed comes from preparation. Reading the design and setting up tokens feels like a delay, but it makes the actual building faster and the result cleaner. Every new page I rebuild also gets easier, because the same patterns keep coming back: a hero, a grid of cards, a call to action, a footer.",
    },
    {
      type: "p",
      text: "If you are learning too, try rebuilding one design a week and keep a note of what confused you. That list of confusions becomes your best study guide.",
    },
  ],
};
