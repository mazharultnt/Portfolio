/**
 * IMAGE SLOTS  (every image used on the website is listed here)
 *
 * HOW IT WORKS
 * Each slot points to a file inside  public/images/  (served by the site as /images/<file>).
 * Until the file exists, a soft animated gradient placeholder is shown, so nothing looks broken.
 * When you add the file with the EXACT name below, the image appears automatically. No code change needed.
 *
 * Each slot also holds its ChatGPT prompt. Run  `npm run prompts`  to rebuild IMAGE_PROMPTS.md from this file.
 */

export type ImageSlot = {
  file: string;
  ratio: string;
  size: string;
  alt: string;
  where: string;
  prompt: string;
};

const STYLE =
  "Bright, clean, modern light-theme style: white and very pale blue background, with accent colors of royal blue (#1d4ed8), teal (#0e7490) and soft violet. Soft shadows, smooth gradients, polished 3D-vector look. Absolutely no text, letters, logos or watermarks inside the image.";

export const images = {
  /* ---------------- Hero / About / Contact / CTA ---------------- */
  "hero-developer-profile.jpg": {
    file: "hero-developer-profile.jpg",
    ratio: "1:1 square",
    size: "1200 x 1200 px",
    alt: "Illustration of a front-end developer working at a desk with code on the screen",
    where: "Home page, hero section (right side)",
    prompt: `A friendly stylized 3D illustration of a young front-end developer sitting at a modern desk with a laptop showing colorful code and a UI design, a plant and a coffee cup nearby, floating abstract UI cards and code symbols around them. Face is simple and stylized, not a photo of a real person. Centered composition with room around the edges. ${STYLE}`,
  },
  "about-me-illustration.jpg": {
    file: "about-me-illustration.jpg",
    ratio: "4:5 portrait",
    size: "1000 x 1250 px",
    alt: "Illustration representing a developer's learning journey",
    where: "About page, intro section",
    prompt: `A warm 3D illustration of a learning journey for a web developer: a winding path of glowing steps rising upward, with a laptop, a stack of books, a lightbulb and small floating HTML, CSS and JavaScript icons made of simple shapes (no text). Feels hopeful and motivated. Portrait composition. ${STYLE}`,
  },
  "contact-illustration.jpg": {
    file: "contact-illustration.jpg",
    ratio: "5:4 landscape",
    size: "1000 x 800 px",
    alt: "Illustration of an envelope and chat bubbles",
    where: "Contact page, side panel",
    prompt: `A cheerful 3D illustration of a large open envelope with a paper plane flying out, surrounded by floating chat bubbles, a small globe and a check mark badge, communicating friendly worldwide remote collaboration. Landscape composition with generous empty space. ${STYLE}`,
  },
  "cta-banner.jpg": {
    file: "cta-banner.jpg",
    ratio: "21:9 ultra-wide",
    size: "2100 x 900 px",
    alt: "Abstract gradient banner with floating shapes",
    where: "Home page, bottom call-to-action banner",
    prompt: `A wide abstract banner of flowing translucent gradient waves in blue, teal and violet with soft glowing orbs, thin line grids and tiny floating geometric shapes. Calm, premium and airy. Leave the center area relatively clean for text overlay. ${STYLE}`,
  },

  /* ---------------- Tech stack ---------------- */
  "tech-html-banner.png": {
    file: "tech-html-banner.png",
    ratio: "16:9",
    size: "800 x 450 px",
    alt: "HTML5 technology banner",
    where: "Skills page and home tech section",
    prompt: `A glossy 3D tile visualizing HTML: a rounded shield-like shape in warm orange with a simple angle-bracket symbol (< />) shape, floating over a soft pale-blue gradient background with small structural block shapes. Icon-style hero composition, centered. No letters or numbers. ${STYLE}`,
  },
  "tech-css-banner.png": {
    file: "tech-css-banner.png",
    ratio: "16:9",
    size: "800 x 450 px",
    alt: "CSS3 technology banner",
    where: "Skills page and home tech section",
    prompt: `A glossy 3D tile visualizing CSS: a rounded blue shield-like shape with curly braces symbol { } and a paintbrush with color swatches around it, floating on a soft pale gradient background. Centered icon-style composition. No letters or numbers. ${STYLE}`,
  },
  "tech-javascript-banner.png": {
    file: "tech-javascript-banner.png",
    ratio: "16:9",
    size: "800 x 450 px",
    alt: "JavaScript technology banner",
    where: "Skills page and home tech section",
    prompt: `A glossy 3D rounded yellow square tile with a lightning bolt and tiny gears floating on a soft pale gradient background, representing interactivity and logic in JavaScript. Centered icon-style composition. No letters or numbers. ${STYLE}`,
  },
  "tech-typescript-banner.png": {
    file: "tech-typescript-banner.png",
    ratio: "16:9",
    size: "800 x 450 px",
    alt: "TypeScript technology banner",
    where: "Skills page and home tech section",
    prompt: `A glossy 3D rounded blue square tile with a shield and a check mark symbol, small floating type-safety puzzle pieces fitting together, on a soft pale gradient background. Centered icon-style composition. No letters or numbers. ${STYLE}`,
  },
  "tech-react-banner.png": {
    file: "tech-react-banner.png",
    ratio: "16:9",
    size: "800 x 450 px",
    alt: "React technology banner",
    where: "Skills page and home tech section",
    prompt: `A glowing 3D atom-like symbol with three elliptical orbits in cyan around a bright center nucleus, floating on a soft pale-blue gradient background with small component block shapes. Centered icon-style composition. No letters or numbers. ${STYLE}`,
  },
  "tech-nextjs-banner.png": {
    file: "tech-nextjs-banner.png",
    ratio: "16:9",
    size: "800 x 450 px",
    alt: "Next.js technology banner",
    where: "Skills page and home tech section",
    prompt: `A sleek 3D circular tile in deep navy with a bold diagonal slash shape and a trailing light streak suggesting speed, floating on a soft pale gradient background with subtle page-layout wireframe shapes. Centered icon-style composition. No letters or numbers. ${STYLE}`,
  },
  "tech-nodejs-banner.png": {
    file: "tech-nodejs-banner.png",
    ratio: "16:9",
    size: "800 x 450 px",
    alt: "Node.js technology banner",
    where: "Skills page and home tech section",
    prompt: `A glossy 3D green hexagon with a glowing core, connected by thin lines to small server and data nodes, floating on a soft pale gradient background. Centered icon-style composition. No letters or numbers. ${STYLE}`,
  },
  "tech-tailwind-banner.png": {
    file: "tech-tailwind-banner.png",
    ratio: "16:9",
    size: "800 x 450 px",
    alt: "Tailwind CSS technology banner",
    where: "Skills page and home tech section",
    prompt: `Smooth flowing wind-like ribbons in turquoise and sky blue forming gentle waves, with small floating utility-style rounded blocks, on a soft pale gradient background. Centered icon-style composition. No letters or numbers. ${STYLE}`,
  },
  "tech-bootstrap-banner.png": {
    file: "tech-bootstrap-banner.png",
    ratio: "16:9",
    size: "800 x 450 px",
    alt: "Bootstrap technology banner",
    where: "Skills page and home tech section",
    prompt: `A glossy 3D rounded violet square tile with a grid of neat columns and rows, small layout components (button, card, navbar blocks) floating around it, on a soft pale gradient background. Centered icon-style composition. No letters or numbers. ${STYLE}`,
  },
  "tech-git-banner.png": {
    file: "tech-git-banner.png",
    ratio: "16:9",
    size: "800 x 450 px",
    alt: "Git and GitHub technology banner",
    where: "Skills page and home tech section",
    prompt: `A 3D illustration of a branching commit graph: glowing nodes connected by curved lines splitting and merging in orange, teal and blue, with a small cat-silhouette-free abstract circular badge, on a soft pale gradient background. Centered icon-style composition. No letters or numbers. ${STYLE}`,
  },

  /* ---------------- Projects (featured) ---------------- */
  "project-1-thumb.jpg": {
    file: "project-1-thumb.jpg",
    ratio: "16:10",
    size: "1280 x 800 px",
    alt: "Preview of the ShopWave e-commerce website",
    where: "Projects: ShopWave",
    prompt: `A realistic modern browser window mockup floating at a slight angle, showing an e-commerce website homepage design with a clean header, a hero banner, a grid of product cards with abstract product shapes and an add-to-cart button, in blue and white colors. Page content should look like a real design but without readable text. Soft shadow, pale gradient background. ${STYLE}`,
  },
  "project-2-thumb.jpg": {
    file: "project-2-thumb.jpg",
    ratio: "16:10",
    size: "1280 x 800 px",
    alt: "Preview of the personal portfolio website",
    where: "Projects: Personal Portfolio",
    prompt: `A modern browser window mockup showing a personal portfolio website with a bold gradient hero, a project card grid and a skills section, in teal and white, plus a small phone mockup beside it showing the mobile version. No readable text. Soft shadow on pale gradient background. ${STYLE}`,
  },
  "project-3-thumb.jpg": {
    file: "project-3-thumb.jpg",
    ratio: "16:10",
    size: "1280 x 800 px",
    alt: "Preview of the Nura Headphones landing page",
    where: "Projects: Nura Headphones Landing Page",
    prompt: `A browser window mockup showing a premium headphones product landing page: a large hero with a stylized pair of over-ear headphones in violet and silver, feature icons below and a purchase button. Elegant and spacious layout, no readable text. Soft shadow on pale gradient background. ${STYLE}`,
  },
  "project-4-thumb.jpg": {
    file: "project-4-thumb.jpg",
    ratio: "16:10",
    size: "1280 x 800 px",
    alt: "Preview of the CSSForge developer tool",
    where: "Projects: CSSForge",
    prompt: `A browser window mockup of a developer tool interface: a control panel with sliders and color pickers on the left and a live preview box with a gradient shape on the right, plus a code snippet area (abstract lines, no readable text). Green and teal accents. Soft shadow on pale gradient background. ${STYLE}`,
  },
  "project-5-thumb.jpg": {
    file: "project-5-thumb.jpg",
    ratio: "16:10",
    size: "1280 x 800 px",
    alt: "Preview of the Wanderlust travel blog",
    where: "Projects: Wanderlust Travel Blog",
    prompt: `A browser window mockup of a travel blog homepage: a large featured article card with an abstract landscape illustration (mountains, sun and sea in warm amber and sky blue), and a grid of smaller article cards. Editorial layout, no readable text. Soft shadow on pale gradient background. ${STYLE}`,
  },
  "project-6-thumb.jpg": {
    file: "project-6-thumb.jpg",
    ratio: "16:10",
    size: "1280 x 800 px",
    alt: "Preview of the clock, timer and counter dashboard",
    where: "Projects: Dashboard",
    prompt: `A browser window mockup of a clean dashboard with a large analog-digital clock card, a circular timer ring with start and pause buttons, and a row of counter cards with plus and minus buttons. Rose and blue accents. No readable text. Soft shadow on pale gradient background. ${STYLE}`,
  },

  /* ---------------- Experience & achievements ---------------- */
  "certificate-1.jpg": {
    file: "certificate-1.jpg",
    ratio: "4:3 landscape",
    size: "1200 x 900 px",
    alt: "NSDA Web Design Level 3 certificate",
    where: "Experience page, certifications",
    prompt: `USE YOUR REAL DOCUMENT INSTEAD OF AI. Scan or photograph your actual NSDA (National Skills Development Authority) Web Design Level 3 result or certificate, crop it neatly, and save it as certificate-1.jpg. Please hide private details such as ID numbers before uploading. If you do not have a certificate yet, leave this slot empty and the placeholder will stay. (Generating a fake certificate with AI would be misleading, so this slot is intentionally not given an AI prompt.)`,
  },
  "certificate-2.jpg": {
    file: "certificate-2.jpg",
    ratio: "4:3 landscape",
    size: "1200 x 900 px",
    alt: "Creative IT Institute Full Stack Web Development course",
    where: "Experience page, certifications",
    prompt: `USE YOUR REAL DOCUMENT INSTEAD OF AI. This slot is for a real proof of your Full Stack Web Development course at Creative IT Institute (for example an enrollment card or a module completion document, once you have one). Scan or photograph it, hide private details, and save it as certificate-2.jpg. If you have nothing yet, leave it empty. Do not generate a fake document with AI.`,
  },
  "achievement-client-work.jpg": {
    file: "achievement-client-work.jpg",
    ratio: "4:3 landscape",
    size: "1200 x 900 px",
    alt: "Illustration for Google Business Profile client work",
    where: "Experience page, achievements",
    prompt: `A bright 3D illustration of a local business map pin rising on top of a map with a rising ranking staircase of glowing steps, a verified check-mark badge and a small video-call window bubble, communicating local search ranking and profile verification. No logos, no brand names, no real faces, no text. ${STYLE}`,
  },

  /* ---------------- Blog ---------------- */
  "blog-header-banner.jpg": {
    file: "blog-header-banner.jpg",
    ratio: "8:3 wide",
    size: "1600 x 600 px",
    alt: "Abstract illustration of writing and code",
    where: "Blog page, top banner",
    prompt: `A wide 3D illustration of an open notebook and a laptop with floating code brackets, pencil, lightbulb and small article cards flying in an arc, in a calm creative workspace mood. Keep the left third relatively clean for a page title. ${STYLE}`,
  },
  "post-turn-figma-designs-into-landing-pages.jpg": {
    file: "post-turn-figma-designs-into-landing-pages.jpg",
    ratio: "16:9",
    size: "1200 x 675 px",
    alt: "A design turning into a coded landing page",
    where: "Blog card and article header",
    prompt: `A split composition: on the left, a colorful design canvas with frames and shapes and a pen tool cursor; on the right, the same layout turned into a clean website in a browser window with tiny code brackets between them as a bridge. Teal and violet accents, no readable text. ${STYLE}`,
  },
  "post-flexbox-vs-css-grid-when-i-use-which.jpg": {
    file: "post-flexbox-vs-css-grid-when-i-use-which.jpg",
    ratio: "16:9",
    size: "1200 x 675 px",
    alt: "Flexbox and CSS Grid layout comparison",
    where: "Blog card and article header",
    prompt: `Two side-by-side 3D layout diagrams: the left shows colorful blocks aligned in a single flexible row with arrows, the right shows blocks aligned in a neat two-dimensional grid of rows and columns. Blue and teal, clean and educational, no readable text. ${STYLE}`,
  },
  "post-javascript-dom-basics-with-a-todo-list.jpg": {
    file: "post-javascript-dom-basics-with-a-todo-list.jpg",
    ratio: "16:9",
    size: "1200 x 675 px",
    alt: "A to-do list interface with JavaScript code",
    where: "Blog card and article header",
    prompt: `A 3D illustration of a to-do list card with checkboxes (some ticked) and a plus button, next to a small floating tree-like diagram of connected nodes representing the DOM, with a yellow lightning accent. Amber and blue colors, no readable text. ${STYLE}`,
  },
  "post-react-in-plain-words-components-props-state.jpg": {
    file: "post-react-in-plain-words-components-props-state.jpg",
    ratio: "16:9",
    size: "1200 x 675 px",
    alt: "React component blocks connected together",
    where: "Blog card and article header",
    prompt: `A set of colorful 3D building blocks snapping together into a small interface, with arrows showing data flowing from a parent block down into child blocks, and a toggle switch representing state. Violet and cyan accents, no readable text. ${STYLE}`,
  },
  "post-tailwind-bootstrap-or-custom-css-how-i-choose.jpg": {
    file: "post-tailwind-bootstrap-or-custom-css-how-i-choose.jpg",
    ratio: "16:9",
    size: "1200 x 675 px",
    alt: "Three styling approaches compared",
    where: "Blog card and article header",
    prompt: `Three distinct 3D pedestals side by side: one with a hand-drawn paintbrush and color palette (custom), one with prebuilt snap-together component blocks (framework), one with small utility tiles in a toolbox (utility-first). Green and teal accents, no readable text. ${STYLE}`,
  },
  "post-git-and-github-mistakes-beginners-make.jpg": {
    file: "post-git-and-github-mistakes-beginners-make.jpg",
    ratio: "16:9",
    size: "1200 x 675 px",
    alt: "Git branches and commit graph",
    where: "Blog card and article header",
    prompt: `A glowing commit graph with branching and merging lines, one small warning triangle and a rewind arrow showing a mistake being undone, plus a safe check badge. Rose, teal and blue accents, no readable text. ${STYLE}`,
  },
  "post-responsive-design-checklist-before-calling-a-page-done.jpg": {
    file: "post-responsive-design-checklist-before-calling-a-page-done.jpg",
    ratio: "16:9",
    size: "1200 x 675 px",
    alt: "A website shown on phone, tablet and desktop",
    where: "Blog card and article header",
    prompt: `A 3D device lineup: a desktop monitor, a tablet and a phone showing the same website layout adapting to each screen size, with a floating checklist card with tick marks. Teal and blue accents, no readable text. ${STYLE}`,
  },
  "post-seo-friendly-html-the-basics-every-developer-should-know.jpg": {
    file: "post-seo-friendly-html-the-basics-every-developer-should-know.jpg",
    ratio: "16:9",
    size: "1200 x 675 px",
    alt: "HTML structure and a search results page",
    where: "Blog card and article header",
    prompt: `A 3D illustration of a magnifying glass over a search results list, with a small outline tree of HTML structure blocks (header, main, footer) beside it and a rising chart arrow. Amber and blue accents, no readable text. ${STYLE}`,
  },
} satisfies Record<string, ImageSlot>;

export type ImageName = keyof typeof images;

/** Image for a given blog post slug (file name = post-<slug>.jpg) */
export function postImageName(slug: string): string {
  return `post-${slug}.jpg`;
}

export function getImage(file: string): ImageSlot | undefined {
  return (images as Record<string, ImageSlot>)[file];
}
