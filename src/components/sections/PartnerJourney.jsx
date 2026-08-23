import SectionHeading from "../SectionHeading";
import ProcessStep from "../ProcessStep";

const STEPS = [
  { index: "01 — Register", title: "Apply with your business details", body: "Submit your business information and apply to become a BubbleXWash partner." },
  { index: "02 — Get Verified", title: "We review and activate", body: "Our team reviews your business information and activates your partnership." },
  { index: "03 — Receive Orders", title: "Additional demand reaches you", body: "Access additional customer demand and service opportunities." },
  { index: "04 — Manage", title: "Run it from one place", body: "Manage bookings, services, earnings and performance through the BubbleXWash Partner Dashboard." },
  { index: "05 — Grow", title: "Do more with what you have", body: "Use your existing capacity more effectively and create additional business opportunities." },
];

export default function PartnerJourney() {
  return (
    <section className="py-20 md:py-28">
      <div className="shell">
        <SectionHeading label="Partner journey" title="From Application to Growth." />
        <div className="mt-14 space-y-8">
          {STEPS.map((s, i) => (
            <ProcessStep key={s.index} {...s} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
