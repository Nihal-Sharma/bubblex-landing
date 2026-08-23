/**
 * Partner service layer.
 * INTEGRATION POINT — connect the real BubbleXWash backend inside these functions.
 * UI components must never call an API directly.
 */

/** Submit a partner application. */
export async function registerPartner(data) {
  // Connect BubbleXWash backend here, e.g.
  // const res = await fetch(`${API_BASE}/partners/apply`, { method: "POST", body: JSON.stringify(data) });
  // if (!res.ok) throw new Error("Application could not be submitted.");
  // return res.json();
  await delay(900);
  if (!data?.businessName) {
    throw new Error("Business name is required.");
  }
  return { status: "received", reference: null };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
