import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  ExternalLink,
  Menu,
  X,
  Download,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ------------------------------------------------------------------ */
/*  Owner-editable content — replace everything below with your own   */
/* ------------------------------------------------------------------ */

const PROFILE = {
  name: "Pratik Shrivastava",
  role: "Software Engineer",
  tagline:
    "I build full-stack and ML-powered applications — from retrieval systems and recommenders to the APIs and interfaces that ship them.",
  location: "New Delhi, India",
  email: "kpratik653@gmail.com",
  github: "https://github.com/pratikverse",
  linkedin: "https://linkedin.com/in/pratikshrivastava19",
  resumeUrl: "/Pratik-Shrivastava-Resume.pdf",
};

const ABOUT_FACTS = [
  { label: "Degree", value: "B.Tech in Computer Science" },
  { label: "School", value: "Manipal University Jaipur" },
  { label: "Graduated", value: "August 2026" },
  { label: "Availability", value: "Open to full-time SWE roles" },
];

const PROJECTS = [
  {
    title: "Drape",
    description:
      "AI-powered visual fashion search engine that finds visually similar catalog products from an uploaded photo — YOLOv8 for garment detection, DINOv2 for embeddings, and FAISS for similarity search. Generates NLP garment descriptions and retailer links directly from retrieval results, and runs real-time inference on a 20K-image catalog via AWS Lambda.",
    tags: ["FastAPI", "React", "YOLOv8", "DINOv2", "FAISS"],
    link: "https://drape-web.onrender.com/",
    accent: "from-blue-500/15 to-blue-500/0",
  },
  {
    title: "Harmoniq",
    description:
      "Hybrid music recommender blending autoencoder latent similarity, audio features, genre, and popularity into one ranked score, with a per-result panel explaining each signal's contribution. Ships recommendations, mood discovery, genre exploration, playlist building, and a 3D PCA visualization of the embedding space.",
    tags: ["FastAPI", "React", "Vite", "Spotify API"],
    link: "https://harmoniq-web.onrender.com/",
    accent: "from-emerald-500/15 to-emerald-500/0",
  },
  {
    title: "Booktures",
    description:
      "AI-powered book illustration pipeline that extracts text from PDFs via OCR, identifies characters with LLM-based NER and alias merging, and generates page-consistent illustrations by feeding a running visual profile into each prompt. Supports multiple LLM and image-generation backends (OpenAI, Gemini, Cloudflare Workers AI).",
    tags: ["OCR", "LLM NER", "Image Generation", "Supabase"],
    link: "https://booktures-web.onrender.com/",
    accent: "from-violet-500/15 to-violet-500/0",
  },
  {
    title: "Palmify",
    description:
      "Real-time hand gesture recognition system that detects hand landmarks from live webcam input to classify static poses and dynamic finger movements with low latency.",
    tags: ["MediaPipe", "TensorFlow Lite", "OpenCV"],
    link: "https://github.com/pratikverse/Palmify",
    accent: "from-amber-500/15 to-amber-500/0",
  },
  {
    title: "ScribeAPI",
    description:
      "Secure RESTful blogging API with JWT authentication, CRUD for posts, comments, and dynamic tagging on a scalable relational schema.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    link: "https://github.com/pratikverse/ScribeAPI",
    accent: "from-blue-500/15 to-blue-500/0",
  },
  {
    title: "LMS-using-PHP",
    description:
      "Full-stack library management system handling book catalog management, borrowing/return tracking, and role-based access for students, librarians, and admins.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    link: "https://github.com/pratikverse/LMS-using-PHP",
    accent: "from-emerald-500/15 to-emerald-500/0",
  },
];

const EXPERIENCE = [
  {
    role: "Machine Learning Intern",
    org: "Dodge AI",
    period: "Jun 2025 — Jul 2025",
    location: "Remote, KA",
    points: [
      "Built a purchase-intent classifier on 2.75M+ events (22 leakage-safe RFM features), reaching 0.156 PR-AUC — ~2x baseline — on a 0.2%-positive class.",
      "Shipped a hybrid recommender (content + ALS + cold-start) scoring ~24x the MAP@10 of a most-popular baseline on held-out users.",
      "Used 16-factor ALS embeddings instead of a dense item-similarity matrix (infeasible at 185K products), scaling coverage from 5K to the full catalog.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Siemens Technology & Services Pvt. Ltd.",
    period: "May 2024 — Aug 2024",
    location: "Remote, KA",
    points: [
      "Built RESTful API integration layer for a 3-tier IIoT water-monitoring dashboard with near real-time polling and incremental UI updates.",
      "Designed GIS map visualizations with colour-coded, per-sensor status markers for quick anomaly spotting.",
      "Handled missing/inconsistent sensor data gracefully in the parsing layer to keep visualizations from breaking.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Manipal University Jaipur",
    degree: "B.Tech in Computer Science",
    period: "August 2022 — August 2026",
    detail:
      "Coursework: Data Structures, OOPs, Software Engineering, Computer Networking, DBMS, Cloud Computing, AI/ML",
  },
];

const SKILLS = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "C++", "SQL"],
  },
  {
    group: "Software Development",
    items: ["OOPs", "Data Structures", "RESTful APIs", "JWT Auth"],
  },
  {
    group: "Frameworks",
    items: ["FastAPI", "Node.js", "Express.js", "React"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    group: "ML & Data",
    items: ["TensorFlow", "Scikit-learn", "Keras", "Pandas", "NumPy", "OpenCV", "Matplotlib"],
  },
  {
    group: "Tools & Platforms",
    items: ["Git", "GitHub", "Linux", "Docker"],
  },
];

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/*  Reveal-on-scroll hook (subtle motion)                              */
/* ------------------------------------------------------------------ */

