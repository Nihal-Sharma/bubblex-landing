import Reveal from "./Reveal";

/** Numbered editorial step used in journeys and timelines. */
export default function ProcessStep({ index, title, body, tone = "light", delay = 0 }) {
  const isDark = tone === "dark";
  return (
    <Reveal delay={delay}>
      <div
        className={[
          "group grid gap-3 border-t pt-6 md:grid-cols-[5rem_1fr] md:gap-8",
          isDark ? "border-ink-foreground/15" : "border-hairline",
        ].join(" ")}
      >
        <span className="eyebrow text-primary">{index}</span>
        <div>
          <h3
            className={[
              "text-xl font-bold tracking-tight md:text-2xl",
              isDark ? "text-ink-foreground" : "text-foreground",
            ].join(" ")}
          >
            {title}
          </h3>
          <p
            className={[
              "mt-2 max-w-xl text-sm leading-relaxed md:text-base",
              isDark ? "text-ink-muted" : "text-muted-foreground",
            ].join(" ")}
          >
            {body}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
