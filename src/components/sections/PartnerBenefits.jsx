import SectionHeading from "../SectionHeading";
import BenefitItem from "../BenefitItem";
import { ArrowUpRight, Users, Gauge, Cpu, LineChart, Wallet } from "lucide-react";

const BENEFITS = [
  { icon: ArrowUpRight, title: "Increase Sales", body: "Access additional service opportunities." },
  { icon: Users, title: "Get More Demand", body: "Connect your business with customers looking for automobile services." },
  { icon: Gauge, title: "Improve Capacity Utilization", body: "Use existing workforce and infrastructure more effectively." },
  { icon: Cpu, title: "Technology-Driven Operations", body: "Manage service demand through a technology-enabled workflow." },
  { icon: LineChart, title: "Track Performance", body: "Create visibility into bookings, services and business performance." },
  { icon: Wallet, title: "Create Additional Revenue", body: "Generate additional opportunities from existing business capacity." },
];

export default function PartnerBenefits() {
  return (
    <section className="border-t border-hairline py-20 md:py-28">
      <div className="shell">
        <SectionHeading label="Partner benefits" title="What Changes When You Partner With BubbleXWash?" />
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <BenefitItem key={b.title} {...b} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
