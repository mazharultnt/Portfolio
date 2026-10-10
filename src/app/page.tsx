import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { achievements } from "@/data/experience";
import Typing from "@/components/Typing";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import TechShowcase from "@/components/TechShowcase";
import { PostCard, ProjectCard, SectionHead } from "@/components/Cards";
import { ArrowRight, Code, Github, Layers, Sparkle, Zap } from "@/components/icons";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const latest = posts.slice(0, 3);

  return (
    <>
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <span className="blob blob-a" />
          <span className="blob blob-b" />
          <span className="blob blob-c" />
          <span className="grid-fade" />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="status-pill">
              <span className="pulse" /> Open to remote opportunities
            </span>
            <h1>
              Hi, I&apos;m <span className="gradient-text">{site.firstName}</span>.
              <br />
              I build <span className="gradient-text">fast, beautiful</span> websites.
            </h1>
            <p className="hero-type">
              <Typing
                words={[
                  "Front-End Developer",
                  "React and Next.js builder",
                  "TypeScript learner",
                  "Pixel-accurate UI maker",
                ]}
              />
            </p>
            <p className="hero-text">
              I turn designs into clean, responsive and SEO-friendly interfaces. I am based in Gazipur, Bangladesh,
              practice by building something new every week, and I am looking for a junior front-end role where I can
              contribute and keep growing.
            </p>

            <div className="hero-cta">
              <Link href="/projects" className="btn btn-primary">
                View my projects <ArrowRight className="arrow" />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Let&apos;s talk
              </Link>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-icon" aria-label="GitHub profile">
                <Github />
              </a>
            </div>

            <ul className="hero-points">
              <li><Code /> React, Next.js, TypeScript</li>
              <li><Layers /> Responsive and accessible</li>
              <li><Zap /> New project every week</li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="hero-ring" aria-hidden="true" />
            <ImageSlot
              file="hero-developer-profile.jpg"
              className="hero-img"
              priority
              label="hero-developer-profile.jpg"
            />
            <div className="float-badge fb-1"><Sparkle /> Clean UI</div>
            <div className="float-badge fb-2"><Code /> TypeScript</div>
            <div className="float-badge fb-3"><Zap /> Fast sites</div>
          </div>
        </div>
      </section>

      {/* ------------------------------ STATS ------------------------------ */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {[
            { n: projects.length, s: "+", l: "Projects built" },
            { n: 3, s: "", l: "Styling approaches" },
            { n: posts.length, s: "", l: "Articles written" },
            { n: 10, s: "", l: "Week build-a-site challenge" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 80} className="stat">
              <strong>
                <Counter to={s.n} suffix={s.s} />
              </strong>
              <span>{s.l}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------ ABOUT TEASER ------------------------------ */}
      <section className="section">
        <div className="container split">
          <Reveal from="left">
            <ImageSlot file="about-me-illustration.jpg" className="about-img" label="about-me-illustration.jpg" />
          </Reveal>
          <Reveal from="right" className="split-copy">
            <span className="eyebrow">About me</span>
            <h2>
              A <span className="gradient-text">consistent builder</span> who loves clean interfaces
            </h2>
            <p>
              I started with plain HTML and CSS, then moved on to JavaScript, React, Next.js and TypeScript. I learn
              by building, so I rebuild real designs from Figma every week using custom CSS, Bootstrap and Tailwind.
            </p>
            <p>
              I have no full-time job yet, and I am honest about that. What I bring is steady practice, a growing
              portfolio, real client communication experience and a strong wish to learn from an experienced team.
            </p>
            <Link href="/about" className="btn btn-ghost">
              Read my story <ArrowRight className="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ TECH ------------------------------ */}
      <section className="section tint">
        <div className="container">
          <SectionHead
            eyebrow="Core tech stack"
            title={<>Tools I use to <span className="gradient-text">build things</span></>}
            text="The technologies I work with most often, from the foundations to modern frameworks."
          />
          <TechShowcase />
          <Reveal className="center-cta">
            <Link href="/skills" className="btn btn-ghost">
              See all skills <ArrowRight className="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ PROJECTS ------------------------------ */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Selected work"
            title={<>Projects I am <span className="gradient-text">proud of</span></>}
            text="A few of the pages and apps I have built while learning. Each one taught me something new."
          />
          <div className="project-grid three">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="center-cta">
            <Link href="/projects" className="btn btn-primary">
              Browse all {projects.length} projects <ArrowRight className="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ ACHIEVEMENTS ------------------------------ */}
      <section className="section soft">
        <div className="container">
          <SectionHead
            eyebrow="Highlights"
            title={<>Progress you can <span className="gradient-text">actually see</span></>}
            text="Real milestones from my learning and client work so far."
          />
          <div className="achievement-grid">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 90} className={`achievement-card accent-${a.accent}`}>
                <span className="achievement-dot" />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ BLOG ------------------------------ */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="From the blog"
            title={<>What I am <span className="gradient-text">learning and sharing</span></>}
            text="Practical notes on front-end development, written in plain words."
          />
          <div className="post-grid three">
            {latest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="center-cta">
            <Link href="/blog" className="btn btn-ghost">
              Read all articles <ArrowRight className="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ CTA ------------------------------ */}
      <section className="section cta-section">
        <div className="container">
          <Reveal from="zoom" className="cta-banner">
            <ImageSlot file="cta-banner.jpg" className="cta-bg" label="cta-banner.jpg" />
            <div className="cta-content">
              <h2>Looking for a motivated junior front-end developer?</h2>
              <p>
                I am available for remote work and eager to join a team where I can learn fast and ship clean,
                responsive interfaces.
              </p>
              <div className="hero-cta center">
                <Link href="/contact" className="btn btn-primary">
                  Get in touch <ArrowRight className="arrow" />
                </Link>
                <a href={`mailto:${site.email}`} className="btn btn-ghost">
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
