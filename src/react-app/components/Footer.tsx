import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import type { SVGProps } from "react";
import { footerColumns, profile, socialLinks } from "../data/portfolio";
import { BrandMark } from "./BrandMark";
import { Container } from "./Container";

function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21.2 4.4 3.4 11.2c-1.2.5-1.2 1.7.1 2.1l4.6 1.4 1.8 5.4c.3 1 1.5 1.3 2.2.5l2.6-2.8 4.6 3.4c.9.7 2.2.2 2.5-.9l3.2-16c.3-1.2-.7-2.2-2-1.9Z" />
      <path d="m9.9 14.7 9.4-7.3" />
    </svg>
  );
}

function StackOverflowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 16.5h12" />
      <path d="M6 16.5V20h12v-3.5" />
      <path d="M7.4 13.4l8.4 3" />
      <path d="M9.2 9.4l6.8 5.2" />
      <path d="M12.4 6l4.4 7" />
    </svg>
  );
}

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Twitter: Twitter,
  Telegram: TelegramIcon,
  "Stack Overflow": StackOverflowIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line pb-20">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:items-start">
        <div>
          <BrandMark variant="footer" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Senior Software Engineer building AI platforms and Python backend systems.
          </p>
          <ul className="mt-5 flex flex-wrap items-center gap-2">
            {socialLinks.map((item) => {
              const Icon = socialIcons[item.label];
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="grid size-10 place-items-center rounded-full border border-line text-muted no-underline transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon width={16} height={16} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[0.68rem] tracking-[0.18em] text-muted">NAVIGATE</p>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col gap-2">
                {column.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="text-muted no-underline hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </nav>

        <div className="space-y-3 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-muted no-underline hover:text-ink"
          >
            <Mail size={15} className="text-accent" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-2 text-muted no-underline hover:text-ink"
          >
            <Phone size={15} className="text-accent" />
            {profile.phoneDisplay}
          </a>
        </div>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p>{profile.location}</p>
      </Container>
    </footer>
  );
}
