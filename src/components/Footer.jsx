import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
