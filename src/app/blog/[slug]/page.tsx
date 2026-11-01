import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatDate,
  getAdjacentPosts,
  getPost,
  getRelatedPosts,
  posts,
  readingTime,
} from "@/data/posts";
import { postImageName } from "@/data/images";
import { site } from "@/data/site";
import ImageSlot from "@/components/ImageSlot";
import PostBody, { getHeadings } from "@/components/PostBody";
import { PostCard, accentChip } from "@/components/Cards";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "@/components/icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [site.name],
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const headings = getHeadings(post.blocks);
  const { newer, older } = getAdjacentPosts(post.slug);
  const related = getRelatedPosts(post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name, url: site.github },
    keywords: post.tags.join(", "),
  };

  return (
    <article className="post-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="post-hero">
        <div className="hero-bg" aria-hidden="true">
          <span className="blob blob-a" />
          <span className="blob blob-b" />
          <span className="grid-fade" />
        </div>
        <div className="container narrow page-enter">
          <Link href="/blog" className="back-link">
            <ArrowLeft /> All articles
          </Link>
          <div className="post-meta">
            <span className={`chip ${accentChip(post.accent)}`}>{post.category}</span>
            <span className="meta-item"><Calendar /> {formatDate(post.date)}</span>
            <span className="meta-item"><Clock /> {readingTime(post)} min read</span>
          </div>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
        </div>
      </header>

      <div className="container narrow">
        <ImageSlot file={postImageName(post.slug)} className="post-cover" priority label={post.title} />
      </div>

      <div className="container post-layout">
        <aside className="toc" aria-label="Table of contents">
          <strong>On this page</strong>
          <ul>
            {headings.map((h) => (
              <li key={h.id}>
                <a href={`#${h.id}`}>{h.text}</a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="post-main">
          <PostBody blocks={post.blocks} />

          <div className="tag-row">
            {post.tags.map((t) => (
              <span key={t} className="tech-badge">#{t}</span>
            ))}
          </div>

          <div className="author-box">
            <span className="brand-mark">M</span>
            <div>
              <strong>Written by {site.name}</strong>
              <p>
                Front-end developer from Bangladesh, learning in public and open to remote work.{" "}
                <Link href="/contact">Say hello</Link>.
              </p>
            </div>
          </div>

          <nav className="post-nav" aria-label="More articles">
            {newer ? (
              <Link href={`/blog/${newer.slug}`} className="post-nav-link">
                <small><ArrowLeft /> Newer</small>
                <span>{newer.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {older ? (
              <Link href={`/blog/${older.slug}`} className="post-nav-link right">
                <small>Older <ArrowRight /></small>
                <span>{older.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section soft">
          <div className="container">
            <h2 className="related-title">Keep reading</h2>
            <div className="post-grid three">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
