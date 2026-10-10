import type { Post } from "./types";

export const flexboxVsGrid: Post = {
  slug: "flexbox-vs-css-grid-when-i-use-which",
  title: "Flexbox vs CSS Grid: When I Use Which",
  excerpt:
    "Both layouts are powerful and they overlap, which confuses beginners. Here is the simple rule I use to pick between them, with real examples.",
  category: "CSS",
  date: "2026-09-28",
  tags: ["CSS", "Flexbox", "Grid", "Layout"],
  accent: "blue",
  blocks: [
    {
      type: "p",
      text: "When I first learned CSS layout, I kept asking the same question: should I use Flexbox or Grid? Tutorials made it sound like one was better. After building many pages, I realised they are not competitors. They solve slightly different problems, and the best pages usually use both.",
    },
    { type: "h2", text: "The one-sentence rule" },
    {
      type: "quote",
      text: "Flexbox is for laying things out in one direction. Grid is for laying things out in rows and columns together.",
    },
    {
      type: "p",
      text: "If I only care about a row (or only a column) of items, I reach for Flexbox. If I care about both directions at once, such as a gallery or a page layout, I reach for Grid.",
    },
    { type: "h2", text: "Where Flexbox shines" },
    {
      type: "p",
      text: "Flexbox is perfect for components: a navbar, a button with an icon, a row of tags, a card footer. The content decides the size, and Flexbox distributes the leftover space.",
    },
    {
      type: "code",
      lang: "css",
      caption: "A classic navbar with Flexbox",
      code: `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.nav-links {
  display: flex;
  gap: 16px;
  list-style: none;
}`,
    },
    {
      type: "p",
      text: "A few Flexbox properties do most of the work: `justify-content` controls the main axis, `align-items` controls the cross axis, `gap` adds space, and `flex-wrap` lets items drop to a new line.",
    },
    { type: "h2", text: "Where Grid shines" },
    {
      type: "p",
      text: "Grid is built for layouts where items need to line up in both directions: card galleries, dashboards, pricing tables and whole page structures.",
    },
    {
      type: "code",
      lang: "css",
      caption: "A responsive card grid with no media queries",
      code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}`,
    },
    {
      type: "p",
      text: "That single `repeat(auto-fit, minmax(260px, 1fr))` line is my favourite trick. It creates as many columns as can fit, each at least 260px wide, and the layout adapts on its own from phone to desktop.",
    },
    { type: "h2", text: "A quick comparison" },
    {
      type: "table",
      head: ["Situation", "My pick", "Why"],
      rows: [
        ["Navbar or toolbar", "Flexbox", "Items sit in one row and need spacing"],
        ["Centering one thing", "Flexbox or Grid", "Both work. Grid is two lines with place-items: center"],
        ["Card gallery", "Grid", "Needs consistent rows and columns"],
        ["Page layout with sidebar", "Grid", "Two-dimensional structure"],
        ["Tags or chips that wrap", "Flexbox", "Simple wrapping row"],
        ["Dashboard widgets", "Grid", "Different spans across rows and columns"],
      ],
    },
    { type: "h2", text: "Using them together" },
    {
      type: "p",
      text: "Most real pages use both. I might use Grid for the overall page and the card gallery, then Flexbox inside each card to push the button to the bottom. Mixing them is completely normal.",
    },
    {
      type: "code",
      lang: "css",
      code: `.card {
  display: flex;
  flex-direction: column;
}

.card .btn {
  margin-top: auto; /* pushes the button to the bottom of the card */
}`,
    },
    {
      type: "callout",
      tone: "tip",
      title: "Centering cheat sheet",
      text: "To center something both ways, give the parent display: grid and place-items: center. It is the shortest version I know.",
    },
    { type: "h2", text: "Common mistakes I made" },
    {
      type: "ul",
      items: [
        "Using Flexbox for everything and then fighting uneven card heights.",
        "Forgetting `gap` and adding margins to every child instead.",
        "Setting fixed pixel widths on grid columns instead of using `fr` or `minmax`.",
        "Not testing at small widths, where a three-column grid needs to collapse.",
      ],
    },
    {
      type: "p",
      text: "If you remember only one thing: start with the question “is this one direction or two?” Most of the time, that answers it.",
    },
  ],
};
