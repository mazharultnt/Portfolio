/**
 * SITE SETTINGS
 * Change your personal details here. They are used across the whole website.
 */

export const site = {
  name: "Mazharul Islam",
  firstName: "Mazharul",
  role: "Front-End Developer",
  title: "Mazharul Islam | Front-End Developer",
  description:
    "Portfolio of Mazharul Islam, a front-end developer from Bangladesh building clean, responsive and SEO-friendly websites with HTML, CSS, JavaScript, TypeScript, React and Next.js. Open to remote work.",
  // Set this to your real domain after you deploy (used for sitemap and social previews).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "jihadseopro@gmail.com",
  location: "Gazipur, Bangladesh",
  timezone: "Asia/Dhaka (UTC+6)",
  github: "https://github.com/mazharultnt",
  githubRepos: "https://github.com/mazharultnt?tab=repositories",
  linkedin: "https://linkedin.com/in/mazharultnt",

  /**
   * CONTACT FORM
   * The form posts to FormSubmit, a free service that forwards each message to your email.
   * IMPORTANT: the very first time anyone submits the form, FormSubmit sends an
   * activation email to the address above. Open it and click "Activate" once.
   * After that, every message lands in your inbox.
   */
  formEndpoint: "https://formsubmit.co/ajax/jihadseopro@gmail.com",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
