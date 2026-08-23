import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { Field, Input, Select, FormMessage } from "../components/Field";
import { registerPartner } from "../services/partnerService";

const BUSINESS_TYPES = [
  "Car Wash",
  "Detailing Business",
  "Workshop",
  "Auto Care Business",
  "Other Automobile Service",
];

const TITLE = "Become a BubbleXWash Partner — Apply Now";
const DESCRIPTION =
  "Apply to join the BubbleXWash partner network and connect your automobile business with additional service demand.";

export const Route = createFileRoute("/partners/register")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: PartnerRegister,
});

function PartnerRegister() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());
    setStatus("loading");
    setError("");
    try {
      await registerPartner(data);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("idle");
    }
  }

  return (
    <>
      <PageHeader
        label="Partner application"
        title="Apply to Become a Partner."
        body="Share your business details. Our team reviews every application and activates verified partners on the BubbleXWash network."
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-14 md:grid-cols-[1fr_0.8fr] md:gap-20">
          <Reveal>
            {status === "done" ? (
              <div className="rounded-lg border border-hairline bg-secondary/60 p-8">
                <p className="eyebrow text-primary">Application received</p>
                <h2 className="mt-4 text-2xl font-extrabold">Thank you — we'll be in touch.</h2>
                <p className="mt-3 text-muted-foreground">
                  Our team will review your business details and contact you about activating your
                  BubbleXWash partnership.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6" noValidate>
                <Field label="Business name" htmlFor="businessName">
                  <Input id="businessName" name="businessName" required maxLength={120} />
                </Field>
                <Field label="Business type" htmlFor="businessType">
                  <Select id="businessType" name="businessType" defaultValue={BUSINESS_TYPES[0]}>
                    {BUSINESS_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </Select>
                </Field>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Owner name" htmlFor="ownerName">
                    <Input id="ownerName" name="ownerName" required maxLength={100} />
                  </Field>
                  <Field label="Phone" htmlFor="phone">
                    <Input id="phone" name="phone" type="tel" required maxLength={20} />
                  </Field>
                </div>
                <Field label="Email" htmlFor="email">
                  <Input id="email" name="email" type="email" required maxLength={255} />
                </Field>
                <Field label="City" htmlFor="city">
                  <Input id="city" name="city" required maxLength={80} />
                </Field>
                <FormMessage>{error}</FormMessage>
                <div>
                  <Button type="submit" variant="primary" size="lg" disabled={status === "loading"}>
                    {status === "loading" ? "Submitting…" : "Submit Application"}
                  </Button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="rounded-lg border border-hairline p-8">
              <p className="eyebrow text-primary">What happens next</p>
              <ol className="mt-6 space-y-5">
                {[
                  "We review your business details.",
                  "Verified partners are activated on the network.",
                  "You start receiving service opportunities.",
                  "You manage everything from the Partner Dashboard.",
                ].map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="font-mono text-sm text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{s}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
