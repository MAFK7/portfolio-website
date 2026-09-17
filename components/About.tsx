"use client";

import Image from "next/image";
import TypedText from "./TypedText";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-[11px] tracking-widest text-primary">
        03. SYSTEM_INFO
      </p>

      <div className="mt-8 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="reveal space-y-4">
          <p className="text-lg leading-relaxed text-text">
            I&apos;m an undergraduate Informatics Engineering student focused on software engineering and web development — bridging modern web applications with clean architecture and AI-driven solutions.
          </p>
          <p className="text-sm leading-relaxed text-text-muted">
            Currently building hands-on projects across the full web development lifecycle, while exploring how AI integration enhances user experience and system efficiency. I treat clean code, scalable structure, and clear documentation as core foundations of every system I build.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="rounded-sm border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary">
              <TypedText text="root@dev:~$ whoami" speed={35} startDelay={300} showCursorAfter={false} />
            </span>
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-[11px] text-text-muted">
              AI & Software Engineering Enthusiast
            </span>
          </div>
        </div>

        <div className="reveal group overflow-hidden rounded-md border border-border bg-bg-elevated transition-colors hover:border-primary/40">
          <div className="flex items-center border-b border-border px-3 py-2 font-mono text-[10px] text-text-faint">
            <span>~/assets/avatar.png</span>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-bg-elevated via-bg-elevated to-black/60">
            <Image
              src="/avatar.png"
              alt="M. Asad Farhan Khomeini"
              fill
              priority
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-elevated to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
