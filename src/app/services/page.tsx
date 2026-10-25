import Image from "next/image";
import { photos, type SitePhoto } from "@/lib/photos";
import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon, serviceIcons } from "@/components/icons";
import { PageIntro, ProjectCTA } from "@/components/shared";
import { services } from "@/lib/content";
export const metadata: Metadata = pageMetadata("/services", { title: "Our expertise", description: "Multi-Disciplinary engineering, construction, and supply capabilities across water, irrigation, buildings, roads, electromechanical systems, solar energy, and import and export." });
const servicePhotos: Record<string, SitePhoto> = {
  'water-supply-sanitation': photos.reservoirSite,
  irrigation: photos.irrigation,
  buildings: photos.generatorHouse,
  'roads-bridges': photos.gravelRoad,
  electromechanical: photos.pumpStation,
  'solar-energy': photos.solarCommunity,
};
export default function ServicesPage() {
  return <><PageIntro label="Our expertise" title="Multi-Disciplinary. One delivery mindset.">Engineering, construction, and supply capabilities that work together from planning through commissioning.</PageIntro><section className="section container"><div className="services-directory">{services.map((service, index) => <Link key={service.slug} href={`/services/${service.slug}`} className={`directory-service ${servicePhotos[service.slug] ? "directory-service-with-photo" : ""}`} >{servicePhotos[service.slug] && <div className="directory-photo"><Image src={servicePhotos[service.slug].src} loading="lazy" alt={servicePhotos[service.slug].alt} fill sizes="(max-width: 767px) 100vw, 220px" /></div>}<Icon name={serviceIcons[index]} size={38} /><div><h2>{service.title}</h2><p>{service.summary}</p></div><Icon name="diagonal" size={25} /></Link>)}</div></section><ProjectCTA /></>;
}
