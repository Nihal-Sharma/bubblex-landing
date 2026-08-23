import { motion, useReducedMotion } from "motion/react";
import AnimatedCharacter from "./AnimatedCharacter";

/**
 * Hero scene: a vehicle arrives at a BubbleXWash service point, a service
 * professional attends to it, a booking status confirms, the car drives on.
 * Pure SVG + Motion so it stays lightweight.
 */
export function HeroScene({ className = "" }) {
  const reduce = useReducedMotion();

  const carAnim = reduce
    ? { x: 0 }
    : {
        x: [-140, 0, 0, 0, 190],
        transition: { duration: 9, times: [0, 0.22, 0.6, 0.8, 1], repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <div className={["relative", className].join(" ")}>
      <svg
        viewBox="0 0 520 320"
        className="w-full"
        role="img"
        aria-label="A car arrives at a BubbleXWash service point, is serviced by a professional, and the customer receives a booking confirmation."
      >
        {/* ground line */}
        <line x1="20" y1="248" x2="500" y2="248" stroke="var(--hairline)" strokeWidth="2" />
        {/* service bay canopy */}
        <rect x="150" y="52" width="230" height="10" rx="3" fill="var(--ink)" />
        <rect x="158" y="62" width="6" height="186" fill="var(--ink)" opacity="0.85" />
        <rect x="366" y="62" width="6" height="186" fill="var(--ink)" opacity="0.85" />
        <rect x="150" y="42" width="80" height="10" rx="3" fill="var(--primary)" />

        {/* worker */}
        <g transform="translate(372,168)">
          <foreignObject width="0" height="0" />
        </g>

        {/* water/foam dots during service */}
        {!reduce &&
          [0, 1, 2, 3].map((i) => (
            <motion.circle
              key={i}
              cx={228 + i * 22}
              cy={150}
              r={4}
              fill="var(--primary)"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 0.9, 0], y: [-4, -26, -40] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: 2.2 + i * 0.25,
                repeatDelay: 6.6,
                ease: "easeOut",
              }}
            />
          ))}

        {/* car */}
        <motion.g animate={carAnim}>
          <path
            d="M186 226h148c8 0 12-4 12-11v-14c0-9-6-14-16-16l-22-24c-4-5-9-7-15-7h-52c-7 0-12 2-17 7l-22 24c-11 2-17 7-17 16v14c0 7 4 11 11 11z"
            fill="var(--ink)"
          />
          <path
            d="M226 162h30v22h-48zM264 162h24c3 0 5 1 7 3l16 19h-47z"
            fill="var(--background)"
            opacity="0.9"
          />
          <circle cx="212" cy="226" r="15" fill="var(--ink)" />
          <circle cx="212" cy="226" r="6" fill="var(--primary)" />
          <circle cx="308" cy="226" r="15" fill="var(--ink)" />
          <circle cx="308" cy="226" r="6" fill="var(--primary)" />
        </motion.g>
      </svg>

      {/* service professional */}
      <div className="absolute bottom-[18%] right-[8%]">
        <AnimatedCharacter type="worker" size={92} />
      </div>

      {/* booking status card — deliberately minimal, not a floating glass card */}
      <motion.div
        className="absolute top-6 right-2 border-l-2 border-primary bg-card px-4 py-3 shadow-[0_1px_0_0_var(--hairline)]"
        initial={reduce ? { opacity: 1 } : { opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p className="eyebrow text-muted-foreground">Booking status</p>
        <StatusLine reduce={reduce} />
      </motion.div>
    </div>
  );
}

function StatusLine({ reduce }) {
  const steps = ["Requested", "In service", "Completed"];
  return (
    <div className="mt-2 flex items-center gap-2">
      {steps.map((s, i) => (
        <motion.span
          key={s}
          className="text-xs font-semibold"
          initial={{ opacity: reduce ? 1 : 0.25 }}
          animate={reduce ? {} : { opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, times: [0, 0.5, 1], delay: i * 2.4 }}
        >
          {s}
          {i < steps.length - 1 ? <span className="ml-2 text-hairline">→</span> : null}
        </motion.span>
      ))}
    </div>
  );
}

/** Small customer + vehicle scene used in the customer section. */
export function CustomerScene({ className = "" }) {
  const reduce = useReducedMotion();
  return (
    <div className={["relative", className].join(" ")}>
      <svg viewBox="0 0 420 220" className="w-full" role="img" aria-label="A customer books a service and drives away in a serviced car.">
        <line x1="10" y1="176" x2="410" y2="176" stroke="var(--hairline)" strokeWidth="2" />
        <motion.g
          animate={reduce ? {} : { x: [0, 14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M120 160h140c7 0 11-4 11-10v-12c0-8-6-13-15-15l-20-22c-4-4-8-6-14-6h-48c-6 0-11 2-15 6l-20 22c-10 2-16 7-16 15v12c0 6 4 10 10 10z"
            fill="var(--ink)"
          />
          <path d="M156 102h28v20h-44zM192 102h22c3 0 5 1 6 3l15 17h-43z" fill="var(--background)" opacity="0.9" />
          <circle cx="144" cy="160" r="13" fill="var(--ink)" />
          <circle cx="144" cy="160" r="5" fill="var(--primary)" />
          <circle cx="236" cy="160" r="13" fill="var(--ink)" />
          <circle cx="236" cy="160" r="5" fill="var(--primary)" />
        </motion.g>
      </svg>
      <div className="absolute bottom-[8%] left-[2%]">
        <AnimatedCharacter type="customer" size={84} />
      </div>
    </div>
  );
}
