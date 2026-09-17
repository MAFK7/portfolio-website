const EXPERIENCE = [
  {
    role: "Independent Intern — Bagian Postel",
    org: "Diskominfo Kabupaten Rejang Lebong",
    period: "2026",
    points: [
      "Placed in the Pos & Telekomunikasi division following an in-person application process.",
      "Supporting technical and administrative tasks during the semester break.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-[11px] tracking-widest text-primary">
        05. EXPERIENCE
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {EXPERIENCE.map((item, i) => (
          <div
            key={item.role}
            className="reveal rounded-md border border-border bg-bg-elevated p-5"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-text">{item.role}</h3>
              <span className="shrink-0 font-mono text-[11px] text-primary">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-[13px] text-text-muted">{item.org}</p>
            <ul className="mt-4 space-y-1.5">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-[13px] leading-relaxed text-text-muted"
                >
                  <span className="text-primary">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
