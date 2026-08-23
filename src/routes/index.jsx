import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/sections/Hero";
import TrustStrip from "../components/sections/TrustStrip";
import AboutEcosystem from "../components/sections/AboutEcosystem";
import ValueProps from "../components/sections/ValueProps";
import AssetsSection from "../components/sections/AssetsSection";
import WhoCanPartner from "../components/sections/WhoCanPartner";
import PartnerBenefits from "../components/sections/PartnerBenefits";
import PartnerJourney from "../components/sections/PartnerJourney";
import PartnerCTA from "../components/sections/PartnerCTA";
import CustomerSection from "../components/sections/CustomerSection";
import HowItWorksTabs from "../components/sections/HowItWorksTabs";
import NetworkSection from "../components/sections/NetworkSection";
import DualCTA from "../components/DualCTA";
import CTASection from "../components/CTASection";

const TITLE = "BubbleXWash — Powering the Next Generation of Automobile Services";
const DESCRIPTION =
  "BubbleXWash connects customers with automobile service businesses — car wash, detailing, workshops and auto care — and helps partners unlock more demand through technology.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutEcosystem />
      <ValueProps />
      <AssetsSection />
      <WhoCanPartner />
      <PartnerBenefits />
      <PartnerJourney />
      <PartnerCTA />
      <CustomerSection />
      <HowItWorksTabs />
      <NetworkSection />
      <DualCTA />
      <CTASection />
    </>
  );
}
