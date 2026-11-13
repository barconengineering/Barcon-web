import { pageMetadata } from "@/lib/site";
import { ProjectCTA } from "@/components/shared";
import { ServicesHero } from "./_components/services-hero";
import { ServiceRows } from "./_components/service-rows";
import "./services.css";
export const metadata = pageMetadata("/services", {
  title: "Our expertise",
  description:
    "Engineering and construction expertise in water supply, irrigation, buildings, gravel roads, electromechanical systems, solar pumping, and equipment supply.",
});
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceRows />
      <ProjectCTA />
    </>
  );
}
