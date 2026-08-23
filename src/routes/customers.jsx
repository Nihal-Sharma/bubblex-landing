import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import CustomerSection from "../components/sections/CustomerSection";
import TrustStrip from "../components/sections/TrustStrip";
import HowItWorksTabs from "../components/sections/HowItWorksTabs";
import NetworkSection from "../components/sections/NetworkSection";
import CTASection from "../components/CTASection";

const TITLE = "Book Automobile Services — BubbleXWash for Customers";
const DESCRIPTION =
  "Choose the automobile service you need — car wash, detailing, workshop or auto care — book it through BubbleXWash and let the service network handle the rest.";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Customers,
});

function Customers() {
  return (
    <>
      <PageHeader
        label="For customers"
        title="Your Car. Your Service. Simplified."
        body="Find the service you need, book it through BubbleXWash and let our network of automobile service professionals take care of the rest."
      />
      <TrustStrip />
      <CustomerSection />
      <HowItWorksTabs />
      <NetworkSection />
      <CTASection />
    </>
  );
}
