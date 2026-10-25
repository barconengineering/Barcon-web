import { PhotoGallery } from "@/components/photo-gallery";
import { photos } from "@/lib/photos";
import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import { Icon, serviceIcons } from "@/components/icons";
import { ProjectCTA, TextLink } from "@/components/shared";
export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  return pageMetadata(`/services/${slug}`, { title: service?.title ?? "Service", description: service?.summary });
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  const index = services.indexOf(service);
  const galleries: Record<string, (typeof photos)[keyof typeof photos][]> = {
    'water-supply-sanitation': [photos.reservoir, photos.waterPoint],
    'roads-bridges': [photos.grading, photos.compaction, photos.earthRoad, photos.gravelRoad],
    'solar-energy': [photos.solarArray, photos.solarRows, photos.solarCommunity],
    irrigation: [photos.irrigation],
    buildings: [photos.generatorHouse, photos.boosterHouse, photos.pipeShed],
    electromechanical: [photos.solarArray, photos.solarRows],
  };
  return <><section className="page-intro"><div className="container"><Link href="/services" className="breadcrumb">Our expertise / {service.shortTitle}</Link><Icon name={serviceIcons[index]} size={42} /><h1>{service.title}</h1><p className="intro-description">{service.summary}</p></div></section>
    <section className="section container detail-layout"><div><h2>Expertise that<br />works on the ground.</h2><p className="lead">{service.description}</p><div className="outcome"><h3>What this makes possible</h3><p>{service.outcome}</p></div></div><div className="capability-panel"><h2>Our capabilities</h2><ul>{service.capabilities.map(c => <li key={c}><Icon name="check" size={19} />{c}</li>)}</ul></div></section>
    {galleries[service.slug] && <PhotoGallery images={galleries[service.slug]} label={`${service.title} photographs`} />}
    <section className="section container"><div className="section-heading compact"><h2>Built with a clear<br />standard of care.</h2><p>Design reviews, material verification, site inspections, and commissioning support dependable delivery.</p></div><TextLink href="/approach">See how we work</TextLink></section><ProjectCTA /></>;
}
