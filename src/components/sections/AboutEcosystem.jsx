import SectionHeading from "../SectionHeading";
import EcosystemFlow from "../EcosystemFlow";

export default function AboutEcosystem() {
  return (
    <section className="py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <SectionHeading label="What is BubbleXWash?" title="More Than a Car Wash." />
          <p className="max-w-xl self-end text-base leading-relaxed text-muted-foreground md:text-lg">
            BubbleXWash is building an automobile-service ecosystem that connects customers with
            service providers while giving automobile businesses access to additional demand,
            operational technology and growth opportunities.
          </p>
        </div>

        <div className="mt-16">
          <EcosystemFlow />
        </div>
      </div>
    </section>
  );
}
