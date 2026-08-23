import { createFileRoute, Outlet } from "@tanstack/react-router";

const TITLE = "Partner With BubbleXWash — Grow Your Automobile Business";
const DESCRIPTION =
  "Car washes, detailing businesses, workshops and auto care businesses: connect existing capacity with additional demand through the BubbleXWash partner platform.";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: PartnersLayout,
});

function PartnersLayout() {
  return <Outlet />;
}
