import type { Metadata } from "next";
import Link from "next/link";
import { learningNow, practices, skillGroups } from "@/data/skills";
import Reveal from "@/components/Reveal";
import TechShowcase from "@/components/TechShowcase";
import { PageHero, SectionHead } from "@/components/Cards";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Core tech stack of Mazharul Islam: HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap, Node.js and Git.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title={<>My <span className="gradient-text">core tech stack</span></>}
        text="What I work with, and how comfortable I honestly am with each tool. The dots show my own level from 1 to 5."
      />

      <section className="section">
        <div className="container">
          <TechShowcase showLevels />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHead
            eyebrow="By category"
            title={<>Skills, <span className="gradient-text">grouped</span></>}
          />
          <div className="group-grid">
            {skillGroups.map((g, i) => (
              <Reveal key={g.id} delay={i * 100} className={`group-card accent-${g.accent}`}>
                <h3>{g.title}</h3>
                <p>{g.blurb}</p>
                <ul>
                  {g.skills.map((s) => (
                    <li key={s.name}>
                      <span>{s.name}</span>
                      <span className="level small" aria-label={`Level ${s.level} of 5`}>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <i key={n} className={n <= s.level ? "on" : ""} />
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Beyond the tools"
            title={<>Habits that make <span className="gradient-text">the work better</span></>}
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

      <section className="section tint">
        <div className="container narrow">
          <SectionHead
            eyebrow="Currently learning"
            title={<>Next on <span className="gradient-text">my list</span></>}
            text="Being open about what I am still learning is part of how I grow quickly."
          />
          <Reveal>
            <ul className="check-list big centered">
              {learningNow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="center-cta">
            <Link href="/projects" className="btn btn-primary">
              See these skills in action <ArrowRight className="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
