import TransitionLink from "./TransitionLink";
import { projects } from "@/lib/projects";

export default function ProjectsPreview() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-[11px] tracking-widest text-primary">
        01. SELECTED_PROJECTS
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <TransitionLink
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group reveal flex flex-col rounded-md border border-border bg-bg-elevated transition-colors hover:border-primary/50"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
              <span className="h-2 w-2 rounded-full bg-primary/60" />
              <span className="ml-2 truncate font-mono text-[10px] text-text-faint">
                {project.terminalPath}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
              <h3 className="font-semibold text-text group-hover:text-primary">
                {project.name}
              </h3>
              <p className="text-[13px] leading-relaxed text-text-muted">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border p-4 pt-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] text-text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </TransitionLink>
        ))}
      </div>
    </section>
  );
}
