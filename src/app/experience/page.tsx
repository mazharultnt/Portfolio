import type { Metadata } from "next";
import Link from "next/link";
import { achievements, certificates, timeline } from "@/data/experience";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import { PageHero, SectionHead } from "@/components/Cards";
import { ArrowRight, Award } from "@/components/icons";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Learning path, client work, achievements and certifications of Mazharul Islam, a junior front-end developer open to remote work.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience and achievements"
        title={<>My <span className="gradient-text">journey so far</span></>}
        text="I am early in my career, so this page is honest about it: learning, practice, a few real client moments and the certificates I am working toward."
      />

      {/* Timeline */}
      <section className="section">
        <div className="container narrow">
          <SectionHead eyebrow="Timeline" title={<>Learning and <span className="gradient-text">client work</span></>} />
          <div className="timeline">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 90} className={`timeline-item accent-${t.accent}`}>
                <span className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-period">{t.period}</span>
                  <h3>{t.title}</h3>
                  <p className="timeline-place">{t.place}</p>
                  <ul className="check-list">
                    {t.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section soft">
        <div className="container">
          <SectionHead eyebrow="Achievements" title={<>Milestones I <span className="gradient-text">am proud of</span></>} />
          <div className="split">
            <Reveal from="left">
              <ImageSlot file="achievement-client-work.jpg" className="achievement-img" label="achievement-client-work.jpg" />
            </Reveal>
            <div className="achievement-list">
              {achievements.map((a, i) => (
                <Reveal key={a.title} delay={i * 90} className={`achievement-card row accent-${a.accent}`}>
                  <span className="achievement-icon"><Award /></span>
                  <div>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Certifications"
            title={<>Learning that is <span className="gradient-text">on record</span></>}
            text="Only real credentials appear here. The Full Stack course is still in progress."
          />
          <div className="cert-grid">
            {certificates.map((c, i) => (
              <Reveal key={c.title} delay={i * 100} className="cert-card">
                <ImageSlot file={c.image} className="cert-img" fit="contain" label={c.image} />
                <div className="cert-body">
                  <span className={`chip ${c.statusTone}`}>{c.status}</span>
                  <h3>{c.title}</h3>
                  <p>{c.issuer}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="center-cta">
            <Link href="/contact" className="btn btn-primary">
              Talk to me about a role <ArrowRight className="arrow" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
