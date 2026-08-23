import Reveal from "./Reveal";

/** Shared editorial layout for legal pages. */
export default function LegalBody({ sections }) {
  return (
    <section className="py-16 md:py-24">
      <div className="shell max-w-3xl">
        <div className="space-y-12">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.05}>
              <article>
                <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">{s.heading}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
