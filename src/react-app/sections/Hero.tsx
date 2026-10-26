import { ArrowRight, Cpu, Download, MapPin, SquareTerminal } from "lucide-react";
import { heroFacts, heroIntro, profile } from "../data/portfolio";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";

const factIcons = [MapPin, Cpu, SquareTerminal] as const;

export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,1fr)] lg:gap-14">
        <Reveal>
          <p className="eyebrow">{profile.label}</p>
          <h1 className="display mt-5 text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            <span className="block">{profile.headlineLead}</span>
            <span className="gradient-name block">{profile.headlineName}</span>
          </h1>
          <p className="display mt-6 max-w-xl text-2xl leading-snug text-ink sm:text-[1.7rem]">
            {profile.subhead}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-[1.02rem]">
            {heroIntro}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {heroFacts.map((fact, index) => {
              const Icon = factIcons[index];
              return (
                <li key={fact.label} className="chip">
                  <Icon size={14} className="text-accent" />
                  {fact.label}
                </li>
              );
            })}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary h-[43px] py-0 pr-1.5 pl-5">
              View My Work
              <span className="arrow-orb grid size-6 shrink-0 place-items-center rounded-full bg-[#101722] text-white">
                <ArrowRight size={14} strokeWidth={2.25} />
              </span>
            </a>
            <a className="btn btn-ghost" href={profile.resume} download={profile.resumeName}>
              <Download size={16} strokeWidth={2.25} />
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <figure className="relative mx-auto w-full max-w-[480px]">
            <span className="pointer-events-none absolute -top-3.5 -left-3.5 h-8 w-8 border-t border-l border-[#6d8eff]" />
            <img
              src={profile.portrait}
              alt="Portrait of Joseph Wu"
              className="portrait-frame aspect-square w-full rounded-[1.7rem] object-cover object-[center_18%]"
            />
            <figcaption className="mt-3.5 text-left text-[0.68rem] font-medium tracking-[0.28em] text-[#8b97ab]">
              TORONTO, ONTARIO, CANADA
            </figcaption>
            <span className="pointer-events-none absolute -right-3.5 -bottom-0.5 h-8 w-8 border-r border-b border-[#38d9e6]" />
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
