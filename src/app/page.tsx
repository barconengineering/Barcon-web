import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("/", {});
import Image from "next/image";
import Link from "next/link";
import { Icon, serviceIcons } from "@/components/icons";
import { ProjectCTA, TextLink } from "@/components/shared";
import { process, projects, services } from "@/lib/content";

import { BoxedInfrastructure } from "@/components/infrastructure-scene";

export default function Home() {
  const featured = [projects[0], projects[4], projects[6]];
  return (
    <>
      <section
        className="hero approved-hero"
        aria-label="Engineering with purpose"
      >
        <Image
          className="hero-image"
          src="/images/approved-water-point.png"
          alt="Illustration of an Ethiopian woman and girl collecting water from a brass tap into a yellow jerrycan, with an elevated water tank behind them"
          fill
          sizes="(max-width: 767px) 100vw, 64vw"
          preload
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow">Engineering with purpose</p>
          <h1>
            Engineering a<br />
            stronger Ethiopia.
          </h1>
          <p className="hero-description">
            Water supply, sanitation, energy, and civil infrastructure that
            connect communities and create lasting opportunity.
          </p>
          <div className="button-row">
            <Link href="/projects" className="button">
              Explore our projects <Icon name="diagonal" size={20} />
            </Link>
            <Link href="/services" className="hero-link">
              Our expertise <Icon name="arrow" size={20} />
            </Link>
          </div>
        </div>
      </section>
      <div className="proof-strip">
        <div className="container proof-inner">
          <div>
            <strong>2016</strong>
            <span>Established in Ethiopia</span>
          </div>
          <div>
            <strong>10</strong>
            <span>Selected project profiles</span>
          </div>
          <div>
            <strong>7</strong>
            <span>Areas of expertise</span>
          </div>
          <p>
            Local knowledge.
            <br />
            <span>Multidisciplinary capability.</span>
          </p>
        </div>
      </div>

      <section
        className="home-service-strip"
        aria-labelledby="home-services-title"
      >
        <div className="container">
          <h2 id="home-services-title" className="sr-only">
            Explore our seven areas of expertise
          </h2>
          <div className="home-service-cards">
            {services.map((service, index) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.slug}
                className="home-service-card"
              >
                <div className="home-service-photo">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 600px) 48vw, (max-width: 1100px) 24vw, 14vw"
                  />
                </div>
                <div className="home-service-label">
                  <Icon name={serviceIcons[index]} size={23} />
                  <h3>{service.title}</h3>
                  <Icon name="diagonal" size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container home-about">
        <div>
          <p className="eyebrow">Built on purpose</p>
          <h2>
            Strong foundations.
            <br />
            Lasting impact.
          </h2>
        </div>
        <div className="home-about-copy">
          <p className="lead">
            Infrastructure is more than what we build. It’s what it makes
            possible.
          </p>
          <p>
            Since 2016, Barcon Engineering has grown from a water works
            contractor into a multidisciplinary engineering company. We bring
            practical experience and a shared commitment to Ethiopia’s
            development.
          </p>
          <TextLink href="/about">Meet Barcon Engineering</TextLink>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="section-heading">
            <h2>
              Connected expertise.
              <br />
              Complete solutions.
            </h2>
            <p>
              From water at the source to energy at the point of need, our
              disciplines work together.
            </p>
          </div>
          <div className="expertise-layout">
            <Link
              href="/services/water-supply-sanitation"
              className="featured-service"
            >
              <div className="featured-service-image">
                <Image
                  src={services[0].image.src}
                  alt={services[0].image.alt}
                  loading="lazy"
                  fill
                  sizes="(max-width: 767px) 100vw, 40vw"
                />
              </div>
              <div className="featured-service-copy">
                <Icon name="water" size={32} />
                <h3>
                  Water supply
                  <br />& sanitation
                </h3>
                <p>
                  The foundation of our business. Complete systems that bring
                  reliable water access to communities.
                </p>
                <span className="text-link">
                  Explore water solutions <Icon name="arrow" size={20} />
                </span>
              </div>
            </Link>
            <div className="service-links">
              {services.slice(1).map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <span className="service-link-photo">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="80px"
                    />
                  </span>
                  <div>
                    <h3>{service.shortTitle}</h3>
                    <p>{service.summary}</p>
                  </div>
                  <Icon name="diagonal" size={21} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Selected experience</p>
          <h2>
            Engineering that
            <br />
            reaches further.
          </h2>
          <p>
            A closer look at the systems, places, and project scopes behind our
            work.
          </p>
        </div>
        <div className="selected-projects">
          {featured.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className={`selected-project selected-project-${index}`}
            >
              <div className="selected-top">
                <span className="category">{project.category}</span>
                <Icon name="diagonal" size={24} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.location}</p>
              <div className="selected-metric">
                <strong>{project.status}</strong>
                <span>{project.summary}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="section-end">
          <TextLink href="/projects">Explore all project experience</TextLink>
          <span>
            Delivered for government institutions and development partners.
          </span>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container responsible-layout">
          <BoxedInfrastructure />
          <div className="responsible-copy">
            <Icon name="leaf" size={36} />
            <h2>
              Responsible by design.
              <br />
              Accountable in delivery.
            </h2>
            <p>
              Quality, safety, and community wellbeing guide our approach.
              Careful planning starts with the people who will depend on each
              project.
            </p>
            <div className="responsibility-points">
              <span>
                <Icon name="verified" /> Quality assurance
              </span>
              <span>
                <Icon name="shield" /> People & site safety
              </span>
              <span>
                <Icon name="leaf" /> Environmental care
              </span>
            </div>
            <TextLink href="/approach">Our approach to delivery</TextLink>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading compact">
          <h2>
            A clear path from
            <br />
            plan to handover.
          </h2>
        </div>
        <div className="process-grid">
          {process.map((step, index) => (
            <article key={step.title}>
              <span className="process-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
