import Reveal from "../Reveal";
import NetworkVisual from "../NetworkVisual";

export default function NetworkSection() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="shell grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow text-primary">The network</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl leading-[1.05] font-extrabold text-ink-foreground sm:text-4xl md:text-5xl">
              One Booking. A Whole Service Network Behind It.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
              A customer request enters BubbleXWash and is routed to the automobile service
              business best suited to deliver it. As categories expand, the same infrastructure
              carries them.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <NetworkVisual />
        </Reveal>
      </div>
    </section>
  );
}
