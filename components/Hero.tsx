"use client";

import TypedText from "./TypedText";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-16 sm:pt-24 md:grid-cols-[1fr_auto_1.2fr]"
    >
      <div className="reveal space-y-4">
        <h1 className="font-mono text-3xl font-bold tracking-tight text-text">
          M. Asad Farhan Khomeini<span className="text-primary">.</span>
        </h1>
        <div className="h-px w-14 bg-primary" />
        <p className="font-mono text-[13px] leading-relaxed text-text-muted">
          Instagram · LinkedIn · GitHub
        </p>
        <a
          href="/#contact"
          className="inline-block rounded-sm border border-primary px-5 py-2 font-mono text-[13px] text-primary transition-colors hover:bg-primary hover:text-black"
        >
          Contact Me
        </a>
      </div>

      <div className="reveal mx-auto h-100 w-100 overflow-hidden "
        style={{ animationDelay: "80ms" }}
      >
        <img
          src="/propil.png"
          alt="Foto profil"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="reveal space-y-4" style={{ animationDelay: "160ms" }}>
        <p className="font-mono text-[11px] tracking-widest text-primary">
          INTRODUCTION
        </p>
        <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl">
          Informatics Engineering Student,
          <br />
          Full-Stack Developer
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-text-muted font-mono min-h-[1.5em]">
          <TypedText
            text="> Focused on software engineering, modern web development, and shipping clean, AI-driven solutions."
            speed={20}
            startDelay={600}
          />
        </p>
        <a
          href="/#projects"
          className="inline-flex items-center gap-1 font-mono text-[13px] text-primary hover:underline"
        >
          Learn More
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
