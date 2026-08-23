import Button from "./Button";
import Reveal from "./Reveal";
import { getBookingTarget } from "../config/appConfig";

/** Two-sided split: customer path on the left, partner path on the right. */
export default function DualCTA() {
  const booking = getBookingTarget();
  const bookProps = booking.external ? { href: booking.href } : { to: booking.href };

  return (
    <section className="border-y border-hairline">
      <div className="shell grid md:grid-cols-2">
        <Reveal>
          <div className="py-16 md:pr-14 md:py-24">
            <p className="eyebrow text-primary">Need a service?</p>
            <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl md:text-4xl">
              Find and book automobile services through BubbleXWash.
            </h2>
            <div className="mt-8">
              <Button variant="primary" size="lg" {...bookProps}>
                Book a Service
              </Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border-t border-hairline py-16 md:border-t-0 md:border-l md:pl-14 md:py-24">
            <p className="eyebrow text-muted-foreground">Run an automobile business?</p>
            <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl md:text-4xl">
              Turn the capacity you already have into more opportunities.
            </h2>
            <div className="mt-8">
              <Button variant="dark" size="lg" to="/partners/register">
                Partner With Us
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
