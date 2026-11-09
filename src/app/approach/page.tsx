import { pageMetadata } from "@/lib/site";
import { PageIntro, ProjectCTA } from "@/components/shared";
import { process } from "@/lib/content";
export const metadata = pageMetadata("/approach", {
  title: "Our approach",
  description:
    "Barcon Engineering’s approach to planning, procurement, construction and handover.",
});
const principles = [
  {
    title: "Quality and coordination",
    text: "Our approach emphasizes engineering quality and coordination across civil, hydraulic and electromechanical work. Project specifications and agreed acceptance requirements guide delivery.",
  },
  {
    title: "People and site safety",
    text: "Responsible project management considers the people carrying out the work and the communities around each site. Safety requirements are addressed within the project’s scope and arrangements.",
  },
  {
    title: "Environmental care",
    text: "We aim to use resources responsibly and consider the effects of construction on water, land and nearby communities. Environmental measures should reflect the conditions of each site.",
  },
  {
    title: "Clear communication",
    text: "We value practical communication with clients, project partners and communities, with responsibilities and handover requirements agreed around each project.",
  },
];
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
