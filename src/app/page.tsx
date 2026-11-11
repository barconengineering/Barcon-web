import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("/", {});
import Image from "next/image";
import Link from "next/link";
import { Icon, serviceIcons, statIcons } from "@/components/icons";
import { ProjectCTA, TextLink } from "@/components/shared";
import { homeStats, process, services } from "@/lib/content";
import { featuredProjects } from "@/lib/project-navigation";
import { ProjectScroller } from "@/components/project-scroller";

import { ResponsibleSection } from "@/components/responsible-section";
import { ServiceExplorer } from "@/components/service-explorer";

export default function Home() {
  return (
    <>
      <section className="hero landing-hero" aria-labelledby="landing-title">
        <Image
          className="landing-hero-image"
          src="/images/approved-water-point.png"
          alt="Illustration of an Ethiopian woman and girl collecting water from a brass tap into a yellow jerrycan, with an elevated water tank behind them"
          fill
          sizes="(max-width: 767px) 100vw, 72vw"
          preload
        />
        <div className="landing-hero-shade" aria-hidden="true" />
        <div className="container hero-content">
          <h1 id="landing-title">
            Engineering a<br />
            stronger Ethiopia.
          </h1>
          <span className="landing-accent" aria-hidden="true" />
          <p className="hero-description">
            An Ethiopian multidisciplinary engineering and construction company
            delivering sustainable infrastructure, with a focus on water supply
            and sanitation for healthier, more resilient communities.
          </p>
        </div>
        <div className="landing-band">
          <div className="container landing-stats">
            {homeStats.map((stat) => (
              <div key={stat.id}>
                <Icon name={statIcons[stat.id]} size={40} />
                <p>
                  {stat.labelFirst && <span>{stat.label}</span>}
                  <strong>{stat.value}</strong>
                  {!stat.labelFirst && <span>{stat.label}</span>}
                </p>
              </div>
            ))}
          </div>
          <h2 className="sr-only">Our areas of expertise</h2>
          <ul className="landing-services">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="landing-service"
                >
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 767px) 160px, (max-width: 1100px) 200px, 15vw"
                  />
                  <span className="landing-service-label">
                    <Icon name={serviceIcons[index]} size={26} />
                    {service.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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
          <ServiceExplorer />
        </div>
      </section>

      <section className="section home-projects">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Selected experience</p>
            <h2>
              Engineering that
              <br />
              reaches further.
            </h2>
            <p>
              A closer look at the systems, places, and project scopes behind
              our work.
            </p>
          </div>
        </div>
        <ProjectScroller projects={featuredProjects()} />
        <div className="container section-end">
          <TextLink href="/projects">Explore all project experience</TextLink>
          <span>
            Delivered for government institutions and development partners.
          </span>
        </div>
      </section>

      <ResponsibleSection />

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
