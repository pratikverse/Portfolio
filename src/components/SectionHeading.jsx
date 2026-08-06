export default function SectionHeading({ index, title }) {
  return (
    <div className="mb-10">
      <p className="text-sm text-muted-foreground">
        <span className="text-accent">guest@portfolio</span>:~$ cat {index}-{title.toLowerCase()}.md
      </p>
      <div className="mt-3 flex items-baseline gap-3">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <span className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}
