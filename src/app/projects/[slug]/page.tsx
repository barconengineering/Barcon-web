import { pageMetadata } from "@/lib/site";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { BentoGallery } from "@/components/bento-gallery";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProjectNavigation } from "@/components/project-navigation";
import { projectBreadcrumbs } from "@/lib/project-navigation";
import { PageIntro, ProjectCTA, TextLink } from "@/components/shared";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return pageMetadata(`/projects/${slug}`, {
    title: project?.title ?? "Project",
    description: project?.summary,
  });
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <>
      <PageIntro
        label={`${project.category} / ${project.status}`}
        title={project.title}
        breadcrumb={<Breadcrumb items={projectBreadcrumbs(project)} />}
      >
        {project.summary}
      </PageIntro>
      <section className="section container project-overview">
        <div>
          <p className="eyebrow">Project overview</p>
          <h2>
            Infrastructure
            <br />
            with a purpose.
          </h2>
          <TextLink href="/projects">All project experience</TextLink>
        </div>
        <dl className="project-facts-list">
          <div>
            <dt>Status</dt>
            <dd>
              <span
                className={`project-status status-${project.status.toLowerCase()}`}
              >
                {project.status}
              </span>
            </dd>
          </div>
          <div>
            <dt>Sector</dt>
            <dd>{project.category}</dd>
          </div>
          {project.location && (
            <div>
              <dt>Location</dt>
              <dd>{project.location}</dd>
            </div>
          )}
          {project.client && (
            <div>
              <dt>Client / employer</dt>
              <dd>{project.client}</dd>
            </div>
          )}
          {project.delivery && (
            <div>
              <dt>Delivery arrangement</dt>
              <dd>{project.delivery}</dd>
            </div>
          )}
        </dl>
      </section>
      {project.gallery && project.gallery.length > 0 && (
        <BentoGallery photos={project.gallery} title={project.title} />
      )}
      <ProjectNavigation project={project} />
      <ProjectCTA />
    </>
  );
}
