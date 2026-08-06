import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons.jsx";
import { profile } from "../data/portfolio.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — the mailto: link still opens if a mail client is configured
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-xl border border-border bg-card px-8 py-16 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="text-accent">guest@portfolio</span>:~$ cat 04-contact.md
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Let's build something</h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Open to software engineering roles and interesting collaborations. Reach out — I usually reply within a day.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            onClick={handleEmailClick}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            {copied ? <Check size={16} /> : <Mail size={16} />}
            {copied ? "Copied to clipboard" : profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
