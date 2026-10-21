import Image from "next/image";
import { photos, type SitePhoto } from "@/lib/photos";
import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon, serviceIcons } from "@/components/icons";
import { PageIntro, ProjectCTA } from "@/components/shared";
import { services } from "@/lib/content";
export const metadata: Metadata = pageMetadata("/services", { title: "Our expertise" });
const servicePhotos: Record<string, SitePhoto> = {
  'water-supply-sanitation': photos.reservoir,
  irrigation: photos.irrigation,
  'roads-bridges': photos.grading,
  electromechanical: photos.solarArray,
  'solar-energy': photos.solarCommunity,
};
export default function ServicesPage() {
  return <><PageIntro label="Our expertise" title="Seven disciplines. One delivery mindset.">Engineering, construction, and supply capabilities that work together from planning through commissioning.</PageIntro><section className="section container"><div className="services-directory">{services.map((service, index) => <Link key={service.slug} href={`/services/${service.slug}`} className={`directory-service ${servicePhotos[service.slug] ? "directory-service-with-photo" : ""}`} >{servicePhotos[service.slug] && <div className="directory-photo"><Image src={servicePhotos[service.slug].src} alt={servicePhotos[service.slug].alt} fill sizes="(max-width: 767px) 100vw, 220px" /></div>}<Icon name={serviceIcons[index]} size={38} /><div><h2>{service.title}</h2><p>{service.summary}</p></div><Icon name="diagonal" size={25} /></Link>)}</div></section><ProjectCTA /></>;
}
