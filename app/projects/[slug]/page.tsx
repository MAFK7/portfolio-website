import TransitionLink from "@/components/TransitionLink";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="animate-page-enter mx-auto max-w-5xl px-6 pb-24 pt-10">
        <TransitionLink
          href="/#projects"
          className="inline-flex items-center gap-1.5 font-mono text-[12px] tracking-widest text-primary hover:underline"
        >
          <span aria-hidden="true">←</span> BACK_TO_PROJECTS
        </TransitionLink>

        <div className="mt-8 border-l-2 border-primary pl-5">
          <p className="font-mono text-[11px] tracking-widest text-primary">
            01. PROJECT_MANIFEST
          </p>
          <h1 className="mt-2 text-3xl font-bold text-text sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
            {project.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-10">
            <div>
              <p className="font-mono text-[10px] text-text-faint">ROLE</p>
              <p className="mt-1 text-sm text-text">{project.role}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-text-faint">TIMELINE</p>
              <p className="mt-1 text-sm text-text">{project.timeline}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-text-faint">STATUS</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {project.status}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border px-2.5 py-1 font-mono text-[11px] text-text-muted"
            >
              · {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-md border border-border bg-bg-elevated">
          <div className="border-b border-border px-4 py-2 text-center font-mono text-[10px] text-text-faint">
            {project.terminalPath}
          </div>
          <div className="flex min-h-[220px] items-center justify-center p-10">
            <div className="rounded border border-primary/40 bg-black/40 px-8 py-6 font-mono text-[10px] text-primary/80">
              {project.name.toUpperCase()} — SYSTEM PREVIEW
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-primary">
              01. OVERVIEW
            </p>
            <div className="mt-1 h-px w-8 bg-primary" />
            <div className="mt-4 space-y-4">
              {project.overview.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed text-text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-border bg-bg-elevated p-5">
            <p className="font-mono text-[11px] tracking-widest text-primary">
              02. CORE_CHALLENGES
            </p>
            <div className="mt-4 space-y-4">
              {project.challenges.map((c) => (
                <div key={c.id}>
                  <p className="font-mono text-[11px] text-primary">
                    // {c.id}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-text-muted">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="font-mono text-[11px] tracking-widest text-primary">
            03. SYSTEM_OUTPUT
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.output.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border border-border bg-bg-elevated p-5"
              >
                <p className="font-mono text-[10px] tracking-widest text-text-faint">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-primary">
                  {stat.value}
                </p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border">
                  <div className="h-full w-2/3 bg-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-l-2 border-primary bg-bg-elevated/60 p-5">
          <p className="font-mono text-[10px] text-text-faint">
            /* ARCHITECTURE_LOG_0x44 */
          </p>
          <p className="mt-2 text-sm italic leading-relaxed text-text-muted">
            &ldquo;{project.log}&rdquo;
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
