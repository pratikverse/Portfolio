import { skills } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="02" title="Skills" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border px-2.5 py-1 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
