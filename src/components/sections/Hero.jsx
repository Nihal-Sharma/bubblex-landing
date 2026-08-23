import { motion, useReducedMotion } from "motion/react";
import Button from "../Button";
import { HeroScene } from "../AutomotiveIllustration";
import { getBookingTarget } from "../../config/appConfig";

export default function Hero() {
  const reduce = useReducedMotion();
  const booking = getBookingTarget();
  const bookProps = booking.external ? { href: booking.href } : { to: booking.href };

  const rise = (delay) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="relative overflow-hidden">
      <div className="shell grid items-center gap-14 py-16 md:grid-cols-[1.05fr_1fr] md:gap-10 md:py-24">
        <div>
          <motion.p className="eyebrow text-primary" {...rise(0.05)}>
            Automotive Services × Technology × Growth
          </motion.p>
          <motion.h1
            className="mt-6 text-4xl leading-[1.02] font-extrabold sm:text-5xl md:text-6xl lg:text-7xl"
            {...rise(0.12)}
          >
            Powering the Next Generation of Automobile Services.
          </motion.h1>
          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            {...rise(0.2)}
          >
            BubbleXWash connects customers with automobile service businesses while helping
            partners unlock more demand, better productivity and new revenue opportunities
            through technology.
          </motion.p>
          <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row" {...rise(0.28)}>
            <Button variant="primary" size="lg" {...bookProps}>
              Book a Service
            </Button>
            <Button variant="outline" size="lg" to="/partners/register">
              Partner With BubbleXWash
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}
