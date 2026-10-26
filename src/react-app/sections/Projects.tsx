import { projects } from "../data/portfolio";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

function Flow({ steps }: { steps: readonly string[] }) {
	return (
		<div className="flex flex-wrap items-center gap-2">
			{steps.map((step, index) => (
				<div key={step} className="flex items-center gap-2">
					<span className="rounded-xl border border-cyan/70 px-3.5 py-2 text-sm text-ink">{step}</span>
					{index < steps.length - 1 ? <span className="h-px w-5 bg-cyan/50" /> : null}
				</div>
			))}
		</div>
	);
}

export function Projects() {
	return (
		<section id="projects" className="scroll-mt-24 py-16 sm:py-24">
			<Container>
				<SectionHeading
					index="04 / Projects"
					title="Selected work."
					lead="A retrieval assistant and an approval-gated workflow."
				/>
				<div className="mt-12 grid gap-4 lg:grid-cols-2">
					{projects.map((project, index) => (
						<Reveal key={project.title} delay={index * 0.05}>
							<article className="panel-glow flex h-full flex-col p-6 sm:p-7">
								<Flow steps={project.flow} />
								<p className="eyebrow mt-8">{project.eyebrow}</p>
								<h3 className="display mt-3 text-3xl">{project.title}</h3>
								<p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
								<div className="mt-6 space-y-4 text-sm leading-6">
									<div>
										<p className="font-mono text-[0.68rem] tracking-[0.16em] text-accent">PROBLEM</p>
										<p className="mt-1 text-muted">{project.problem}</p>
									</div>
									<div>
										<p className="font-mono text-[0.68rem] tracking-[0.16em] text-accent">APPROACH</p>
										<p className="mt-1 text-muted">{project.approach}</p>
									</div>
									<div>
										<p className="font-mono text-[0.68rem] tracking-[0.16em] text-accent">OUTCOME</p>
										<p className="mt-1 text-muted">{project.outcome}</p>
									</div>
								</div>
								<ul className="mt-6 flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<li key={tag} className="tag">
											{tag}
										</li>
									))}
								</ul>
							</article>
						</Reveal>
					))}
				</div>
			</Container>
		</section>
	);
}
