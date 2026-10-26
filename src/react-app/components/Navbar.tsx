import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { BrandMark } from "./BrandMark";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = [
  "home",
  "about",
  "expertise",
  "experience",
  "projects",
  "philosophy",
  "education",
  "contact",
] as const;

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <BrandMark />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm no-underline ${active === link.id ? "text-ink underline decoration-1 underline-offset-8" : "text-muted hover:text-ink"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            className="btn btn-accent hidden sm:inline-flex"
            href={profile.resume}
            download={profile.resumeName}
          >
            <Download size={16} strokeWidth={2.25} />
            Download Resume
          </a>
          <button
            type="button"
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {open ? (
        <nav className="border-t border-line bg-bg px-5 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-ink no-underline"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a className="btn btn-accent mt-2" href={profile.resume} download={profile.resumeName}>
              <Download size={16} strokeWidth={2.25} />
              Download Resume
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
