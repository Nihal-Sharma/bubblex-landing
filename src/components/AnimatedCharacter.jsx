import { motion, useReducedMotion } from "motion/react";

/**
 * Minimal, premium illustrated figures used across the site.
 * type: "customer" | "worker" | "owner"
 * Deliberately geometric — not cartoonish.
 */
export default function AnimatedCharacter({ type = "customer", size = 96, className = "" }) {
  const reduce = useReducedMotion();
  const bob = reduce ? {} : { animate: { y: [0, -3, 0] }, transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" } };
  const armWave = reduce
    ? {}
    : { animate: { rotate: [0, -22, 0] }, transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } };

  const palette = {
    customer: { accent: "var(--primary)", body: "var(--ink)" },
    worker: { accent: "var(--ink)", body: "var(--primary)" },
    owner: { accent: "var(--primary)", body: "var(--ink)" },
  }[type];

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={
        type === "worker"
          ? "Illustration of an automobile service professional"
          : type === "owner"
            ? "Illustration of an automobile business owner"
            : "Illustration of a BubbleXWash customer"
      }
      {...bob}
    >
      {/* head */}
      <circle cx="32" cy="15" r="7" fill={palette.body} />
      {/* cap for the service worker */}
      {type === "worker" ? (
        <path d="M24 12a8 8 0 0 1 16 0z" fill={palette.accent} />
      ) : null}
      {/* torso */}
      <path d="M20 52V33a12 12 0 0 1 24 0v19z" fill={palette.accent} opacity="0.92" />
      {/* arm */}
      <motion.rect
        x="42"
        y="30"
        width="4.5"
        height="16"
        rx="2.25"
        fill={palette.body}
        style={{ originX: "44px", originY: "31px" }}
        {...(type === "customer" ? armWave : {})}
      />
      <rect x="17.5" y="30" width="4.5" height="16" rx="2.25" fill={palette.body} />
      {/* owner holds a tablet, worker holds a tool */}
      {type === "owner" ? (
        <rect x="12" y="38" width="12" height="9" rx="1.5" fill="var(--primary)" />
      ) : null}
      {type === "worker" ? (
        <rect x="44.5" y="44" width="10" height="3" rx="1.5" fill="var(--ink)" />
      ) : null}
    </motion.svg>
  );
}
