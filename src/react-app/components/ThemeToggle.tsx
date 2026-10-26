import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
	const { theme, toggle } = useTheme();
	const next = theme === "dark" ? "light" : "dark";

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label={`Switch to ${next} theme`}
			className="grid size-10 cursor-pointer place-items-center rounded-full border border-line bg-card text-ink hover:border-accent hover:text-accent"
		>
			{theme === "dark" ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
		</button>
	);
}
