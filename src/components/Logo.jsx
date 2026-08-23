/** BubbleXWash wordmark. tone: "light" (dark text) | "dark" (light text) */
export default function Logo({ tone = "light", className = "" }) {
  const text = tone === "dark" ? "text-ink-foreground" : "text-foreground";
  return (
    <span
      className={["inline-flex items-center gap-2 font-display", className].join(" ")}
      aria-label="BubbleXWash"
    >
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
        <rect x="0.5" y="0.5" width="25" height="25" rx="7" className="fill-ink" />
        <circle cx="10" cy="10.5" r="4" className="fill-primary" />
        <circle cx="17" cy="16" r="2.6" fill="none" stroke="white" strokeWidth="1.4" />
        <path d="M5 19.5h7" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className={["text-[1.05rem] font-extrabold tracking-tight", text].join(" ")}>
        Bubble<span className="text-primary">X</span>Wash
      </span>
    </span>
  );
}
