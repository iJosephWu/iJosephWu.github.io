import { principles } from "../data/portfolio";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function Philosophy() {
	return (
		<section id="philosophy" className="scroll-mt-24 py-16 sm:py-24">
			<Container>
				<SectionHeading
					index="05 / Philosophy"
					title="How I build software."
					lead="Reliable services, practical architecture, and measurable AI."
				/>
				<div className="mt-12 grid gap-4 md:grid-cols-2">
					{principles.map((item, index) => (
						<Reveal key={item.number} delay={index * 0.04}>
							<article className="panel h-full p-6 sm:p-7">
								<p className="font-mono text-sm text-accent">{item.number}</p>
								<h3 className="display mt-4 text-[1.7rem]">{item.title}</h3>
								<p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
							</article>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	);
}
