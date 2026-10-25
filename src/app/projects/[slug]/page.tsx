import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { Icon } from "@/components/icons";
import { PhotoGallery } from "@/components/photo-gallery";
import { ProjectCTA, TextLink } from "@/components/shared";
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = projects.find(p => p.slug === slug);
  return pageMetadata(`/projects/${slug}`, { title: project?.title ?? "Project", description: project?.summary });
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  return <><section className="page-intro project-intro"><div className="container"><Link className="breadcrumb" href="/projects">Project experience / {project.category}</Link><h1>{project.title}</h1><p className="intro-description">{project.summary}</p><p className="project-location"><Icon name="pin" size={20} />{project.location}</p></div></section>
    <section className="section container detail-layout"><div><h2>Project at a glance</h2><div className="project-facts"><div><span>Client / employer</span><strong>{project.client}</strong></div><div><span>Sector</span><strong>{project.category}</strong></div><div><span>Location</span><strong>{project.location}</strong></div></div>{project.record && <><div className="project-facts"><div><span>Delivery arrangement</span><strong>{project.record.delivery}</strong></div>{project.record.contractDate && <div><span>Contract date</span><strong>{project.record.contractDate}</strong></div>}</div>{project.record.status && <div className="outcome"><h3>{project.record.statusTitle ?? "Historical documented progress"}</h3><p>{project.record.status}</p></div>}</>}<div className="detail-metrics">{project.metrics.map(m => <div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}</div></div><div className="capability-panel"><h2>{project.record ? "Documented scope" : "Scope of works"}</h2>{project.record && <p>{project.record.scopeNote}</p>}<ul>{project.scope.map(s => <li key={s}><Icon name="check" size={19} />{s}</li>)}</ul></div></section>
    {project.gallery && <PhotoGallery images={project.gallery} label={`${project.title} photographs`} title="Project gallery" grid />}
    <div className="container section-end project-back"><TextLink href="/projects">Browse more projects</TextLink></div><ProjectCTA /></>;
}
