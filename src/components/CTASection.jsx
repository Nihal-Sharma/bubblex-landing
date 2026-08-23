import Button from "./Button";
import Reveal from "./Reveal";
import { getBookingTarget } from "../config/appConfig";

/** Full-width black conversion band used at the end of pages. */
export default function CTASection({
  title = "Ready to Move the Automobile Service Industry Forward?",
  body = "Whether you need a service or run an automobile business, BubbleXWash gives you a simpler way to connect with the right opportunity.",
}) {
  const booking = getBookingTarget();
  const bookProps = booking.external ? { href: booking.href } : { to: booking.href };

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-primary">Get started</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-4xl text-3xl leading-[1.05] font-extrabold text-ink-foreground sm:text-4xl md:text-6xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">{body}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" size="lg" {...bookProps}>
              Book a Service
            </Button>
            <Button variant="light" size="lg" to="/partners/register">
              Become a Partner
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
