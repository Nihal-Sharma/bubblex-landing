import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { getBookingTarget } from "../config/appConfig";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/customers", label: "Customers" },
  { to: "/partners", label: "Partners" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const booking = getBookingTarget();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bookProps = booking.external ? { href: booking.href } : { to: booking.href };

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b bg-background/92 backdrop-blur-[6px] transition-all duration-300",
        scrolled ? "border-hairline" : "border-transparent",
      ].join(" ")}
    >
      <div className={["shell flex items-center justify-between transition-all duration-300", scrolled ? "h-14" : "h-18"].join(" ")}>
        <Link to="/" aria-label="BubbleXWash home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full group-data-[status=active]:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" to="/partners/register">
            Partner With Us
          </Button>
          <Button variant="primary" {...bookProps}>
            Book a Service
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="primary" {...bookProps} className="h-10 px-4">
            Book Service
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-hairline"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-hairline bg-background lg:hidden"
          >
            <nav className="shell flex flex-col py-4" aria-label="Mobile">
              {LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-hairline/70 py-3 text-base font-semibold last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="dark" to="/partners/register" onClick={() => setOpen(false)}>
                  Partner With Us
                </Button>
                <Button variant="outline" to="/partners/login" onClick={() => setOpen(false)}>
                  Partner Login
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
