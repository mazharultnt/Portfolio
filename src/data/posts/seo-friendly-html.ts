import type { Post } from "./types";

export const seoFriendlyHtml: Post = {
  slug: "seo-friendly-html-the-basics-every-developer-should-know",
  title: "SEO-Friendly HTML: The Basics Every Developer Should Know",
  excerpt:
    "Good SEO starts in the code. These are the practical HTML habits that help search engines, and real people, understand your page.",
  category: "SEO",
  date: "2026-07-30",
  tags: ["SEO", "HTML", "Accessibility", "Performance"],
  accent: "amber",
  blocks: [
    {
      type: "p",
      text: "Many people think SEO is only about keywords and marketing, but a large part of it begins in the code. A well-structured page is easier for search engines to understand and also easier for people (including those using screen readers) to use. The good news is that most of it is simple habits.",
    },
    { type: "h2", text: "1. Use one clear title and description" },
    {
      type: "p",
      text: "The `title` tag is what appears in search results and browser tabs. The meta description is the short summary shown below it. Write them for humans: specific, honest and unique for every page.",
    },
    {
      type: "code",
      lang: "html",
      code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Front-End Developer Portfolio | Mazharul Islam</title>
  <meta
    name="description"
    content="Projects and articles by a front-end developer building responsive websites with React and Next.js."
  />
</head>`,
    },
    {
      type: "callout",
      tone: "tip",
      title: "Length matters a little",
      text: "Keep titles around 50 to 60 characters and descriptions around 150 to 160, so search engines do not cut them off.",
    },
    { type: "h2", text: "2. Use headings in a logical order" },
    {
      type: "p",
      text: "Each page should have exactly one `h1`, describing what the page is about. Use `h2` for main sections and `h3` for subsections inside them. Do not choose heading levels because of how big they look. Use CSS for size and headings for meaning.",
    },
    { type: "h2", text: "3. Use semantic elements" },
    {
      type: "p",
      text: "Elements like `header`, `nav`, `main`, `article`, `section` and `footer` describe the role of each part of the page. A page built from nothing but `div` elements gives search engines and assistive technology very little to work with.",
    },
    {
      type: "code",
      lang: "html",
      code: `<header>
  <nav aria-label="Main">...</nav>
</header>

<main>
  <article>
    <h1>One clear page title</h1>
    <section>
      <h2>A main section</h2>
    </section>
  </article>
</main>

<footer>...</footer>`,
    },
    { type: "h2", text: "4. Write useful alt text" },
    {
      type: "p",
      text: "Alt text describes an image for people who cannot see it and for search engines. Describe what the image shows in a short, natural sentence. If an image is purely decorative, use an empty alt attribute so screen readers skip it.",
    },
    {
      type: "code",
      lang: "html",
      code: `<img src="team-meeting.jpg" alt="Students reviewing a landing page design on a laptop" />

<img src="divider.svg" alt="" />`,
    },
    { type: "h2", text: "5. Make links meaningful" },
    {
      type: "p",
      text: "Link text should make sense on its own. “Read the full guide to Flexbox” is much better than “click here”. It helps users scanning the page and it tells search engines what the destination is about.",
    },
    { type: "h2", text: "6. Speed is part of SEO" },
    {
      type: "ul",
      items: [
        "Compress images and use modern formats like WebP or AVIF.",
        "Set width and height on images to prevent layout shifts.",
        "Load only the fonts and scripts you actually use.",
        "Avoid heavy animations that block the main thread on low-end phones.",
      ],
    },
    { type: "h2", text: "7. Be mobile friendly" },
    {
      type: "p",
      text: "Search engines judge your page based on its mobile version first. A responsive layout with readable text and tappable buttons is not just nice to have. It directly affects how your page performs in search.",
    },
    { type: "h2", text: "A quick SEO checklist for every page" },
    {
      type: "table",
      head: ["Check", "Why it matters"],
      rows: [
        ["Unique title and meta description", "Shown in search results"],
        ["One h1 and logical headings", "Explains the structure of the page"],
        ["Semantic HTML elements", "Helps crawlers and screen readers"],
        ["Alt text on meaningful images", "Accessibility and image search"],
        ["Descriptive link text", "Context for users and crawlers"],
        ["Fast loading and responsive", "Better experience and ranking signals"],
      ],
    },
    {
      type: "p",
      text: "None of this is complicated. The trick is making it a habit from the very first line of HTML, so SEO is part of how you build rather than something you fix later.",
    },
  ],
};
