import { Mail, Phone } from "lucide-react";
import { footerColumns, profile } from "../data/portfolio";
import { Container } from "./Container";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-line pb-20">
			<Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:items-start">
				<div>
					<div className="flex items-center gap-3">
						<span className="grid size-9 place-items-center rounded-xl border border-line bg-card font-mono text-[0.68rem]">
							{profile.monogram}
						</span>
						<span className="display text-lg">{profile.name}</span>
					</div>
					<p className="mt-4 max-w-xs text-sm leading-6 text-muted">
						Senior Software Engineer building AI platforms and Python backend systems.
					</p>
				</div>

				<nav aria-label="Footer">
					<p className="font-mono text-[0.68rem] tracking-[0.18em] text-muted">NAVIGATE</p>
					<div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
						{footerColumns.map((column, index) => (
							<div key={index} className="flex flex-col gap-2">
								{column.map((link) => (
									<a key={link.id} href={`#${link.id}`} className="text-muted no-underline hover:text-ink">
										{link.label}
									</a>
								))}
							</div>
						))}
					</div>
				</nav>

				<div className="space-y-3 text-sm">
					<a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-muted no-underline hover:text-ink">
						<Mail size={15} className="text-accent" />
						{profile.email}
					</a>
					<a href={`tel:${profile.phone}`} className="flex items-center gap-2 text-muted no-underline hover:text-ink">
						<Phone size={15} className="text-accent" />
						{profile.phoneDisplay}
					</a>
				</div>
			</Container>
			<Container className="flex flex-col gap-2 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
				<p>© {year} {profile.name}</p>
				<p>{profile.location}</p>
			</Container>
		</footer>
	);
}
