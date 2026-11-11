"use client";
import { useState } from "react";
import { projects } from "@/lib/content";
import { Icon } from "./icons";
import { ProjectCard } from "./project-card";
const filters = [
  "All projects",
  "Water",
  "Irrigation",
  "Solar",
  "Roads",
] as const;
const statuses = ["All statuses", "Ongoing", "Completed"] as const;
export function ProjectBrowser() {
  const [filter, setFilter] = useState<string>("All projects");
  const [status, setStatus] = useState<string>("All statuses");
  const [search, setSearch] = useState("");
  const visible = projects.filter(
    (p) =>
      (filter === "All projects" || p.category === filter) &&
      (status === "All statuses" || p.status === status) &&
      `${p.title} ${p.client ?? ""} ${p.location ?? ""}`
        .toLowerCase()
        .includes(search.toLowerCase().trim()),
  );
  return (
    <>
      <div className="project-toolbar">
        <div className="project-filters">
          <div
            className="filter-group filter-category"
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
          <div
            className="filter-group filter-status"
            role="group"
            aria-label="Filter projects by status"
          >
            {statuses.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatus(s)}
                className={`filter-${s.split(" ").pop()?.toLowerCase()}${status === s ? " active" : ""}`}
                aria-pressed={status === s}
              >
                <span className="filter-dot" aria-hidden="true" />
                {s}
              </button>
            ))}
          </div>
        </div>
        <label className="project-search">
          <span className="sr-only">Search projects or locations</span>
          <Icon name="search" size={18} />
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
              setStatus("All statuses");
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
