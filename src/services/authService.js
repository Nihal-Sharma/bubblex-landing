/**
 * Partner authentication service layer.
 * INTEGRATION POINT — connect real BubbleXWash authentication here.
 * This is deliberately NOT a production auth implementation.
 */

/**
 * Authenticate a partner.
 * @returns {Promise<{ token: string|null }>}
 */
export async function loginPartner({ identifier, password }) {
  // Connect BubbleXWash authentication here, e.g.
  // const res = await fetch(`${API_BASE}/partners/login`, { method: "POST", ... });
  // if (!res.ok) throw new Error("Invalid credentials.");
  // return res.json();
  await delay(800);
  if (!identifier || !password) {
    throw new Error("Enter your email/phone and password.");
  }
  return { token: null };
}

/** Trigger a password reset email/SMS. */
export async function requestPasswordReset(identifier) {
  // Connect BubbleXWash backend here.
  await delay(600);
  return { sentTo: identifier };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
