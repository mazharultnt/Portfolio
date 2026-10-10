import type { Post } from "./types";
import { figmaToLandingPage } from "./figma-to-landing-page";
import { flexboxVsGrid } from "./flexbox-vs-grid";
import { javascriptDomTodo } from "./javascript-dom-todo";
import { reactInPlainWords } from "./react-in-plain-words";
import { tailwindBootstrapCustom } from "./tailwind-bootstrap-custom";
import { gitMistakes } from "./git-mistakes";
import { responsiveChecklist } from "./responsive-checklist";
import { seoFriendlyHtml } from "./seo-friendly-html";

export type { Post, Block, Accent } from "./types";

/** Newest first */
export const posts: Post[] = [
  figmaToLandingPage,
  flexboxVsGrid,
  javascriptDomTodo,
  reactInPlainWords,
  tailwindBootstrapCustom,
  gitMistakes,
  responsiveChecklist,
  seoFriendlyHtml,
].sort((a, b) => b.date.localeCompare(a.date));

export const postCategories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string) {
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    newer: index > 0 ? posts[index - 1] : undefined,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  return posts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score:
        (p.category === current.category ? 2 : 0) +
        p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date))
    .slice(0, limit)
    .map((x) => x.post);
}

export function readingTime(post: Post): number {
  const words = post.blocks
    .map((b) => {
      switch (b.type) {
        case "ul":
        case "ol":
          return b.items.join(" ");
        case "code":
          return "";
        case "table":
          return [...b.head, ...b.rows.flat()].join(" ");
        case "callout":
          return b.title + " " + b.text;
        default:
          return b.text;
      }
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
