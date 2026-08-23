import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import LegalBody from "../components/LegalBody";

const TITLE = "Terms & Conditions — BubbleXWash";
const DESCRIPTION =
  "The terms that apply when using the BubbleXWash platform as a customer or as an automobile service partner.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Terms,
});

const SECTIONS = [
  {
    heading: "Using the platform",
    body: "BubbleXWash provides a technology platform that connects customers with automobile service businesses. By using the platform you agree to provide accurate information and to use the service lawfully.",
  },
  {
    heading: "Service requests",
    body: "A booking request is a request for service. Services are delivered by partner businesses on the BubbleXWash network, subject to availability and confirmation.",
  },
  {
    heading: "Partner responsibilities",
    body: "Partner businesses are responsible for the quality, safety and legality of the services they deliver, and for maintaining the licences and insurance their operations require.",
  },
  {
    heading: "Platform changes",
    body: "We may add, change or withdraw features and service categories as the BubbleXWash ecosystem evolves.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms can be directed to the BubbleXWash team through the contact page.",
  },
];

function Terms() {
  return (
    <>
      <PageHeader label="Legal" title="Terms & Conditions" body="Last updated: 2026" />
      <LegalBody sections={SECTIONS} />
    </>
  );
}
