import { ArrowRight, Cpu, Download, MapPin, SquareTerminal } from "lucide-react";
import { heroFacts, heroIntro, profile } from "../data/portfolio";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";

const factIcons = [MapPin, Cpu, SquareTerminal] as const;

export function Hero() {
	return (
		<section id="home" className="scroll-mt-24 py-16 sm:py-24">
			<Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.82fr)] lg:gap-16">
				<Reveal>
					<p className="eyebrow">{profile.label}</p>
					<h1 className="display mt-5 text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
						<span className="block">{profile.headlineLead}</span>
						<span className="gradient-name block">{profile.headlineName}</span>
					</h1>
					<p className="display mt-6 max-w-xl text-2xl leading-snug text-ink sm:text-[1.7rem]">
						{profile.subhead}
					</p>
					<p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-[1.02rem]">{heroIntro}</p>
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
						<a href="#projects" className="btn btn-primary gap-5! pr-1.5 pl-6">
							View My Work
							<span className="arrow-orb grid size-8 shrink-0 place-items-center rounded-full bg-[#101722] text-white">
								<ArrowRight size={16} strokeWidth={2.25} />
							</span>
						</a>
						<a className="btn btn-ghost" href={profile.resume} download={profile.resumeName}>
							<Download size={16} strokeWidth={2.25} />
							Download Resume
						</a>
					</div>
				</Reveal>

				<Reveal delay={0.08}>
					<figure className="relative mx-auto w-full max-w-[460px]">
						<span className="pointer-events-none absolute -top-3 -left-3 h-12 w-12 border-t-2 border-l-2 border-cyan" />
						<span className="pointer-events-none absolute -right-3 -bottom-10 h-12 w-12 border-r-2 border-b-2 border-cyan" />
						<img
							src={profile.portrait}
							alt="Portrait of Joseph Wu"
							className="aspect-square w-full rounded-[1.6rem] object-cover object-[center_18%]"
						/>
						<figcaption className="mt-4 text-center font-mono text-[0.68rem] tracking-[0.22em] text-muted">
							TORONTO, ONTARIO, CANADA
						</figcaption>
					</figure>
				</Reveal>
			</Container>
		</section>
	);
}
