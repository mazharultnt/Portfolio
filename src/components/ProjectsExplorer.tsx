"use client";

import { useMemo, useState } from "react";
import { projectCategories, type Project } from "@/data/projects";
import { ProjectCard } from "./Cards";

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");

  const visible = useMemo(
    () => (category === "All" ? projects : projects.filter((p) => p.category === category)),
    [category, projects],
  );
  const featured = visible.filter((p) => p.featured);
  const others = visible.filter((p) => !p.featured);

  return (
    <div>
      <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
        {projectCategories.map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              className={`filter-btn ${category === c ? "active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c} <span className="count">{count}</span>
            </button>
          );
        })}
      </div>

      {featured.length > 0 && (
        <>
          <h3 className="group-title">Featured projects</h3>
          <div className="project-grid">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </>
      )}

      {others.length > 0 && (
        <>
          <h3 className="group-title">More practice work</h3>
          <div className="project-grid compact">
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </>
      )}

      {visible.length === 0 && <p className="empty">No projects in this category yet.</p>}
    </div>
  );
}
