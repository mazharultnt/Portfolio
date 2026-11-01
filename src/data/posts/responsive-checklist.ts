import type { Post } from "./types";

export const responsiveChecklist: Post = {
  slug: "responsive-design-checklist-before-calling-a-page-done",
  title: "The Responsive Design Checklist I Use Before Calling a Page Done",
  excerpt:
    "A page that looks great on my laptop is not finished. This is the quick checklist I run through to catch layout bugs on every screen size.",
  category: "Workflow",
  date: "2026-08-12",
  tags: ["Responsive Design", "CSS", "Testing", "Checklist"],
  accent: "teal",
  blocks: [
    {
      type: "p",
      text: "Early on, I would finish a page, see it looking perfect on my laptop and move on. Then I would open it on a phone and find text overflowing, buttons too small to tap and images stretching the layout. Now I never call a page done until it passes a short checklist.",
    },
    { type: "h2", text: "Start with the right foundation" },
    {
      type: "p",
      text: "Responsive design only works if the basics are in place. These two small pieces solve a surprising number of problems.",
    },
    {
      type: "code",
      lang: "html",
      code: `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
    },
    {
      type: "code",
      lang: "css",
      code: `*,
*::before,
*::after {
  box-sizing: border-box;
}

img,
svg,
video {
  max-width: 100%;
  height: auto;
}`,
    },
    { type: "h2", text: "The checklist" },
    { type: "h3", text: "Layout" },
    {
      type: "ul",
      items: [
        "No horizontal scrollbar at any width from 320px to 1440px.",
        "Columns collapse into a single column on small screens.",
        "Content has side padding so text never touches the screen edge.",
        "Fixed pixel widths are replaced with percentages, `max-width`, `fr` or `minmax`.",
      ],
    },
    { type: "h3", text: "Typography" },
    {
      type: "ul",
      items: [
        "Body text is at least 16px on mobile.",
        "Headlines scale smoothly with `clamp()` instead of jumping between sizes.",
        "Lines of text are not too long: roughly 60 to 75 characters is comfortable.",
      ],
    },
    {
      type: "code",
      lang: "css",
      code: `h1 {
  font-size: clamp(2.2rem, 5vw, 4rem);
}

.article {
  max-width: 70ch;
}`,
    },
    { type: "h3", text: "Touch and interaction" },
    {
      type: "ul",
      items: [
        "Buttons and links are large enough to tap comfortably (aim for about 44px tall).",
        "Hover-only effects also have a usable alternative on touch screens.",
        "The mobile menu opens, closes and can be used with the keyboard.",
        "Form fields are big enough and use the right input types (email, tel, number).",
      ],
    },
    { type: "h3", text: "Media" },
    {
      type: "ul",
      items: [
        "Images and videos never overflow their containers.",
        "Large images are compressed so mobile data is not wasted.",
        "Icons and illustrations stay sharp on high-density screens (SVG is great for this).",
      ],
    },
    { type: "h2", text: "How I test quickly" },
    {
      type: "ol",
      items: [
        "Open the browser DevTools and switch on the device toolbar.",
        "Drag the width slowly from wide to narrow and watch for the exact moment something breaks.",
        "Add a breakpoint for that moment instead of guessing standard device sizes.",
        "Test a few widths explicitly: 360px, 768px, 1024px and 1440px.",
        "Finally, open the page on a real phone if possible.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "Breakpoints should follow the content",
      text: "Do not design for specific phone models. Resize until the layout looks wrong, then fix it at that width.",
    },
    { type: "h2", text: "A mobile-first starting point" },
    {
      type: "code",
      lang: "css",
      code: `.layout {
  display: grid;
  gap: 24px;
  padding: 0 20px;
}

@media (min-width: 768px) {
  .layout {
    grid-template-columns: 1fr 1fr;
    padding: 0 40px;
  }
}

@media (min-width: 1100px) {
  .layout {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1160px;
    margin: 0 auto;
  }
}`,
    },
    {
      type: "p",
      text: "Running this checklist takes about ten minutes, and it has saved me from shipping embarrassing layouts many times. It is also the kind of habit that clients and employers notice, because a responsive page feels professional.",
    },
  ],
};
