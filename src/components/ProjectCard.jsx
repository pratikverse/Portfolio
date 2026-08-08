import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons.jsx";

export default function ProjectCard({ project }) {
  return (
    <div className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="font-medium text-foreground">{project.name}</h3>
        <div className="flex shrink-0 items-center gap-1">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-accent"
            aria-label={`${project.name} on GitHub`}
          >
            <GithubIcon size={16} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-accent"
              aria-label={`${project.name} live site`}
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.building && (
            <span className="num rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">
              Currently Building
            </span>
          )}
        </div>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="num rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
