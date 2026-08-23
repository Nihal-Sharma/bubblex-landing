import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SectionHeading from "../SectionHeading";
import AnimatedCharacter from "../AnimatedCharacter";

const TABS = {
  customers: {
    label: "For Customers",
    steps: ["Choose Service", "Book", "Get Serviced", "Drive Away"],
    character: "customer",
  },
  partners: {
    label: "For Partners",
    steps: ["Register", "Get Verified", "Receive Orders", "Manage", "Grow"],
    character: "owner",
  },
};

export default function HowItWorksTabs() {
  const [active, setActive] = useState("customers");
  const tab = TABS[active];

  return (
    <section className="border-t border-hairline py-20 md:py-28">
      <div className="shell">
        <SectionHeading label="How it works" title="Two Paths. One Platform." />

        <div className="mt-10 flex gap-1" role="tablist" aria-label="How it works">
          {Object.entries(TABS).map(([key, t]) => (
            <button
              key={key}
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
              className={[
                "relative px-5 py-3 text-sm font-semibold transition-colors",
                active === key ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              {t.label}
              {active === key ? (
                <motion.span layoutId="tab-underline" className="absolute inset-x-0 bottom-0 h-0.5 bg-primary" />
              ) : null}
            </button>
          ))}
        </div>

        <div className="border-t border-hairline">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-center gap-10 py-12 md:grid-cols-[1fr_auto]"
            >
              <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {tab.steps.map((s, i) => (
                  <li key={s}>
                    <span className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-3 text-lg font-bold tracking-tight">{s}</p>
                  </li>
                ))}
              </ol>
              <AnimatedCharacter type={tab.character} size={120} className="justify-self-center" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
