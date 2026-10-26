import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { experience } from "../data/portfolio";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Experience() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <SectionHeading
          index="03 / Experience"
          title="My professional journey."
          lead="From Wave Financial to AI leadership at Arbitexia."
        />

        <div className="relative mt-12 space-y-4">
          <div className="absolute top-6 bottom-6 left-4 hidden w-px -translate-x-1/2 bg-line md:block" />
          {experience.map((job, index) => {
            const key = `${job.company}-${job.role}`;
            const expanded = open === key;
            return (
              <Reveal key={key} delay={index * 0.04}>
                <div className="flex items-start">
                  <div
                    className="relative hidden h-[calc(1.75rem+2.25rem)] w-8 shrink-0 items-center justify-center md:flex"
                    aria-hidden="true"
                  >
                    <span className="size-3 rounded-full bg-accent ring-4 ring-bg" />
                  </div>
                  <article className="panel min-w-0 flex-1 p-6 sm:p-7">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="display text-3xl">{job.company}</h3>
                        <p className="mt-1 text-accent">{job.role}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                          {job.dates}
                        </p>
                        <p className="mt-1 text-sm text-muted">{job.location}</p>
                      </div>
                    </div>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{job.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <li key={tag} className="tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="mt-4 inline-flex cursor-pointer items-center gap-1 text-sm text-accent"
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? null : key)}
                    >
                      {expanded ? "Hide contributions" : "Show contributions"}
                      <ChevronDown size={16} className={expanded ? "rotate-180" : ""} />
                    </button>
                    {expanded ? (
                      <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm leading-6 text-muted">
                        {job.contributions.map((item) => (
                          <li
                            key={item}
                            className="pl-4 before:absolute before:-ml-4 before:text-accent before:content-['•'] relative"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
