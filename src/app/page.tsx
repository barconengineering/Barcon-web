import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import { process, projects, services } from "@/lib/content";
import { Icon, serviceIcons } from "@/components/icons";
import { ProjectCTA, TextLink } from "@/components/shared";
import { ProjectCard } from "@/components/project-card";
export const metadata = pageMetadata("/", {});
export default function Home() {
  const featured = [projects[0], projects[6], projects[9]];
  return (
    <>
      <section className="water-hero" aria-labelledby="home-title">
        <div className="container water-hero-layout">
          <div className="water-hero-copy">
            <p className="eyebrow">Water. Infrastructure. Community.</p>
            <h1 id="home-title">
              Engineering a<br />
              stronger Ethiopia.
            </h1>
            <span className="hero-rule" aria-hidden="true" />
            <p>
              An Ethiopian multidisciplinary engineering and construction
              company delivering sustainable infrastructure, with a focus on
              water supply and sanitation for healthier, more resilient
              communities.
            </p>
            <div className="button-row">
              <Link href="/projects" className="button">
                Explore our projects <Icon name="diagonal" size={20} />
              </Link>
              <TextLink href="/contact">Discuss a project</TextLink>
            </div>
          </div>
          <figure className="water-hero-visual">
            <Image
              src="/images/approved-water-point.png"
              alt="Illustration of an Ethiopian woman and girl at a water point, with water flowing from a brass tap into a yellow jerrycan and an elevated tank behind them"
              fill
              sizes="(max-width: 767px) 100vw, 60vw"
              preload
            />
            <figcaption>Illustration of community water access</figcaption>
          </figure>
        </div>
      </section>
      <section className="home-expertise" aria-labelledby="expertise-title">
        <div className="container">
          <div className="home-facts">
            <div>
              <strong>2016</strong>
              <span>Established in Ethiopia</span>
            </div>
            <div>
              <strong>7</strong>
              <span>Areas of expertise</span>
            </div>
            <p>
              Engineering with purpose.
              <br />
              <span>Built around people.</span>
            </p>
          </div>
          <h2 id="expertise-title" className="sr-only">
            Our seven areas of expertise
          </h2>
          <div className="expertise-cards">
            {services.map((service, index) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.slug}
                className="expertise-card"
              >
                <div className="expertise-photo">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 500px) 50vw, (max-width: 1000px) 25vw, 15vw"
                  />
                </div>
                <div className="expertise-caption">
                  <Icon name={serviceIcons[index]} size={25} />
                  <h3>{service.title}</h3>
                  <Icon name="diagonal" size={18} />
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
            Water at the heart.
            <br />
            People at the centre.
          </h2>
        </div>
        <div className="home-about-copy">
          <p className="lead">Reliable infrastructure changes everyday life.</p>
          <p>
            Since 2016, Barcon Engineering has brought hydraulic, civil and
            electromechanical expertise together to serve communities across
            Ethiopia. From a public water point to a gravel road, our work
            starts with the people who depend on it.
          </p>
          <TextLink href="/about">Meet Barcon Engineering</TextLink>
        </div>
      </section>
      <section className="section section-tinted">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Selected experience</p>
              <h2>Work on the ground.</h2>
            </div>
            <TextLink href="/projects">View all ten projects</TextLink>
          </div>
          <div className="project-grid">
            {featured.map((project) => (
              <ProjectCard project={project} key={project.slug} heading="h3" />
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Our approach</p>
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
        <div className="section-end">
          <TextLink href="/approach">Our approach to delivery</TextLink>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
