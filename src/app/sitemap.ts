import type { MetadataRoute } from "next";
import { navLinks, site } from "@/data/site";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = navLinks.map((l) => ({
    url: `${site.url}${l.href === "/" ? "" : l.href}`,
    lastModified: new Date(),
  }));
  const articles = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));
  return [...pages, ...articles];
}
