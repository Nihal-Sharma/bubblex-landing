import SectionHeading from "../SectionHeading";
import ServiceCategory from "../ServiceCategory";

const CATEGORIES = [
  { index: "01", name: "Car Washes", body: "Connect existing service capacity with additional demand." },
  { index: "02", name: "Detailing Businesses", body: "Create more opportunities around professional vehicle care." },
  { index: "03", name: "Workshops", body: "Connect customers with relevant automobile services." },
  { index: "04", name: "Auto Care Businesses", body: "Use existing infrastructure more effectively." },
  { index: "05", name: "Other Automobile Services", body: "Create a scalable path for additional service categories." },
];

export default function WhoCanPartner() {
  return (
    <section className="py-20 md:py-28">
      <div className="shell">
        <SectionHeading label="Who can partner?" title="Built for Automobile Businesses." />
        <div className="mt-14 border-b border-hairline">
          {CATEGORIES.map((c, i) => (
            <ServiceCategory key={c.index} {...c} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
