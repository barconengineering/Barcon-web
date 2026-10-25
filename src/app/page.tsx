import { HeroVideo } from "@/components/hero-video";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("/", {});
import Image from "next/image";
import { photos } from "@/lib/photos";
import Link from "next/link";
import { Icon, serviceIcons } from "@/components/icons";
import { ProjectCTA, TextLink } from "@/components/shared";
import { process, projects, services } from "@/lib/content";

import { BoxedInfrastructure } from '@/components/infrastructure-scene';


export default function Home() {
  return <>
    <section className="hero hero-video-version" aria-label="Engineering with purpose">
      <HeroVideo />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow">Engineering with purpose</p>
        <h1>Engineering a<br />stronger Ethiopia.</h1>
        <p className="hero-description">Water, energy, and civil infrastructure that connect communities and create lasting opportunity.</p>
        <div className="button-row"><Link href="/projects" className="button">Explore our projects <Icon name="diagonal" size={20} /></Link><Link href="/services" className="hero-link">Our expertise <Icon name="arrow" size={20} /></Link></div>
      </div>
    </section>
    <div className="proof-strip"><div className="container proof-inner"><div><strong>2016</strong><span>Established in Ethiopia</span></div><div><strong>19+</strong><span>Projects delivered nationwide</span></div><div><strong>7</strong><span>Areas of expertise</span></div><p>Local knowledge.<br /><span>Multidisciplinary capability.</span></p></div></div>

    <section className="section container home-about">
      <div><p className="eyebrow">Built on purpose</p><h2>Strong foundations.<br />Lasting impact.</h2></div>
      <div className="home-about-copy"><p className="lead">Infrastructure is more than what we build. It’s what it makes possible.</p><p>Since 2016, Barcon Engineering has grown from a water works contractor into a multidisciplinary engineering company. We bring practical experience, rigorous delivery, and a shared commitment to Ethiopia’s development.</p><TextLink href="/about">Meet Barcon Engineering</TextLink></div>
    </section>

    <section className="section section-tinted"><div className="container">
      <div className="section-heading"><h2>Connected expertise.<br />Complete solutions.</h2><p>From water at the source to energy at the point of need, our disciplines work together.</p></div>
      <div className="expertise-layout"><Link href="/services/water-supply-sanitation" className="featured-service"><div className="featured-service-image"><Image src={photos.reservoir.src} alt={photos.reservoir.alt} loading="lazy" fill sizes="(max-width: 767px) 100vw, 40vw" /></div><div className="featured-service-copy"><Icon name="water" size={32} /><h3>Water supply<br />& sanitation</h3><p>The foundation of our business. Complete systems that bring reliable water access to communities.</p><span className="text-link">Explore water solutions <Icon name="arrow" size={20} /></span></div></Link>
        <div className="service-links">{services.slice(1).map((service, index) => <Link key={service.slug} href={`/services/${service.slug}`}><Icon name={serviceIcons[index + 1]} size={28} /><div><h3>{service.shortTitle}</h3><p>{service.summary}</p></div><Icon name="diagonal" size={21} /></Link>)}</div>
      </div>
    </div></section>

    <section className="section container">
      <div className="section-heading"><p className="eyebrow">Selected experience</p><h2>Engineering that<br />reaches further.</h2><p>A closer look at the systems, places, and project scopes behind our work.</p></div>
      <div className="selected-projects">{projects.slice(0, 3).map((project, index) => <Link href={`/projects/${project.slug}`} key={project.slug} className={`selected-project selected-project-${index}`}><div className="selected-top"><span className="category">{project.category}</span><Icon name="diagonal" size={24} /></div><h3>{project.title}</h3><p>{project.location}</p><div className="selected-metric"><strong>{project.metrics[0].value}</strong><span>{project.metrics[0].label}</span></div></Link>)}</div>
      <div className="section-end"><TextLink href="/projects">Explore all project experience</TextLink><span>Delivered for government institutions and development partners.</span></div>
    </section>

    <section className="section section-tinted"><div className="container responsible-layout"><BoxedInfrastructure /><div className="responsible-copy"><Icon name="leaf" size={36} /><h2>Responsible by design.<br />Accountable in delivery.</h2><p>Quality, safety, and community wellbeing are part of every stage. We plan carefully, verify our work, and consider the people who will depend on it.</p><div className="responsibility-points"><span><Icon name="verified" /> Quality assurance</span><span><Icon name="shield" /> People & site safety</span><span><Icon name="leaf" /> Environmental care</span></div><TextLink href="/approach">Our approach to delivery</TextLink></div></div></section>

    <section className="section container"><div className="section-heading compact"><h2>A clear path from<br />plan to handover.</h2></div><div className="process-grid">{process.map((step, index) => <article key={step.title}><span className="process-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
    <ProjectCTA />
  </>;
}

