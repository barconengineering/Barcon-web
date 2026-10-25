import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";
import { Brand } from "./brand";
import { Icon } from "./icons";

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="text-link" href={href}>{children}<Icon name="arrow" size={20} /></Link>;
}
export function PageIntro({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return <section className="page-intro"><div className="container"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="intro-description">{children}</p></div></section>;
}
export function Illustration({ name, alt, className = "", overlay }: { name: string; alt: string; className?: string; overlay?: React.ReactNode }) {
  return <figure className={`illustration ${className}`}><div className="image-frame"><Image src={name.startsWith("/") ? name : `/images/${name}.png`} fill sizes="(max-width: 767px) 100vw, 55vw" alt={alt} loading="lazy" />{overlay}</div></figure>;
}
export function ProjectCTA() {
  return <section className="contact-band"><div className="container contact-band-inner"><div><p className="eyebrow">Build with Barcon</p><h2>Let’s move your<br />project forward.</h2></div><div><p>Bring us your requirements. We’ll bring the engineering, experience, and commitment to help deliver them.</p><Link href="/contact" className="button">Discuss a project <Icon name="diagonal" size={20} /></Link></div></div></section>;
}
export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-main"><div className="footer-brand"><Brand /><p>Engineering with purpose.<br />Building for communities across Ethiopia.</p></div>
      <div><h3>Explore</h3><Link href="/about">About Barcon</Link><Link href="/services">Our expertise</Link><Link href="/projects">Project experience</Link><Link href="/approach">Quality & responsibility</Link></div>
      <div className="footer-contact"><h3>Get in touch</h3><a href={`mailto:${company.email}`}>{company.email}</a><a href={`tel:${company.phoneHref}`}>{company.phone}</a><p>{company.address}<br />{company.city}</p></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Barcon Engineering. All rights reserved.</span><Link href="/privacy">Privacy</Link></div>
  </div></footer>;
}

