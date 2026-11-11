import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import { Icon, serviceIcons } from "@/components/icons";
import { PageIntro, ProjectCTA } from "@/components/shared";
import { services } from "@/lib/content";
export const metadata = pageMetadata("/services", {
  title: "Our expertise",
  description:
    "Engineering and construction expertise in water supply, irrigation, buildings, gravel roads, electromechanical systems, solar pumping, and equipment supply.",
});
export default function ServicesPage() {
  return (
    <>
      <PageIntro
        label="Our expertise"
        title="Seven disciplines. One shared purpose."
      >
        Engineering, construction and supply capabilities that connect water,
        energy and communities.
      </PageIntro>
      <section className="section container">
        <div className="services-directory">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="directory-service directory-service-with-photo"
            >
              <div className="directory-photo">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 220px"
                />
              </div>
              <Icon name={serviceIcons[index]} size={32} />
              <div>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
              </div>
              <Icon name="diagonal" size={24} />
            </Link>
          ))}
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
