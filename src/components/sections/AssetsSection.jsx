import { motion, useReducedMotion } from "motion/react";
import Reveal from "../Reveal";

const COLUMNS = [
  { label: "Your Business", items: ["People", "Infrastructure", "Equipment", "Expertise", "Capacity"] },
  { label: "BubbleXWash", items: ["Demand", "Technology", "Operations", "Network"], strong: true },
  { label: "Result", items: ["More Opportunities", "Better Utilization", "Additional Revenue"] },
];

export default function AssetsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <Reveal>
            <h2 className="max-w-2xl text-3xl leading-[1.05] font-extrabold text-ink-foreground sm:text-4xl md:text-5xl">
              Your Business Already Has the Assets.{" "}
              <span className="text-primary">We Help You Use Them Better.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xl self-end text-base leading-relaxed text-ink-muted md:text-lg">
              You already have the people, infrastructure, equipment and expertise. BubbleXWash
              helps connect that existing capacity with additional demand and manage the
              opportunity through technology.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
          {COLUMNS.map((col, ci) => (
            <div
              key={col.label}
              className={[
                "relative md:px-10",
                ci === 0 ? "md:pl-0" : "",
                ci < 2 ? "md:border-r md:border-ink-foreground/15" : "md:pr-0",
              ].join(" ")}
            >
              <Reveal delay={ci * 0.12}>
                <p
                  className={[
                    "eyebrow",
                    col.strong ? "text-primary" : "text-ink-muted",
                  ].join(" ")}
                >
                  {col.label}
                </p>
              </Reveal>
              <ul className="mt-6 space-y-3">
                {col.items.map((it, i) => (
                  <Reveal key={it} delay={ci * 0.12 + i * 0.06}>
                    <li className="flex items-center gap-3 text-lg font-semibold text-ink-foreground">
                      <motion.span
                        className="h-px bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: reduce ? 18 : 18 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      />
                      {it}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
