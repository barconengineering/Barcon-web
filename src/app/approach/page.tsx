import { photos } from "@/lib/photos";
import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { Illustration, PageIntro, ProjectCTA } from "@/components/shared";
import { process } from "@/lib/content";
export const metadata: Metadata = pageMetadata("/approach", { title: "Our approach" });
const commitments = [
  { icon: "verified" as const, title: "Quality at every stage", text: "Project Quality Plans, Inspection and Test Plans, and method statements turn requirements into practical controls.", items: ["Design and specification reviews before construction", "Material inspection, testing, and supplier verification", "Documented site inspections and corrective actions", "Performance testing and commissioning before handover"] },
  { icon: "shield" as const, title: "People and safety first", text: "Site-specific planning protects workers and the communities around each project.", items: ["Risk assessment and safe work procedures", "PPE, daily toolbox talks, and safety briefings", "Emergency preparedness and first aid", "Incident and near-miss reporting"] },
  { icon: "leaf" as const, title: "Care for the environment", text: "Environmental measures are built around the conditions and needs of each site.", items: ["Construction waste and material management", "Dust, noise, and erosion control", "Protection of water resources and ecosystems", "Site restoration after construction"] },
  { icon: "globe" as const, title: "Responsible partnerships", text: "Clear communication and accountable governance support long-term trust.", items: ["Community engagement and grievance mechanisms", "Prevention of child labor, forced labor, and harassment", "Schedule, cost, and project-risk monitoring", "Zero tolerance for fraud and corruption"] },
];
export default function ApproachPage() {
  return <><PageIntro label="Our approach" title="Built carefully. Delivered responsibly.">Practical planning, verified quality, and respect for people and the environment guide how we work.</PageIntro>
    <section className="section container"><div className="section-heading"><h2>A disciplined process.<br />Room for real-world conditions.</h2><p>Frequent site coordination and lean construction practices help our teams adapt, use resources carefully, and reduce rework.</p></div><div className="process-grid">{process.map((p, i) => <article key={p.title}><span className="process-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></section>
    <section className="section section-tinted"><div className="container commitment-grid">{commitments.map(c => <article key={c.title}><Icon name={c.icon} size={34} /><h2>{c.title}</h2><p>{c.text}</p><ul>{c.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>
    <section className="section container responsible-layout"><Illustration name={photos.solarCommunity.src} alt={photos.solarCommunity.alt} /><div><h2>Progress with<br />communities in mind.</h2><p className="lead">Reliable water, productive agriculture, and better connections serve people beyond the project boundary.</p><p>Our social management approach includes stakeholder communication, community health and safety, and accessible grievance mechanisms for workers and host communities.</p></div></section><ProjectCTA /></>;
}
