import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "./icons.jsx";
import { profile } from "../data/portfolio.js";

const LINKS = [
  { label: "Background", href: "#background" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "bg-background/85 backdrop-blur border-border" : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-accent">
          PS<span className="text-foreground">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
