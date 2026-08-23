import { motion, useReducedMotion } from "motion/react";

/** Consistent editorial page header for inner pages. */
export default function PageHeader({ label, title, body }) {
  const reduce = useReducedMotion();
  const rise = (delay) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <header className="border-b border-hairline">
      <div className="shell py-16 md:py-24">
        <motion.p className="eyebrow text-primary" {...rise(0.05)}>
          {label}
        </motion.p>
        <motion.h1
          className="mt-5 max-w-4xl text-4xl leading-[1.03] font-extrabold sm:text-5xl md:text-6xl"
          {...rise(0.12)}
        >
          {title}
        </motion.h1>
        {body ? (
          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            {...rise(0.18)}
          >
            {body}
          </motion.p>
        ) : null}
      </div>
    </header>
  );
}
