import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import EcosystemFlow from "../components/EcosystemFlow";
import ValueProps from "../components/sections/ValueProps";
import AssetsSection from "../components/sections/AssetsSection";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";

const TITLE = "About BubbleXWash — Infrastructure for Automobile Services";
const DESCRIPTION =
  "BubbleXWash is a technology-driven automobile service platform connecting customers with service businesses and helping those businesses grow.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        label="What is BubbleXWash?"
        title="More Than a Car Wash."
        body="BubbleXWash is building an automobile-service ecosystem that connects customers with service providers while giving automobile businesses access to additional demand, operational technology and growth opportunities."
      />

      <section className="py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <h2 className="max-w-3xl text-2xl font-extrabold sm:text-3xl md:text-4xl">
              We connect automobile businesses with more opportunities to serve customers and grow.
            </h2>
          </Reveal>
          <div className="mt-16">
            <EcosystemFlow />
          </div>
        </div>
      </section>

      <ValueProps />
      <AssetsSection />
      <CTASection />
    </>
  );
}
