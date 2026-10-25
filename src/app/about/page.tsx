import Image from "next/image";
import { photos } from "@/lib/photos";
import "./qualifications.css";
import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { Illustration, PageIntro, ProjectCTA } from "@/components/shared";
import { HeroVideo } from "@/components/hero-video";
import { communityVideo, mission, qualifications, values, valuesIntro, vision } from "@/lib/content";
export const metadata: Metadata = pageMetadata("/about", { title: "About us", description: "Founded in 2016 as a water works contractor, Barcon Engineering has grown into a Multi-Disciplinary Ethiopian engineering company with more than 19 projects nationwide." });
export default function AboutPage() {
  return <>
    <PageIntro label="About Barcon" title="A shared purpose. A stronger foundation.">An Ethiopian engineering company built on practical expertise, collaborative teams, and a commitment to the communities we serve.</PageIntro>
    <section className="section container editorial-layout"><div className="editorial-copy"><h2>Rooted in water.<br />Growing with Ethiopia.</h2><p className="lead">Barcon Engineering began as a water works contractor in 2016.</p><p>Our work has since expanded into irrigation, buildings, roads and bridges, electromechanical installations, solar systems, and import and export. More than 19 projects across Ethiopia reflect that growth.</p><p>Our multidisciplinary teams bring engineers, technical specialists, project managers, site supervisors, and support staff together around the requirements of each project.</p></div><Illustration name={photos.reservoir.src} alt={photos.reservoir.alt} /></section>
    <section className="section section-tinted"><div className="container leadership-layout"><div className="leader-photo"><Image src="/images/founder-photo.jpg" alt="Bilhan Haile, Founder and General Manager of Barcon Engineering, in the Barcon office" fill sizes="(max-width: 767px) 340px, (max-width: 900px) 280px, 380px" /></div><div><p className="eyebrow">Leadership</p><h2>Bilhan Haile</h2><p className="leader-role">Founder & General Manager</p><p>Bilhan guides Barcon’s growth in water supply, irrigation, building, and road projects. His focus is on quality, integrity, and infrastructure that improves people’s lives.</p><p>The wider team shares a culture of practical problem-solving, open communication, mentorship, and responsibility. We learn from each project and support one another through changing site conditions.</p></div></div></section>
    <section className="section container mission-grid"><article><span className="eyebrow">Our mission</span><h2>Infrastructure that<br />supports progress.</h2><p>{mission}</p></article><article><span className="eyebrow">Our vision</span><h2>Development with<br />more people included.</h2><p>{vision}</p></article></section>
    <section className="section section-tinted"><div className="container"><div className="section-heading"><h2>The values behind<br />every decision.</h2><p>{valuesIntro}</p></div><div className="values-grid">{values.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="hero hero-video-version community-hero" aria-labelledby="community-title">
      <HeroVideo sources={[{ src: communityVideo.src, type: "video/mp4" }]} poster={communityVideo.poster} priority={false} sound />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow">{communityVideo.eyebrow}</p>
        <h2 id="community-title">{communityVideo.title}</h2>
        <p className="hero-description">{communityVideo.text}</p>
        <p className="community-caption">{communityVideo.caption}</p>
      </div>
    </section>
    <section className="section container" id="qualifications" aria-labelledby="qualifications-title"><div className="section-heading compact"><h2 id="qualifications-title">Our qualifications</h2></div><div className="commitment-grid qualification-cards">{qualifications.map((item) => <article key={item.title}><h3>{item.title}</h3>{item.issuer && <p>{item.issuer}</p>}</article>)}</div></section>
    <ProjectCTA />
  </>;
}
