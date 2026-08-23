import Button from "../Button";
import Reveal from "../Reveal";

export default function PartnerCTA() {
  return (
    <section className="border-y border-hairline bg-secondary/60 py-20 md:py-24">
      <div className="shell flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">Partner with BubbleXWash</p>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Ready to Grow Your Automobile Business?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Join BubbleXWash and turn the capacity you already have into more opportunities.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" size="lg" to="/partners/register">
              Apply to Become a Partner
            </Button>
            <Button variant="outline" size="lg" to="/partners/login">
              Partner Login
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
