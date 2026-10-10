"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/data/posts";
import { PostCard } from "./Cards";

export default function BlogExplorer({ posts, categories }: { posts: Post[]; categories: string[] }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const inCat = category === "All" || p.category === category;
      const inText =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return inCat && inText;
    });
  }, [posts, category, query]);

  const showFeatured = category === "All" && !query.trim() && visible.length > 0;
  const [first, ...rest] = visible;

  return (
    <div>
      <div className="blog-tools">
        <div className="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.500-3.500" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, topics or tags"
            aria-label="Search articles"
          />
        </div>
        <div className="filter-bar" role="tablist" aria-label="Filter articles by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              className={`filter-btn ${category === c ? "active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="empty">No articles match your search. Try a different word or category.</p>
      ) : (
        <>
          {showFeatured && first && (
            <div className="featured-post">
              <PostCard post={first} featured />
            </div>
          )}
          <div className="post-grid">
            {(showFeatured ? rest : visible).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
