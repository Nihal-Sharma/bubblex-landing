import { motion, useReducedMotion } from "motion/react";

/**
 * Network diagram: customer → booking → BubbleXWash → service categories →
 * service delivery → business growth. Animated connection lines.
 */
export default function NetworkVisual({ className = "" }) {
  const reduce = useReducedMotion();
  const line = (d, delay) => (
    <motion.path
      key={d}
      d={d}
      fill="none"
      stroke="var(--primary)"
      strokeWidth="1.5"
      initial={{ pathLength: reduce ? 1 : 0, opacity: 0.9 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: "easeInOut" }}
    />
  );

  const node = (x, y, label, strong = false) => (
    <g key={`${label}-${x}-${y}`}>
      <rect
        x={x - 68}
        y={y - 16}
        width="136"
        height="32"
        rx="2"
        fill={strong ? "var(--primary)" : "transparent"}
        stroke={strong ? "var(--primary)" : "var(--ink-muted)"}
        strokeWidth="1"
        opacity={strong ? 1 : 0.5}
      />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1.4"
        fill={strong ? "var(--ink)" : "var(--ink-foreground)"}
      >
        {label.toUpperCase()}
      </text>
    </g>
  );

  return (
    <svg
      viewBox="0 0 720 460"
      className={["w-full", className].join(" ")}
      role="img"
      aria-label="Diagram: a customer books a service through BubbleXWash, which routes it to wash, detailing or workshop partners, leading to completed services and business growth."
    >
      {line("M360 46 V74", 0.1)}
      {line("M360 106 V134", 0.2)}
      {line("M360 166 C360 200, 170 190, 170 224", 0.35)}
      {line("M360 166 V224", 0.35)}
      {line("M360 166 C360 200, 550 190, 550 224", 0.35)}
      {line("M170 256 V300", 0.55)}
      {line("M360 256 V300", 0.55)}
      {line("M550 256 V300", 0.55)}
      {line("M170 332 C170 370, 360 360, 360 396", 0.75)}
      {line("M360 332 V396", 0.75)}
      {line("M550 332 C550 370, 360 360, 360 396", 0.75)}

      {node(360, 30, "Customer")}
      {node(360, 90, "Book a Service")}
      {node(360, 150, "BubbleXWash", true)}
      {node(170, 240, "Wash")}
      {node(360, 240, "Detailing")}
      {node(550, 240, "Workshop")}
      {node(170, 316, "Service")}
      {node(360, 316, "Service")}
      {node(550, 316, "Service")}
      {node(360, 412, "Business Growth", true)}
    </svg>
  );
}
