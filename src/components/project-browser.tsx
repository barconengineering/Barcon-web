"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/content";
import { Icon } from "./icons";
const filters = ["All projects", "Water & sanitation", "Solar & irrigation", "Roads"] as const;
export function ProjectBrowser() {
  const [filter, setFilter] = useState<string>("All projects");
  const [search, setSearch] = useState("");
  const visible = projects.filter(p => (filter === "All projects" || p.category === filter) && `${p.title} ${p.client} ${p.location}`.toLowerCase().includes(search.toLowerCase().trim()));
  return <>
    <div className="project-toolbar"><div className="filter-group" aria-label="Filter projects">{filters.map(f => <button key={f} onClick={() => setFilter(f)} className={filter === f ? "active" : ""} aria-pressed={filter === f}>{f}</button>)}</div><label className="project-search"><span className="sr-only">Search projects</span><input type="search" placeholder="Search projects or locations" value={search} onChange={e => setSearch(e.target.value)} /></label></div>
    <p className="result-count" aria-live="polite">{visible.length} {visible.length === 1 ? "project" : "projects"} shown</p>
    <div className="project-grid">{visible.map(p => <Link key={p.slug} href={`/projects/${p.slug}`} className="project-card"><div className="project-card-top"><span className="category">{p.category}</span><Icon name="diagonal" /></div><h2>{p.title}</h2><p className="project-location"><Icon name="pin" size={17} />{p.location}</p><p>{p.summary}</p><div className="project-card-metrics">{p.metrics.map(m => <div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}</div><span className="project-card-link">View project <Icon name="arrow" size={18} /></span></Link>)}</div>
    {!visible.length && <div className="empty-state"><h2>No matching projects</h2><p>Try another project name, location, or service area.</p><button className="button" onClick={() => { setFilter("All projects"); setSearch(""); }}>Clear filters</button></div>}
  </>;
}
