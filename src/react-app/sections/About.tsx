import { Cloud, Sparkles, SquareTerminal, Users } from "lucide-react";
import { aboutParagraphs, capabilities } from "../data/portfolio";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";

const icons = {
  spark: Sparkles,
  terminal: SquareTerminal,
  cloud: Cloud,
  users: Users,
} as const;

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-16">
          <div>
            <p className="eyebrow">01 / About</p>
            <h2 className="display mt-4 text-4xl leading-[1.05] text-ink sm:text-5xl">
              Engineering with purpose.
            </h2>
            <p className="mt-6 font-mono text-[0.72rem] tracking-[0.18em] text-muted uppercase">
              English · Mandarin
            </p>
          </div>
          <div className="space-y-5 text-[0.98rem] leading-7 text-muted">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="panel-glow h-full p-6 sm:p-7">
                  <span className="grid size-10 place-items-center rounded-xl border border-line bg-bg/50 text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="display mt-5 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-[0.95rem]">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
