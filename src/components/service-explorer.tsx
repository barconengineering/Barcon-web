"use client";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { useServiceScroll } from "@/hooks/use-service-scroll";
import { Icon, serviceIcons } from "./icons";

export function ServiceExplorer() {
  const { list, active, isWarm, itemProps } = useServiceScroll(
    services.length,
  );
  const current = services[active];
  return (
    <div className="expertise-layout">
      <div className="service-preview">
        <div className="service-preview-media">
          {services.map(
            (service, i) =>
              isWarm(i) && (
                <Image
                  key={service.slug}
                  src={service.image.src}
                  alt=""
                  fill
                  sizes="40vw"
                  data-active={i === active || undefined}
                  style={{ objectPosition: service.image.position }}
                />
              ),
          )}
        </div>
        <div className="service-preview-copy">
          <Icon key={`icon-${active}`} name={serviceIcons[active]} size={32} />
          <p className="service-preview-title" aria-live="polite">
            <span key={active}>{current.title}</span>
          </p>
          <p key={`summary-${active}`} className="service-preview-summary">
            {current.summary}
          </p>
          <Link
            key={`link-${active}`}
            href={`/services/${current.slug}`}
            className="text-link"
          >
            Explore {current.title} <Icon name="arrow" size={20} />
          </Link>
        </div>
      </div>
      <div className="service-links" ref={list}>
        {services.map((service, i) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            {...itemProps(i)}
          >
            <span className="service-link-photo">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(max-width: 767px) 82vw, (max-width: 1023px) 45vw, 80px"
                style={{ objectPosition: service.image.position }}
              />
            </span>
            <div>
              <span className="service-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </div>
            <Icon name="diagonal" size={21} />
          </Link>
        ))}
      </div>
    </div>
  );
}
