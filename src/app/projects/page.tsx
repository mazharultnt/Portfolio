import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { PageHero } from "@/components/Cards";
import { ArrowRight, Github } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Landing pages, multi-page websites and small web apps built by Mazharul Islam with HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React and Next.js.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={<>Things I have <span className="gradient-text">built</span></>}
        text={`${projects.length} projects so far, mostly built to practice and to learn. Filter by type, and open the source code on GitHub.`}
      >
        <div className="hero-cta">
          <a href={site.githubRepos} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <Github /> All repositories
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <ProjectsExplorer projects={projects} />

          <div className="honest-note">
            <strong>A note on these projects</strong>
            <p>
              Most of these are self-practice projects, many rebuilt from Figma designs. They are not paid client
              sites. I build them to learn, and I add live demo links as I deploy each one.
            </p>
            <Link href="/contact" className="btn btn-primary btn-sm">
              Discuss a project with me <ArrowRight className="arrow" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
