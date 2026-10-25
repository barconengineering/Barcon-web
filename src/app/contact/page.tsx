import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { company } from "@/lib/content";
import { Icon } from "@/components/icons";
import { PageIntro } from "@/components/shared";
import { ContactForm } from "@/components/contact-form";
export const metadata: Metadata = pageMetadata("/contact", { title: "Contact us", description: "Contact Barcon Engineering in Addis Ababa about water, irrigation, building, road, electromechanical, solar, or import and export projects." });
export default function ContactPage() {
  return <><PageIntro label="Contact Barcon" title="Every project starts with a conversation.">Share your scope, ask a technical question, or explore how we can work together.</PageIntro><section className="section container contact-layout"><aside className="contact-details"><h2>Let’s connect.</h2><div><Icon name="email" /><h3>Email</h3><a href={`mailto:${company.email}`}>{company.email}</a></div><div><Icon name="phone" /><h3>Phone</h3><a href={`tel:${company.phoneHref}`}>{company.phone}</a></div><div><Icon name="pin" /><h3>Head office</h3><p>{company.address}<br />{company.locality}<br />{company.city}</p><a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${company.address}, ${company.locality}, ${company.city}`)}`} target="_blank" rel="noopener noreferrer">Search address on Maps <Icon name="diagonal" size={17} /></a></div></aside><ContactForm /></section></>;
}
