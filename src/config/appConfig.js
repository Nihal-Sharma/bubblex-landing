/**
 * Central application configuration.
 *
 * INTEGRATION POINT — replace these values with the real production URLs of the
 * existing BubbleXWash applications. Nothing else in the codebase should
 * hard-code these URLs; always import APP_CONFIG.
 *
 * - bookingUrl:          external booking application. Leave "" to use the
 *                        built-in /book page on this website.
 * - partnerLoginUrl:     external partner login app. Leave "" to use /partners/login.
 * - partnerDashboardUrl: the EXISTING BubbleXWash Partner Dashboard. Users are
 *                        redirected here after a successful partner login.
 */
export const APP_CONFIG = {
  bookingUrl: "",
  partnerLoginUrl: "",
  partnerDashboardUrl: "",
};

/** Internal fallback routes used when an external URL is not configured. */
export const INTERNAL_ROUTES = {
  book: "/book",
  partnerRegister: "/partners/register",
  partnerLogin: "/partners/login",
};

/** True when the value is a usable external URL. */
export function isExternal(url) {
  return typeof url === "string" && url.trim().length > 0;
}

/** Where the "Book a Service" CTA should point. */
export function getBookingTarget() {
  return isExternal(APP_CONFIG.bookingUrl)
    ? { external: true, href: APP_CONFIG.bookingUrl }
    : { external: false, href: INTERNAL_ROUTES.book };
}

/** Where the "Partner Login" CTA should point. */
export function getPartnerLoginTarget() {
  return isExternal(APP_CONFIG.partnerLoginUrl)
    ? { external: true, href: APP_CONFIG.partnerLoginUrl }
    : { external: false, href: INTERNAL_ROUTES.partnerLogin };
}

/**
 * Redirect to the existing Partner Dashboard application.
 * This website intentionally does NOT recreate the dashboard.
 */
export function goToPartnerDashboard() {
  if (isExternal(APP_CONFIG.partnerDashboardUrl)) {
    window.location.assign(APP_CONFIG.partnerDashboardUrl);
    return true;
  }
  return false;
}
