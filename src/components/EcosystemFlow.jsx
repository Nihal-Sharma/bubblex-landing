import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";

const STAGES = ["Customers", "BubbleXWash", "Service Partners", "Service Delivery", "Business Growth"];

/** Vertical/horizontal ecosystem flow, revealed on scroll. */
export default function EcosystemFlow({ tone = "light" }) {
  const isDark = tone === "dark";
  const reduce = useReducedMotion();

  return (
    <ol className="grid gap-0 md:grid-cols-5">
      {STAGES.map((s, i) => (
        <li key={s} className="relative">
          <Reveal delay={i * 0.08}>
            <div
              className={[
                "flex h-full flex-col justify-between border-t px-0 py-6 md:px-5",
                isDark ? "border-ink-foreground/15" : "border-hairline",
                i === 1 ? "md:border-t-2 md:border-t-primary" : "",
              ].join(" ")}
            >
              <span className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</span>
              <p
                className={[
                  "mt-6 text-lg font-bold tracking-tight md:text-xl",
                  isDark ? "text-ink-foreground" : "text-foreground",
                ].join(" ")}
              >
                {s}
              </p>
            </div>
          </Reveal>
          {i < STAGES.length - 1 ? (
            <motion.span
              aria-hidden="true"
              className="absolute top-0 left-0 hidden h-0.5 bg-primary md:block"
              initial={{ width: 0 }}
              whileInView={{ width: reduce ? "100%" : "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
