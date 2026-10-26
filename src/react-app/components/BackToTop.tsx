import { ArrowUp } from "lucide-react";

export function BackToTop() {
	const scrollTop = () => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
	};

	return (
		<button
			type="button"
			aria-label="Back to top"
			onClick={scrollTop}
			className="fixed right-5 bottom-5 z-40 grid size-12 cursor-pointer place-items-center rounded-full border border-line bg-card text-ink shadow-lg hover:border-accent hover:text-accent"
		>
			<ArrowUp size={20} strokeWidth={2.25} />
		</button>
	);
}
