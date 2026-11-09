"use client";
import { useState } from "react";
import { projects } from "@/lib/content";
import { ProjectCard } from "./project-card";
const filters = [
  "All projects",
  "Water",
  "Irrigation",
  "Solar",
  "Roads",
] as const;
export function ProjectBrowser() {
  const [filter, setFilter] = useState<string>("All projects");
  const [search, setSearch] = useState("");
  const visible = projects.filter(
    (p) =>
      (filter === "All projects" || p.category === filter) &&
      `${p.title} ${p.client ?? ""} ${p.location ?? ""}`
        .toLowerCase()
        .includes(search.toLowerCase().trim()),
  );
  return (
    <>
      <div className="project-toolbar">
        <div
          className="filter-group"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={filter === f ? "active" : ""}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>
        <label className="project-search">
          <span className="sr-only">Search projects or locations</span>
          <input
            type="search"
            placeholder="Search projects or locations"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <p className="result-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"} shown
      </p>
      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
      {!visible.length && (
        <div className="empty-state">
          <h2>No matching projects</h2>
          <p>Try another project name, location, or service area.</p>
          <button
            className="button"
            type="button"
            onClick={() => {
              setFilter("All projects");
              setSearch("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
