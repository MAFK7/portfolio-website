const AREAS = [
  {
    title: "Backend Development",
    description:
      "Building REST APIs with clear layering — controller, service, repository — using Java/Spring Boot and Python/FastAPI.",
    tags: ["Java", "Spring Boot", "FastAPI"],
  },
  {
    title: "Database Design",
    description:
      "Designing normalized schemas, drawing ERDs, and reverse-engineering existing databases into clean, documented models.",
    tags: ["PostgreSQL", "ERD", "SQL"],
  },
];

export default function Specialization() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-[11px] tracking-widest text-primary">
        06. CORE_SPECIALIZATION
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {AREAS.map((area, i) => (
          <div
            key={area.title}
            className="reveal rounded-md border border-border bg-bg-elevated p-6"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-primary" />
              <h3 className="font-semibold text-text">{area.title}</h3>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-text-muted">
              {area.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {area.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
