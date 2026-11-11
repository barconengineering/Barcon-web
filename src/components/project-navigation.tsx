import Link from "next/link";
import type { Project } from "@/lib/content";
import { adjacentProjects, relatedProjects } from "@/lib/project-navigation";
import { ProjectCard } from "./project-card";

export function ProjectNavigation({ project }: { project: Project }) {
  const { previous, next } = adjacentProjects(project.slug);
  const related = relatedProjects(project);
  return (
    <section className="section container project-navigation">
      <nav className="project-pager" aria-label="Project navigation">
        <Link href={`/projects/${previous.slug}`} rel="prev">
          <span>
            <span aria-hidden="true">‹</span> Previous project
          </span>
          <strong>{previous.title}</strong>
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          rel="next"
          className="project-pager-next"
        >
          <span>
            Next project <span aria-hidden="true">›</span>
          </span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
      <div className="section-heading compact">
        <h2>More projects</h2>
      </div>
      <div className="project-grid">
        {related.map((item) => (
          <ProjectCard project={item} heading="h3" key={item.slug} />
        ))}
      </div>
    </section>
  );
}