function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("reveal-is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Section primitives                                                 */
/* ------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Components                                                         */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          {PROFILE.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <SocialLinks />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto max-w-5xl px-6 py-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 px-3 py-3">
              <SocialLinks />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <a
        href={PROFILE.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        <Github className="h-[18px] w-[18px]" />
      </a>
      <a
        href={PROFILE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        <Linkedin className="h-[18px] w-[18px]" />
      </a>
      <a
        href={`mailto:${PROFILE.email}`}
        aria-label="Email"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        <Mail className="h-[18px] w-[18px]" />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 40rem at 50% -10%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto w-full max-w-5xl px-6 pt-28 pb-20">
        <Reveal delay={0}>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Open to full-time Software Engineering roles
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            id="hero-heading"
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {PROFILE.name}
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-3 text-xl font-semibold text-primary sm:text-2xl">
            {PROFILE.role}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {PROFILE.tagline}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get in touch
            </a>
            <a
              href={PROFILE.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex items-center gap-5 text-sm text-muted-foreground">
            <SocialLinks />
            <span className="hidden h-4 w-px bg-border sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {PROFILE.location}
            </span>
          </div>
        </Reveal>

        <a
          href="#about"
          className="mt-16 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-28" aria-labelledby="about-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="About"
          title="A bit about me"
          description="I love turning hard problems into clean, usable software. I care about correctness, performance, and the small details that make tools feel good to use."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-3" delay={0}>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I recently graduated with a B.Tech in Computer Science from
                Manipal University Jaipur, with a focus on full-stack and
                ML-powered applications. My favorite work lives where retrieval
                systems and recommenders meet the APIs and interfaces that ship
                them — I'm just as happy tuning an embedding pipeline as I am
                refining a UI.
              </p>
              <p>
                Alongside coursework, I shipped side projects that let me
                explore new tools across the ML and web stack — from
                FAISS-backed visual search to hybrid recommenders. I write a
                lot of tests, read a lot of postmortems, and believe the best
                software is built
                openly.
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={100}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {ABOUT_FACTS.map((f) => (
                <div key={f.label} className="bg-card p-4">
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-border bg-card/40 py-24 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of side projects and coursework that taught me the most. Each link goes to the source."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${p.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28" aria-labelledby="exp-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Internship & work"
          description="Roles where I shipped real software, learned from great teammates, and grew as an engineer."
        />

        <ol className="mt-12 space-y-8">
          {EXPERIENCE.map((e, i) => (
            <Reveal as="li" key={`${e.org}-${e.role}`} delay={i * 60}>
              <div className="relative grid gap-6 rounded-2xl border border-border bg-card p-6 sm:grid-cols-[auto_1fr] sm:gap-8">
                <div className="sm:w-44 sm:shrink-0">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {e.period}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {e.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {e.role}
                  </h3>
                  <p className="text-sm font-medium text-primary">{e.org}</p>
                  <ul className="mt-3 space-y-2">
                    {e.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="border-y border-border bg-card/40 py-24 sm:py-28"
      aria-labelledby="edu-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Education"
          title="Where I've studied"
          description="Formal education and the foundation it gave me."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.school} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {e.school}
                </h3>
                <p className="text-sm font-medium text-primary">{e.degree}</p>
                <p className="mt-1 text-xs text-muted-foreground">{e.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {e.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack & toolkit"
          description="The tools I reach for most — though I enjoy picking up new ones when a problem calls for it."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {s.group}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(40rem 24rem at 50% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 65%)",
              }}
            />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Let's build something
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              I'm open to full-time software engineering roles and interesting
              collaborations. The fastest way to reach me is email — I usually
              reply within a day.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Mail className="h-4 w-4" />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. Built with care.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
