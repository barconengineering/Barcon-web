import { pageMetadata } from "@/lib/site";
import { PageIntro, ProjectCTA } from "@/components/shared";
import { principles, process } from "@/lib/content";
export const metadata = pageMetadata("/approach", {
  title: "Our approach",
  description:
    "Barcon Engineering’s approach to planning, procurement, construction and handover.",
});
export default function ApproachPage() {
  return (
    <>
      <PageIntro
        label="Our approach"
        title="Planned with care. Built with purpose."
      >
        A practical sequence from understanding the requirements to handing over
        the work.
      </PageIntro>
      <section className="section container">
        <div className="process-grid">
          {process.map((step, i) => (
            <article key={step.title}>
              <span className="process-number" aria-hidden="true">
                0{i + 1}
              </span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-tinted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What guides us</p>
            <h2>Responsible project delivery.</h2>
          </div>
          <div className="commitment-grid">
            {principles.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
