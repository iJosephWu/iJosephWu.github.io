import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[]) {
	const [active, setActive] = useState(ids[0] ?? "home");

	useEffect(() => {
		const nodes = ids
			.map((id) => document.getElementById(id))
			.filter((node): node is HTMLElement => Boolean(node));

		if (nodes.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				const id = visible[0]?.target.id;
				if (id) setActive(id);
			},
			{ rootMargin: "-42% 0px -48% 0px", threshold: [0.05, 0.2, 0.45] },
		);

		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, [ids]);

	return active;
}
