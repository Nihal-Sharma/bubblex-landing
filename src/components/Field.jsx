/** Minimal, design-system-aligned form field primitives. */
export function Field({ label, htmlFor, hint, children }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="text-xs font-semibold tracking-[0.14em] uppercase text-muted-foreground">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {hint ? <span className="mt-2 block text-xs text-muted-foreground">{hint}</span> : null}
    </label>
  );
}

const base =
  "w-full rounded-md border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

export function Input(props) {
  return <input {...props} className={base} />;
}

export function Textarea(props) {
  return <textarea rows={4} {...props} className={`${base} resize-y`} />;
}

export function Select({ children, ...props }) {
  return (
    <select {...props} className={base}>
      {children}
    </select>
  );
}

export function FormMessage({ tone = "error", children }) {
  if (!children) return null;
  return (
    <p
      role="status"
      className={[
        "text-sm font-medium",
        tone === "error" ? "text-destructive" : "text-primary",
      ].join(" ")}
    >
      {children}
    </p>
  );
}
