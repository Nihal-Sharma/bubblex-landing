import Reveal from "../Reveal";

const CATEGORIES = [
  "Car Wash",
  "Detailing",
  "Workshops",
  "Auto Care",
  "Vehicle Services",
  "More Coming",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-hairline bg-secondary/60">
      <div className="shell flex flex-col gap-6 py-7 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <p className="text-sm font-semibold tracking-tight">
            Built for the evolving automobile service industry.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {CATEGORIES.map((c) => (
              <li
                key={c}
                className="eyebrow text-muted-foreground last:text-primary"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
