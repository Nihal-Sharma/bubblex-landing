import Button from "../Button";
import Reveal from "../Reveal";
import { CustomerScene } from "../AutomotiveIllustration";
import { getBookingTarget } from "../../config/appConfig";

export default function CustomerSection() {
  const booking = getBookingTarget();
  const bookProps = booking.external ? { href: booking.href } : { to: booking.href };

  return (
    <section className="py-20 md:py-28">
      <div className="shell grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div>
            <p className="eyebrow text-primary">For customers</p>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Your Car. Your Service. Simplified.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Find the service you need, book it through BubbleXWash and let our network of
              automobile service professionals take care of the rest.
            </p>
            <div className="mt-9">
              <Button variant="primary" size="lg" {...bookProps}>
                Book a Service
              </Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <CustomerScene />
        </Reveal>
      </div>
    </section>
  );
}
