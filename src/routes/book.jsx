import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { Field, Input, Select, Textarea, FormMessage } from "../components/Field";
import { createBooking, SERVICE_OPTIONS } from "../services/bookingService";

const TITLE = "Book a Service — BubbleXWash";
const DESCRIPTION =
  "Request a car wash, detailing, workshop or auto care service and BubbleXWash will connect you with the right service partner.";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    setStatus("loading");
    setError("");
    try {
      await createBooking(data);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  return (
    <>
      <PageHeader
        label="Book a service"
        title="Tell Us What Your Car Needs."
        body="Choose a service, share a few details and BubbleXWash will connect your request with the right automobile service partner."
      />

      <section className="py-16 md:py-24">
        <div className="shell max-w-2xl">
          <Reveal>
            {status === "done" ? (
              <div className="rounded-lg border border-hairline bg-secondary/60 p-8">
                <p className="eyebrow text-primary">Request received</p>
                <h2 className="mt-4 text-2xl font-extrabold">We're on it.</h2>
                <p className="mt-3 text-muted-foreground">
                  Your service request has been received. A BubbleXWash service partner will be
                  matched to your booking.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6" noValidate>
                <Field label="Service" htmlFor="service">
                  <Select id="service" name="service" defaultValue={SERVICE_OPTIONS[0]}>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </Select>
                </Field>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="name">
                    <Input id="name" name="name" required maxLength={100} />
                  </Field>
                  <Field label="Phone" htmlFor="phone">
                    <Input id="phone" name="phone" type="tel" required maxLength={20} />
                  </Field>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Vehicle" htmlFor="vehicle" hint="Make and model">
                    <Input id="vehicle" name="vehicle" maxLength={80} />
                  </Field>
                  <Field label="Preferred date" htmlFor="date">
                    <Input id="date" name="date" type="date" />
                  </Field>
                </div>
                <Field label="Location" htmlFor="location">
                  <Input id="location" name="location" required maxLength={160} />
                </Field>
                <Field label="Notes" htmlFor="notes">
                  <Textarea id="notes" name="notes" maxLength={1000} />
                </Field>
                <FormMessage>{error}</FormMessage>
                <div>
                  <Button type="submit" variant="primary" size="lg" disabled={status === "loading"}>
                    {status === "loading" ? "Sending…" : "Request Booking"}
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
