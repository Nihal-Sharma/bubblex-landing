import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import AssetsSection from "../components/sections/AssetsSection";
import WhoCanPartner from "../components/sections/WhoCanPartner";
import PartnerBenefits from "../components/sections/PartnerBenefits";
import PartnerJourney from "../components/sections/PartnerJourney";
import PartnerCTA from "../components/sections/PartnerCTA";

export const Route = createFileRoute("/partners/")({
  component: PartnersOverview,
});

function PartnersOverview() {
  return (
    <>
      <PageHeader
        label="For automobile businesses"
        title="Turn the Capacity You Already Have Into More Opportunities."
        body="BubbleXWash connects your business with additional service demand and gives you the technology to manage it — bookings, services, earnings and performance in one place."
      />
      <AssetsSection />
      <WhoCanPartner />
      <PartnerBenefits />
      <PartnerJourney />
      <PartnerCTA />
    </>
  );
}
