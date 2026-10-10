import { skillGroups } from "@/data/skills";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";

/** Tool name to banner image file in public/images */
const techImages: Record<string, { file: string; accent: string }> = {
  "HTML5": { file: "tech-html-banner.png", accent: "amber" },
  "CSS3": { file: "tech-css-banner.png", accent: "blue" },
  "JavaScript (ES6+)": { file: "tech-javascript-banner.png", accent: "amber" },
  "TypeScript": { file: "tech-typescript-banner.png", accent: "blue" },
  "React.js": { file: "tech-react-banner.png", accent: "teal" },
  "Next.js": { file: "tech-nextjs-banner.png", accent: "violet" },
  "Node.js": { file: "tech-nodejs-banner.png", accent: "green" },
  "Tailwind CSS": { file: "tech-tailwind-banner.png", accent: "teal" },
  "Bootstrap 5": { file: "tech-bootstrap-banner.png", accent: "violet" },
  "Git & GitHub": { file: "tech-git-banner.png", accent: "rose" },
};

export default function TechShowcase({ showLevels = false }: { showLevels?: boolean }) {
  const all = skillGroups.flatMap((g) => g.skills).filter((s) => techImages[s.name]);

  return (
    <div className="tech-grid">
      {all.map((skill, i) => {
        const t = techImages[skill.name];
        return (
          <Reveal key={skill.name} delay={(i % 5) * 70} className={`tech-card glow-${t.accent}`}>
            <ImageSlot file={t.file} className="tech-img" label={skill.name} />
            <div className="tech-info">
              <h3>{skill.name}</h3>
              <p>{skill.note}</p>
              {showLevels && (
                <div className="level" aria-label={`Comfort level ${skill.level} out of 5`}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className={n <= skill.level ? "on" : ""} />
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
