import Reveal from "../Reveal";
import { TrendingUp, Gauge, Layers } from "lucide-react";

const ITEMS = [
  {
    index: "01",
    icon: TrendingUp,
    title: "More Demand",
    body: "Access additional service demand and create new opportunities to generate revenue.",
  },
  {
    index: "02",
    icon: Gauge,
    title: "Better Utilization",
    body: "Use existing workforce, infrastructure and service capacity more efficiently.",
  },
  {
    index: "03",
    icon: Layers,
    title: "More Opportunity",
    body: "Unlock additional revenue opportunities without completely rebuilding your existing operation.",
  },
];

export default function ValueProps() {
  return (
    <section className="border-t border-hairline py-20 md:py-28">
      <div className="shell grid gap-12 md:grid-cols-3 md:gap-0">
        {ITEMS.map((it, i) => (
          <Reveal key={it.index} delay={i * 0.1}>
            <div
              className={[
                "h-full md:px-10",
                i === 0 ? "md:pl-0" : "",
                i < 2 ? "md:border-r md:border-hairline" : "md:pr-0",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <span className="eyebrow text-primary">{it.index}</span>
                <it.icon size={18} className="text-foreground" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {it.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
