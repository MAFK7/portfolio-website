import {
  SiSpringboot,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiGit,
} from "react-icons/si";
import { Coffee } from "lucide-react";

const STACK = [
  { name: "Java", category: "Backend", Icon: Coffee },
  { name: "Spring Boot", category: "Backend", Icon: SiSpringboot },
  { name: "Python", category: "Backend", Icon: SiPython },
  { name: "FastAPI", category: "Backend", Icon: SiFastapi },
  { name: "PostgreSQL", category: "Database", Icon: SiPostgresql },
  { name: "SQL", category: "Database", Icon: SiMysql },
  { name: "React.js", category: "Tools", Icon: SiReact },
  { name: "Git", category: "Tools", Icon: SiGit },
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...STACK, ...STACK]; // duplicate for seamless loop
  return (
    <div
      className={`flex w-max gap-4 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {items.map((item, i) => (
        <div
          key={`${item.name}-${i}`}
          className="flex shrink-0 items-center gap-3 rounded-md border border-border bg-bg-elevated px-5 py-4 transition-colors hover:border-primary/40"
        >
          <item.Icon className="h-5 w-5 text-primary" aria-hidden="true" />
          <div className="flex flex-col leading-tight">
            <span className="font-mono text-sm text-text">{item.name}</span>
            <span className="font-mono text-[10px] text-text-faint">
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[11px] tracking-widest text-primary">
          02. TECH_STACK
        </p>
      </div>

      <div className="mt-8 space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
