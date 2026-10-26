import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { contactIntro, profile } from "../data/portfolio";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";

export function Contact() {
	const [copied, setCopied] = useState(false);
	const [status, setStatus] = useState("");
	const [error, setError] = useState("");

	const copyEmail = async () => {
		await navigator.clipboard.writeText(profile.email);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1600);
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const name = String(form.get("name") ?? "").trim();
		const email = String(form.get("email") ?? "").trim();
		const message = String(form.get("message") ?? "").trim();
		if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError("Add your name, a valid email, and a message.");
			setStatus("");
			return;
		}
		setError("");
		const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
		const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
		window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
		setStatus("Your email app is opening with this message addressed to Joseph.");
	};

	return (
		<section id="contact" className="scroll-mt-24 py-16 sm:py-24">
			<Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-12">
				<Reveal>
					<p className="eyebrow">07 / Contact</p>
					<h2 className="display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
						Let's build
						<br />
						something
						<br />
						meaningful.
					</h2>
					<p className="mt-6 max-w-md text-base leading-7 text-muted">{contactIntro}</p>
					<ul className="mt-6 space-y-3 text-sm">
						<li className="flex flex-wrap items-center gap-2">
							<Mail size={15} className="text-accent" />
							<a href={`mailto:${profile.email}`} className="text-ink no-underline hover:text-accent">
								{profile.email}
							</a>
							<button
								type="button"
								onClick={copyEmail}
								className="inline-flex cursor-pointer items-center gap-1 rounded-full border border-line px-2.5 py-1 text-xs text-muted hover:text-ink"
							>
								{copied ? <Check size={12} /> : <Copy size={12} />}
								{copied ? "Copied" : "Copy"}
							</button>
						</li>
						<li>
							<a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 text-ink no-underline hover:text-accent">
								<Phone size={15} className="text-accent" />
								{profile.phoneDisplay}
							</a>
						</li>
						<li className="inline-flex items-center gap-2 text-muted">
							<MapPin size={15} className="text-accent" />
							{profile.location}
						</li>
					</ul>
					<p className="mt-4 text-sm text-muted">{profile.languages}</p>
				</Reveal>

				<Reveal delay={0.06}>
					<form onSubmit={onSubmit} className="panel space-y-4 p-5 sm:p-6" noValidate>
						<label className="block text-sm text-muted">
							Name
							<input className="field mt-2" name="name" autoComplete="name" />
						</label>
						<label className="block text-sm text-muted">
							Email
							<input className="field mt-2" name="email" type="email" autoComplete="email" />
						</label>
						<label className="block text-sm text-muted">
							Message
							<textarea className="field mt-2 min-h-32 resize-y" name="message" />
						</label>
						<button type="submit" className="btn btn-primary">
							<Send size={16} strokeWidth={2.25} />
							Send email
						</button>
						{error ? <p className="text-sm text-accent">{error}</p> : null}
						{status ? <p className="text-sm text-muted">{status}</p> : null}
					</form>
				</Reveal>
			</Container>
		</section>
	);
}
