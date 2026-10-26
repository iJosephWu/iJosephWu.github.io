export function BrandMark({ variant = "lockup" }: { variant?: "lockup" | "footer" }) {
  return (
    <a href="#home" className="flex items-center gap-3 no-underline" aria-label="Joseph Wu, home">
      <img
        src="/branding/logo-icon.svg"
        alt=""
        width={variant === "lockup" ? 56 : 36}
        height={variant === "lockup" ? 56 : 36}
        className={variant === "lockup" ? "size-12 shrink-0 sm:size-14" : "size-9 shrink-0"}
      />
      {variant === "lockup" ? (
        <span className="display whitespace-nowrap text-base font-semibold tracking-[0.14em] sm:text-xl sm:tracking-[0.16em]">
          <span className="text-ink">JOSEPH</span>
          <span className="wordmark-accent"> WU</span>
        </span>
      ) : (
        <span className="display text-lg whitespace-nowrap text-ink">Joseph Wu</span>
      )}
    </a>
  );
}
