import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import LegalBody from "../components/LegalBody";

const TITLE = "Privacy Policy — BubbleXWash";
const DESCRIPTION =
  "How BubbleXWash collects, uses and protects information from customers and automobile service partners.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Privacy,
});

const SECTIONS = [
  {
    heading: "Information we collect",
    body: "We collect the information you provide when you request a service, apply to become a partner or contact us — such as your name, contact details, business details and service preferences.",
  },
  {
    heading: "How we use information",
    body: "Information is used to connect service requests with automobile service partners, operate and improve the BubbleXWash platform, and communicate with you about your bookings or partnership.",
  },
  {
    heading: "Sharing",
    body: "Service details are shared with the partner business assigned to fulfil your request. We do not sell personal information.",
  },
  {
    heading: "Data security",
    body: "We apply reasonable technical and organisational measures to protect information handled through the platform.",
  },
  {
    heading: "Your choices",
    body: "You may request access to, correction of, or deletion of the information you have shared with BubbleXWash by contacting our team.",
  },
];

function Privacy() {
  return (
    <>
      <PageHeader label="Legal" title="Privacy Policy" body="Last updated: 2026" />
      <LegalBody sections={SECTIONS} />
    </>
  );
}
