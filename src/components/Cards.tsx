import Link from "next/link";
import type { Project } from "@/data/projects";
import { formatDate, readingTime, type Post } from "@/data/posts";
import { postImageName } from "@/data/images";
import { site } from "@/data/site";
import ImageSlot from "./ImageSlot";
import { ArrowUpRight, Calendar, Clock, Github } from "./icons";

export function SectionHead({
  eyebrow,
  title,
  text,
  left = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  left?: boolean;
}) {
  return (
    <div className={`section-head ${left ? "left" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="grid-fade" />
      </div>
      <div className="container page-enter">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
        {children}
      </div>
    </section>
  );
}

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article className={`post-card accent-${post.accent} ${featured ? "featured" : ""}`}>
      <Link href={`/blog/${post.slug}`} className="post-card-link" aria-label={post.title}>
        <ImageSlot file={postImageName(post.slug)} className="post-card-img" label={post.category} />
        <div className="post-card-body">
          <div className="post-meta">
            <span className={`chip ${accentChip(post.accent)}`}>{post.category}</span>
            <span className="meta-item"><Calendar /> {formatDate(post.date)}</span>
            <span className="meta-item"><Clock /> {readingTime(post)} min read</span>
          </div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <span className="read-more">
            Read article <ArrowUpRight />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const repo = project.repo ?? site.githubRepos;
  return (
    <article className={`project-card accent-${project.accent} ${project.thumb ? "has-thumb" : "no-thumb"}`}>
      {project.thumb && <ImageSlot file={project.thumb} className="project-thumb" label={project.title} />}
      <div className="project-body">
        <div className="project-top">
          <span className={`chip ${accentChip(project.accent)}`}>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        {project.thumb && (
          <ul className="check-list">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        <div className="badge-row">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        <div className="project-links">
          {project.live ? (
            <a className="btn btn-primary btn-sm" href={project.live} target="_blank" rel="noopener noreferrer">
              Live demo <ArrowUpRight />
            </a>
          ) : (
            <span className="soft-note">Live demo coming soon</span>
          )}
          <a className="btn btn-ghost btn-sm" href={repo} target="_blank" rel="noopener noreferrer">
            <Github /> {project.repo ? "Source code" : "GitHub"}
          </a>
        </div>
      </div>
    </article>
  );
}

export function accentChip(accent: string) {
  switch (accent) {
    case "teal":
      return "teal";
    case "violet":
      return "violet";
    case "green":
      return "green";
    case "amber":
      return "amber";
    case "rose":
      return "rose";
    default:
      return "";
  }
}
