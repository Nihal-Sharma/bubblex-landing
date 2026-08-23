/**
 * Booking service layer.
 * INTEGRATION POINT — connect the real BubbleXWash booking backend here,
 * or configure APP_CONFIG.bookingUrl to hand off to the existing booking app.
 */

/** Create a customer booking request. */
export async function createBooking(data) {
  // Connect BubbleXWash backend here, e.g.
  // const res = await fetch(`${API_BASE}/bookings`, { method: "POST", body: JSON.stringify(data) });
  // if (!res.ok) throw new Error("Booking could not be created.");
  // return res.json();
  await delay(900);
  if (!data?.service) {
    throw new Error("Select a service to continue.");
  }
  return { status: "requested", reference: null };
}

/** Service catalogue. Replace with backend-driven data when available. */
export const SERVICE_OPTIONS = [
  "Car Wash",
  "Detailing",
  "Workshop / Repair",
  "Auto Care",
  "Other Vehicle Service",
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
