import { Link } from "@tanstack/react-router";
import Logo from "./Logo";
import { APP_CONFIG, getBookingTarget, isExternal } from "../config/appConfig";

function Col({ title, children }) {
  return (
    <div>
      <p className="eyebrow text-ink-muted">{title}</p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function Item({ to, href, children }) {
  const cls =
    "text-sm text-ink-foreground/80 transition-colors hover:text-primary";
  return (
    <li>
      {href ? (
        <a href={href} className={cls}>
          {children}
        </a>
      ) : (
        <Link to={to} className={cls}>
          {children}
        </Link>
      )}
    </li>
  );
}

export default function Footer() {
  const booking = getBookingTarget();
  // Partner Dashboard is a separate existing application — configured in appConfig.js
  const dashboard = isExternal(APP_CONFIG.partnerDashboardUrl)
    ? APP_CONFIG.partnerDashboardUrl
    : null;

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] md:py-20">
        <div className="max-w-xs">
          <Logo tone="dark" />
          <p className="mt-5 text-sm leading-relaxed text-ink-muted">
            Technology-driven growth infrastructure for the automobile service industry.
          </p>
        </div>

        <Col title="Company">
          <Item to="/about">About</Item>
          <Item to="/contact">Contact</Item>
        </Col>

        <Col title="Customers">
          {booking.external ? (
            <Item href={booking.href}>Book a Service</Item>
          ) : (
            <Item to="/book">Book a Service</Item>
          )}
          <Item to="/how-it-works">How It Works</Item>
        </Col>

        <Col title="Partners">
          <Item to="/partners/register">Become a Partner</Item>
          <Item to="/partners/login">Partner Login</Item>
          {dashboard ? (
            <Item href={dashboard}>Partner Dashboard</Item>
          ) : (
            <Item to="/partners/login">Partner Dashboard</Item>
          )}
        </Col>

        <Col title="Legal">
          <Item to="/privacy">Privacy Policy</Item>
          <Item to="/terms">Terms &amp; Conditions</Item>
        </Col>
      </div>

      <div className="border-t border-ink-foreground/12">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BubbleXWash. All rights reserved.</p>
          <p>Automobile services × technology × growth</p>
        </div>
      </div>
    </footer>
  );
}
