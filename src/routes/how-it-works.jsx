import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import HowItWorksTabs from "../components/sections/HowItWorksTabs";
import EcosystemFlow from "../components/EcosystemFlow";
import PartnerJourney from "../components/sections/PartnerJourney";
import DualCTA from "../components/DualCTA";
import Reveal from "../components/Reveal";

const TITLE = "How BubbleXWash Works — Customers and Partners";
const DESCRIPTION =
  "See how BubbleXWash connects customer service requests with automobile service businesses, from booking to fulfilment to growth.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  return (
    <>
      <PageHeader
        label="How it works"
        title="Two Paths. One Platform."
        body="Customers book the automobile service they need. Partners receive demand and manage it through technology."
      />
      <section className="py-16 md:py-24">
        <div className="shell">
          <Reveal>
            <EcosystemFlow />
          </Reveal>
        </div>
      </section>
      <HowItWorksTabs />
      <PartnerJourney />
      <DualCTA />
    </>
  );
}
