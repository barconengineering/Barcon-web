import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/site";
import { services, projects, qualifications } from "@/lib/content";
import { serviceEquipment } from "@/lib/service-equipment";
import { Icon, serviceIcons } from "@/components/icons";
import { PhotoGallery } from "@/components/photo-gallery";
import { PageIntro, ProjectCTA, TextLink } from "@/components/shared";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return pageMetadata(`/services/${slug}`, {
    title: service?.title ?? "Service",
    description: service?.summary,
  });
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const project = projects.find((p) => p.slug === service.featuredProject);
  const qualification =
    service.qualification !== undefined
      ? qualifications[service.qualification]
      : undefined;
  const equipment = serviceEquipment(slug);
  return (
    <>
      <PageIntro label="Our expertise" title={service.title}>
        {service.summary}
      </PageIntro>
      <section className="section container service-introduction">
        <div>
          <Icon name={serviceIcons[services.indexOf(service)]} size={40} />
          <h2>
            Practical expertise.
            <br />
            Reliable infrastructure.
          </h2>
          <p className="lead">{service.description}</p>
          {qualification && (
            <div className="service-qualification">
              <strong>{qualification.title}</strong>
              <p>{qualification.issuer}</p>
              <a className="text-link" href={qualification.document}>
                View competency certificate (PDF){" "}
                <Icon name="diagonal" size={18} />
              </a>
            </div>
          )}
        </div>
        <figure>
          <div className="service-feature-photo">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              style={{ objectPosition: service.image.position }}
            />
          </div>
          <figcaption>{service.image.caption}</figcaption>
        </figure>
      </section>
      <section className="section section-tinted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Technical capabilities</p>
            <h2>
              What we bring
              <br />
              to your project.
            </h2>
          </div>
          <div className="capability-groups">
            {service.groups.map((group, index) => (
              <article key={group.title}>
                <span className="capability-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          {service.note && <p className="scope-note">{service.note}</p>}
        </div>
      </section>
      {equipment.length > 0 && (
        <section className="section">
          <div className="container section-heading">
            <h2>Installed equipment</h2>
          </div>
          <PhotoGallery
            images={equipment}
            label="Pumps, generator and dosing equipment at Kelle"
          />
        </section>
      )}
      {project && (
        <section className="section container featured-experience">
          <div>
            <p className="eyebrow">Related project experience</p>
            <h2>{project.title}</h2>
            <span
              className={`project-status status-${project.status.toLowerCase()}`}
            >
              {project.status}
            </span>
          </div>
          <div>
            <p className="lead">{project.summary}</p>
            <TextLink href={`/projects/${project.slug}`}>
              Explore the project
            </TextLink>
          </div>
        </section>
      )}
      <div className="container service-back">
        <Link href="/services" className="text-link">
          ← Explore all seven services
        </Link>
      </div>
      <ProjectCTA />
    </>
  );
}
