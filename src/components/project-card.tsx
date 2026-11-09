import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";
import { Icon } from "./icons";
export function ProjectCard({
  project,
  heading = "h2",
}: {
  project: Project;
  heading?: "h2" | "h3";
}) {
  const Heading = heading;
  const cover = project.cover ?? project.gallery?.[0];
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`project-card experience-card${cover ? " has-photo" : ""}`}
    >
      {cover && (
        <div className="project-cover">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="project-card-content">
        <div className="project-card-top">
          <span className="category">{project.category}</span>
          <span
            className={`project-status status-${project.status.toLowerCase()}`}
          >
            {project.status}
          </span>
        </div>
        <Heading>{project.title}</Heading>
        {project.location && (
          <p className="project-location">
            <Icon name="pin" size={17} />
            {project.location}
          </p>
        )}
        <p>{project.summary}</p>
        <span className="project-card-link">
          View project <Icon name="arrow" size={18} />
        </span>
      </div>
    </Link>
  );
}
