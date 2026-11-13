import Image from "next/image";
import Link from "next/link";
import { Icon, serviceIcons } from "@/components/icons";
import { TextLink } from "@/components/shared";
import { serviceRows } from "../_lib/service-rows";
import { RevealRow } from "./reveal-row";

export function ServiceRows() {
  return (
    <div className="container svc-rows">
      {serviceRows.map((service, index) => (
        <RevealRow key={service.slug} id={service.slug} labelledBy={`${service.slug}-title`}>
          <div className="svc-row-photo">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectPosition: service.image.position }}
            />
            <Link href={`/services/${service.slug}`} className="svc-row-photo-link" tabIndex={-1} aria-hidden="true" />
          </div>
          <div className="svc-row-body">
            <Icon name={serviceIcons[index]} size={36} className="svc-row-icon" />
            <h2 id={`${service.slug}-title`}>{service.title}</h2>
            <p className="svc-row-summary">{service.summary}</p>
            <ul className="svc-chips" aria-label={`${service.shortTitle} capabilities`}>
              {service.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
            {service.licence && (
              <a className="project-status status-completed svc-licence" href={service.licence.document}>
                <Icon name="verified" size={18} />
                {service.licence.shortTitle} licence (PDF)
              </a>
            )}
            <TextLink href={`/services/${service.slug}`}>Explore {service.title}</TextLink>
          </div>
        </RevealRow>
      ))}
    </div>
  );
}
