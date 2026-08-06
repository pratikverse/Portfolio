import { projects } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="03" title="Projects" />

      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {other.length > 0 && (
        <>
          <p className="mt-14 mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Other projects
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {other.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
