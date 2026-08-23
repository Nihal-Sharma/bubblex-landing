import Reveal from "./Reveal";

/** Editorial section heading: eyebrow label + headline + optional body copy. */
export default function SectionHeading({
  label,
  title,
  body,
  tone = "light", // "light" on warm white, "dark" on black sections
  align = "left",
  className = "",
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={[
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className,
      ].join(" ")}
    >
      {label ? (
        <Reveal>
          <p className={["eyebrow", isDark ? "text-primary" : "text-primary"].join(" ")}>
            {label}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={[
            "mt-4 text-3xl leading-[1.05] font-extrabold sm:text-4xl md:text-5xl",
            isDark ? "text-ink-foreground" : "text-foreground",
          ].join(" ")}
        >
          {title}
        </h2>
      </Reveal>
      {body ? (
        <Reveal delay={0.1}>
          <p
            className={[
              "mt-5 max-w-2xl text-base leading-relaxed md:text-lg",
              isDark ? "text-ink-muted" : "text-muted-foreground",
              align === "center" ? "mx-auto" : "",
            ].join(" ")}
          >
            {body}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
