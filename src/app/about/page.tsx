import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { learningNow, practices } from "@/data/skills";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import Counter from "@/components/Counter";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHead } from "@/components/Cards";
import { ArrowRight, Book, Globe, MapPin } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Mazharul Islam: a front-end developer from Gazipur, Bangladesh, learning in public and building a new site every week.",
};

const values = [
  {
    title: "Honest and direct",
    text: "I say clearly what I know and what I am still learning. No inflated claims, just real progress.",
  },
  {
    title: "Detail-oriented",
    text: "Spacing, alignment and states matter to me, because small details are what make an interface feel professional.",
  },
  {
    title: "Fast learner",
    text: "I pick up new tools by building real projects with them, and I turn mistakes into notes I can reuse.",
  },
  {
    title: "Team-minded",
    text: "I communicate clearly, ask good questions and enjoy working with others, including on live client calls.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About me"
        title={<>The person behind <span className="gradient-text">the code</span></>}
        text="A short, honest story about how I got into web development and where I am heading."
      />

      {/* Intro */}
      <section className="section">
        <div className="container split">
          <Reveal from="left">
            <ImageSlot file="about-me-illustration.jpg" className="about-img" label="about-me-illustration.jpg" />
          </Reveal>
          <Reveal from="right" className="split-copy">
            <span className="eyebrow">My story</span>
            <h2>Hello, I&apos;m {site.name}</h2>
            <p>
              I am a front-end developer from Gazipur, Bangladesh. I fell in love with the web because it lets you
              turn an idea into something people can actually open and use, from anywhere in the world.
            </p>
            <p>
              I began with HTML and CSS, added JavaScript, and then moved to React, Next.js and TypeScript. I also
              enjoy Tailwind CSS and Bootstrap, and I like comparing them by building the same layout in each.
            </p>
            <p>
              Alongside my studies, I learned Google Business Profile verification and ranking, and I worked with
              real clients from the USA. Those calls taught me how to listen, explain clearly and stay calm under
              pressure, which are skills that also matter in a development team.
            </p>
            <ul className="info-list">
              <li><MapPin /> {site.location}</li>
              <li><Globe /> Available for remote work, {site.timezone}</li>
              <li><Book /> Currently studying backend development</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {[
            { n: projects.length, s: "+", l: "Projects built" },
            { n: posts.length, s: "", l: "Articles written" },
            { n: 8, s: "", l: "Core technologies" },
            { n: 3, s: "", l: "Months on a client project" },
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

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="How I work"
            title={<>What you can <span className="gradient-text">expect from me</span></>}
            text="The habits and values I bring to every page I build and every team I join."
          />
          <div className="value-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="value-card">
                <span className="value-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="section soft">
        <div className="container">
          <SectionHead
            eyebrow="Principles"
            title={<>How I approach <span className="gradient-text">every build</span></>}
          />
          <div className="practice-grid">
            {practices.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90} className={`practice-card accent-${p.accent}`}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learning now */}
      <section className="section">
        <div className="container split reverse">
          <Reveal from="left" className="split-copy">
            <span className="eyebrow">Learning now</span>
            <h2>
              Growing into a <span className="gradient-text">full-stack</span> developer
            </h2>
            <p>
              Front-end is my strength today. My next goal is to understand how the back end works, so I can build
              complete products and collaborate better with back-end teammates.
            </p>
            <ul className="check-list big">
              {learningNow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary">
              Work with me <ArrowRight className="arrow" />
            </Link>
          </Reveal>
          <Reveal from="right">
            <div className="roadmap">
              {["HTML and CSS", "JavaScript", "React and Next.js", "TypeScript", "Backend (in progress)"].map(
                (step, i, arr) => (
                  <div key={step} className={`road-step ${i === arr.length - 1 ? "current" : "done"}`}>
                    <span className="road-dot" />
                    <div>
                      <strong>{step}</strong>
                      <small>{i === arr.length - 1 ? "Studying now" : "Completed basics"}</small>
                    </div>
                  </div>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
