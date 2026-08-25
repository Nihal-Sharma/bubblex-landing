import { createServerFn } from "@tanstack/react-start";
import clientPromise from "../lib/mongodb";

const submitPartnerToDb = createServerFn({ method: "POST" })
  .validator((data) => data)
  .handler(async ({ data }) => {
    try {
      const client = await clientPromise;
      const db = client.db();
      const partnersCollection = db.collection("partners");

      const document = {
        ...data,
        createdAt: new Date(),
      };

      const result = await partnersCollection.insertOne(document);
      return { success: true, id: result.insertedId.toString() };
    } catch (error) {
      console.error("Database error during partner registration:", error);
      throw new Error("Failed to save registration: " + error.message);
    }
  });

/** Submit a partner application. */
export async function registerPartner(data) {
  if (!data?.businessName) {
    throw new Error("Business name is required.");
  }

  const result = await submitPartnerToDb({ data });
  return { status: "received", reference: result.id };
}
