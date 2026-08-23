import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

/**
 * Single button primitive used across the site.
 * variant: "primary" (orange) | "dark" | "outline" | "ghost"
 */
const VARIANTS = {
  primary: "bg-primary text-primary-foreground hover:brightness-110",
  dark: "bg-ink text-ink-foreground hover:bg-ink/90",
  outline: "border border-foreground/25 text-foreground hover:border-foreground/60",
  light: "border border-ink-foreground/30 text-ink-foreground hover:border-ink-foreground/70",
  ghost: "text-foreground hover:text-primary",
};

const SIZES = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.95rem]",
};

function classes(variant = "primary", size = "md", className = "") {
  return [
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight",
    "transition-[background,color,border-color,filter] duration-200 select-none",
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    className,
  ].join(" ");
}

const MOTION = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 400, damping: 26 },
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  params,
  href,
  className = "",
  ...rest
}) {
  const cls = classes(variant, size, className);

  if (to) {
    const MotionLink = motion.create(Link);
    return (
      <MotionLink to={to} params={params} className={cls} {...MOTION} {...rest}>
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a href={href} className={cls} {...MOTION} {...rest}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={cls} {...MOTION} {...rest}>
      {children}
    </motion.button>
  );
}
