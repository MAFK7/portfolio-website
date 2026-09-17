export default function Education() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-[11px] tracking-widest text-primary">
        04. EDUCATION
      </p>

      <div className="reveal mt-8 rounded-md border border-border bg-bg-elevated p-6">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-primary" />
              <h3 className="text-lg font-semibold text-text">
                B.S. Informatics Engineering
              </h3>
            </div>
            <p className="mt-1 text-sm text-text-muted">
              UIN Sunan Gunung Djati Bandung
            </p>
          </div>
          <span className="font-mono text-xs text-primary">2024 — Present</span>
        </div>

        <div className="mt-6 border-t border-border pt-4">
          <p className="font-mono text-[11px] text-text-faint">
            // CORE_COURSEWORK
          </p>
          <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-1.5 text-sm text-text-muted sm:grid-cols-2">
            <p>▹ Algorithm Strategy &amp; Dynamic Programming</p>
            <p>▹ Database Management Systems</p>
            <p>▹ Data Structures &amp; Algorithms</p>
            <p>▹ Software Requirements Engineering</p>
          </div>
        </div>
      </div>
    </section>
  );
}
