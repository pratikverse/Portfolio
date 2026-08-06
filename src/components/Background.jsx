import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Background() {
  return (
    <section id="background" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01" title="Background" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-5 flex items-center gap-2 text-accent">
            <GraduationCap size={18} />
            <h3 className="font-medium text-foreground">Education</h3>
          </div>
          <p className="font-medium">{education.degree}</p>
          <p className="text-sm text-muted-foreground">{education.school}</p>
          <p className="num mt-1 text-xs text-muted-foreground">{education.period}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{education.detail}</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-5 flex items-center gap-2 text-accent">
            <Briefcase size={18} />
            <h3 className="font-medium text-foreground">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.role + job.org}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="font-medium">{job.role}</p>
                  <span className="num text-xs text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{job.org}</p>
                <ul className="mt-2 space-y-1.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
