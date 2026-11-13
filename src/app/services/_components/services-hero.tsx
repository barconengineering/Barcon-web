import { Icon } from "@/components/icons";
import { qualifications, servicesPage } from "@/lib/content";

export function ServicesHero() {
  return (
    <section className="svc-hero">
      <div className="container">
        <p className="eyebrow">{servicesPage.eyebrow}</p>
        <h1>{servicesPage.title}</h1>
        <p className="intro-description">{servicesPage.intro}</p>
        <p className="svc-hero-licences">
          <Icon name="verified" size={20} />
          <span>
            <strong>{servicesPage.licenceLabel}:</strong>{" "}
            {qualifications.map((item) => item.shortTitle).join(" · ")}
          </span>
        </p>
      </div>
    </section>
  );
}
