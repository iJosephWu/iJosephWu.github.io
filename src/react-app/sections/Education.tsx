import { education } from "../data/portfolio";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-8 sm:py-12">
      <Container>
        <Reveal>
          <article className="panel p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">06 / Education</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="display text-4xl sm:text-5xl">{education.school}</h2>
                <p className="mt-3 font-medium text-ink">{education.degree}</p>
                <p className="mt-1 text-sm text-muted">{education.place}</p>
              </div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                {education.dates}
              </p>
            </div>
            <p className="mt-8 font-mono text-[0.68rem] tracking-[0.18em] text-muted">
              ACHIEVEMENTS
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {education.achievements.map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-bg/50 p-4">
                  <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
