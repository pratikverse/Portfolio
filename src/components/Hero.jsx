import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "oklch(0.96 0.01 95 / 0.08)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <div className="rise mx-auto overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
          <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-muted-foreground">guest@portfolio: ~</span>
          </div>

          <div className="px-6 py-12 md:px-12 md:py-16">
            <p className="text-sm text-accent">
              <span className="text-muted-foreground">guest@portfolio</span>:~$ whoami
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-glow md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground md:text-xl">
              &gt; {profile.title}
              <span className="cursor-blink h-[1.1em] align-middle" />
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                View projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={16} />
                Get in touch
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Download size={16} />
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
