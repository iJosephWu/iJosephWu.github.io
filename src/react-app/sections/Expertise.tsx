import { Cloud, Database, LayoutGrid, Sparkles, SquareTerminal } from "lucide-react";
import { skillGroups, stackRows } from "../data/portfolio";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const icons = {
  spark: Sparkles,
  terminal: SquareTerminal,
  layout: LayoutGrid,
  cloud: Cloud,
  database: Database,
} as const;

function NodeMark() {
  return (
    <svg viewBox="0 0 120 36" className="h-8 w-28 text-cyan" aria-hidden="true">
      <circle cx="10" cy="18" r="3" fill="currentColor" />
      <circle cx="48" cy="8" r="3" fill="currentColor" />
      <circle cx="78" cy="24" r="3" fill="currentColor" />
      <circle cx="110" cy="12" r="3" fill="currentColor" />
      <path
        d="M13 17 L45 9 M51 10 L75 22 M81 22 L107 13"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

export function Expertise() {
  const skills = stackRows.flat();

  return (
    <section id="expertise" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <SectionHeading
          index="02 / Expertise"
          title="Technologies I work with."
          lead="AI platforms, Python services, and production systems."
        />

        <div className="mt-12">
          <p className="font-mono text-[0.68rem] tracking-[0.18em] text-muted">PRIMARY STACK</p>
          <ul className="mt-4 flex flex-wrap gap-2 xl:hidden">
            {skills.map((skill) => (
              <li key={skill} className="tag">
                {skill}
              </li>
            ))}
          </ul>
          <div className="mt-4 hidden gap-y-2 xl:grid">
            {stackRows.map((row) => (
              <ul key={row[0]} className="flex flex-nowrap justify-between gap-2">
                {row.map((skill) => (
                  <li key={skill} className="tag whitespace-nowrap">
                    {skill}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title} className={group.span} delay={index * 0.04}>
                <article className="panel-glow flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-10 place-items-center rounded-xl border border-line text-accent">
                      <Icon size={18} />
                    </span>
                    {group.icon === "spark" ? <NodeMark /> : null}
                  </div>
                  <h3 className="display mt-5 text-[1.65rem] leading-tight">{group.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{group.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
