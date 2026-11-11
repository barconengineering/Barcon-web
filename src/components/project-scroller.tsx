"use client";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { featuredProjects } from "@/lib/project-navigation";
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll";
import { Icon } from "./icons";
import { TextLink } from "./shared";

export function ProjectScroller({
  projects,
}: {
  projects: ReturnType<typeof featuredProjects>;
}) {
  const {
    section,
    viewport,
    track,
    bar,
    index,
    counter,
    slideLabel,
    next,
    previous,
    onFocus,
  } = useHorizontalScroll(projects.length);
  return (
    <div
      className="project-scroller"
      ref={section}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      style={{ "--slide-count": projects.length } as CSSProperties}
    >
      <div className="project-scroller-viewport" ref={viewport}>
        <div className="project-scroller-track" ref={track} onFocus={onFocus}>
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="project-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={slideLabel(i)}
            >
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                preload={i === 0}
                sizes="100vw"
                style={{ objectPosition: project.cover.position }}
              />
              <div className="project-slide-shade" aria-hidden="true" />
              <div className="container project-slide-content">
                <div className="project-slide-copy">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <div className="project-slide-meta">
                    {project.location && (
                      <span className="project-location">
                        <Icon name="pin" size={17} />
                        {project.location}
                      </span>
                    )}
                    <span
                      className={`project-status status-${project.status.toLowerCase()}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p>{project.summary}</p>
                  {project.delivery && (
                    <p className="project-slide-delivery">{project.delivery}</p>
                  )}
                  <TextLink href={`/projects/${project.slug}`}>
                    View project
                  </TextLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container project-scroller-controls">
          <span className="project-scroller-counter" aria-live="polite">
            {counter}
          </span>
          <span className="project-scroller-progress" aria-hidden="true">
            <span ref={bar} />
          </span>
          <button
            type="button"
            className="project-scroller-button"
            onClick={previous}
            disabled={index === 0}
            aria-label="Previous project"
          >
            <Icon name="previous" size={22} />
          </button>
          <button
            type="button"
            className="project-scroller-button"
            onClick={next}
            disabled={index === projects.length - 1}
            aria-label="Next project"
          >
            <Icon name="next" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
