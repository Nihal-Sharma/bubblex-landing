import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { Field, Input, FormMessage } from "../components/Field";
import { loginPartner } from "../services/authService";
import { goToPartnerDashboard } from "../config/appConfig";

const TITLE = "Partner Login — BubbleXWash Partner Dashboard";
const DESCRIPTION =
  "Sign in to access the BubbleXWash Partner Dashboard and manage bookings, services, earnings and performance.";

export const Route = createFileRoute("/partners/login")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PartnerLogin,
});

function PartnerLogin() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("loading");
    setError("");
    setNotice("");
    try {
      await loginPartner({
        identifier: form.get("identifier"),
        password: form.get("password"),
      });
      const redirected = goToPartnerDashboard();
      if (!redirected) {
        setNotice(
          "Sign-in succeeded. Configure the Partner Dashboard URL to complete the redirect.",
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <>
      <PageHeader
        label="Partner access"
        title="Welcome Back."
        body="Sign in to continue to the BubbleXWash Partner Dashboard."
      />

      <section className="py-16 md:py-24">
        <div className="shell max-w-lg">
          <Reveal>
            <form onSubmit={onSubmit} className="grid gap-6" noValidate>
              <Field label="Email or phone" htmlFor="identifier">
                <Input id="identifier" name="identifier" autoComplete="username" required maxLength={255} />
              </Field>
              <Field label="Password" htmlFor="password">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </Field>
              <FormMessage>{error}</FormMessage>
              <FormMessage tone="info">{notice}</FormMessage>
              <Button type="submit" variant="primary" size="lg" disabled={status === "loading"}>
                {status === "loading" ? "Signing in…" : "Login"}
              </Button>
              <p className="text-sm text-muted-foreground">
                New to BubbleXWash?{" "}
                <Link to="/partners/register" className="font-semibold text-primary hover:underline">
                  Apply to become a partner
                </Link>
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
