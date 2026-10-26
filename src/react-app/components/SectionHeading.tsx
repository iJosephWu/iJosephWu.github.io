import type { ReactNode } from "react";

export function SectionHeading({
	index,
	title,
	lead,
	aside,
}: {
	index: string;
	title: string;
	lead?: string;
	aside?: ReactNode;
}) {
	return (
		<div className={aside ? "grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16" : ""}>
			<div>
				<p className="eyebrow">{index}</p>
				<h2 className="display mt-4 text-4xl leading-[1.05] text-ink sm:text-5xl">{title}</h2>
				{lead ? <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">{lead}</p> : null}
			</div>
			{aside ? <div className="text-[0.98rem] leading-7 text-muted">{aside}</div> : null}
		</div>
	);
}
