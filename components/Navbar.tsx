import Link from "next/link";

const LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/#home"
          className="font-mono text-sm font-bold tracking-widest text-primary"
        >
          MAFK
        </Link>

        <ul className="hidden items-center gap-8 font-mono text-[13px] text-text-muted sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/CV.pdf" download={"CV M. Asad Farhan Khomeini"}
          className="font-mono text-[13px] text-text-muted transition-colors hover:text-primary"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
