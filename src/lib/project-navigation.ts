import { projects, type Project } from "./content";
import type { Crumb } from "./structured-data";

export function adjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const count = projects.length;
  return {
    previous: projects[(index - 1 + count) % count],
    next: projects[(index + 1) % count],
  };
}

export function relatedProjects(current: Project, limit = 3) {
  const others = projects.filter((project) => project.slug !== current.slug);
  return [
    ...others.filter((project) => project.category === current.category),
    ...others.filter((project) => project.category !== current.category),
  ].slice(0, limit);
}

export function projectBreadcrumbs(project: Project): Crumb[] {
  return [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: project.title, href: `/projects/${project.slug}` },
  ];
}
