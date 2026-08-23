import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { Field, Input, Textarea, FormMessage } from "../components/Field";

const TITLE = "Contact BubbleXWash — Talk to Our Team";
const DESCRIPTION =
  "Get in touch with BubbleXWash about partnerships, bookings or working with our automobile service platform.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      setError("Please fill in your name, email and message.");
      return;
    }
    setError("");
    setSent(true);
  }

  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's Talk."
        body="Whether you run an automobile business or need a service for your car, our team is here to help."
      />
      <section className="py-16 md:py-24">
        <div className="shell max-w-2xl">
          <Reveal>
            {sent ? (
              <div className="rounded-lg border border-hairline bg-secondary/60 p-8">
                <p className="eyebrow text-primary">Message sent</p>
                <h2 className="mt-4 text-2xl font-extrabold">Thanks for reaching out.</h2>
                <p className="mt-3 text-muted-foreground">Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <Input id="name" name="name" required maxLength={100} />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <Input id="email" name="email" type="email" required maxLength={255} />
                  </Field>
                </div>
                <Field label="Message" htmlFor="message">
                  <Textarea id="message" name="message" required maxLength={1000} />
                </Field>
                <FormMessage>{error}</FormMessage>
                <div>
                  <Button type="submit" variant="primary" size="lg">
                    Send Message
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
