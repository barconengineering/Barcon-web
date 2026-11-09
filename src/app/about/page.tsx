import Image from "next/image";
import { pageMetadata } from "@/lib/site";
import { PageIntro, ProjectCTA } from "@/components/shared";
import {
  communityVideo,
  mission,
  qualifications,
  values,
  vision,
} from "@/lib/content";
export const metadata = pageMetadata("/about", {
  title: "About us",
  description:
    "Meet Barcon Engineering, an Ethiopian engineering and construction company founded in 2016, led by hydraulic and water resources engineer Bilhan Haile.",
});
export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About Barcon"
        title="Engineering with purpose. Since 2016."
      >
        Practical expertise, responsible project management and infrastructure
        that serves communities.
      </PageIntro>
      <section className="section container editorial-layout">
        <div className="editorial-copy">
          <p className="eyebrow">Our story</p>
          <h2>
            Rooted in water.
            <br />
            Growing with Ethiopia.
          </h2>
          <p className="lead">
            Barcon Engineering began as a water works contractor in 2016.
          </p>
          <p>
            Our work brings together water supply and sanitation, irrigation,
            building construction, gravel roads, electromechanical works, solar
            pumping, and engineering equipment and materials supply.
          </p>
          <p>
            Engineers, technical specialists and project teams work together
            around each project’s requirements and the communities it serves.
          </p>
        </div>
        <figure>
          <div className="service-feature-photo">
            <Image
              src="/images/hobicha/water-point-community.jpg"
              alt="Community members collecting water at the Hobicha public water point"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
          <figcaption>Community water access at Hobicha</figcaption>
        </figure>
      </section>
      <section className="section section-tinted">
        <div className="container leadership-layout">
          <div className="leader-photo">
            <Image
              src="/images/founder-photo.jpg"
              alt="Bilhan Haile, Founder and General Manager of Barcon Engineering"
              fill
              sizes="(max-width: 767px) 340px, 380px"
            />
          </div>
          <div>
            <p className="eyebrow">Founder & General Manager</p>
            <h2>Bilhan Haile</h2>
            <p>
              Bilhan Haile is a Hydraulic and Water Resources Engineer with a
              Bachelor of Science degree in Hydraulic and Water Resources
              Engineering and 10 years of experience founding, managing, and
              leading Barcon Engineering.
            </p>
            <p>
              Since establishing the company in 2016, he has provided strategic
              and technical leadership across its engineering and construction
              portfolio, overseeing the implementation of projects in water
              supply and sanitation, irrigation, civil construction, and related
              infrastructure development.
            </p>
            <p>
              Under his leadership, Barcon Engineering has continued to
              strengthen its technical capabilities, project delivery
              experience, and relationships with clients and communities. His
              approach emphasizes engineering quality, responsible project
              management, and practical infrastructure solutions that contribute
              to Ethiopia’s development.
            </p>
          </div>
        </div>
      </section>
      <section className="section container mission-grid">
        <article>
          <p className="eyebrow">Our vision</p>
          <h2>
            Technical excellence.
            <br />
            Lasting value.
          </h2>
          <p>{vision}</p>
        </article>
        <article>
          <p className="eyebrow">Our mission</p>
          <h2>
            Reliable solutions.
            <br />
            Responsible delivery.
          </h2>
          <p>{mission}</p>
        </article>
      </section>
      <section className="section container">
        <div className="section-heading">
          <h2>The values behind our work.</h2>
        </div>
        <div className="values-grid">
          {values.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-tinted">
        <div className="container community-story">
          <div>
            <p className="eyebrow">Community water access</p>
            <h2>Serving the community.</h2>
            <p>{communityVideo.text}</p>
          </div>
          <video
            controls
            preload="none"
            poster={communityVideo.poster}
            aria-label="Community water access at Hobicha"
          >
            <source src={communityVideo.src} type="video/mp4" />
            <a href={communityVideo.src}>Watch the Hobicha community video</a>
          </video>
        </div>
      </section>
      <section className="section section-tinted" id="qualifications">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Professional qualifications</p>
            <h2>Our competencies.</h2>
            <p>
              Company competency certificates for our core engineering and
              construction disciplines.
            </p>
          </div>
          <div className="qualification-list">
            {qualifications.map((item, index) => (
              <article key={item.title}>
                <span className="qualification-index">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.issuer}</p>
                </div>
                <a className="text-link" href={item.document}>
                  View certificate <span className="document-type">PDF</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Recognition & community engagement</p>
          <h2>
            Contributing beyond
            <br />
            the project site.
          </h2>
        </div>
        <div className="recognition-grid">
          <article>
            <span className="eyebrow">National sector engagement</span>
            <h3>Supporting Ethiopia’s water and energy sector</h3>
            <p>
              Barcon Engineering received a Certificate of Appreciation from the
              Ministry of Water and Energy for its supporting sponsorship of the
              3rd Ethiopian Water and Energy Week, held on 26–30 October 2026 in
              Addis Ababa.
            </p>
            <p>This recognition acknowledges sponsorship of the event.</p>
          </article>
          <article>
            <span className="eyebrow">Community recognition</span>
            <h3>Recognized by the Hobicha community</h3>
            <p>
              Barcon Engineering received a Certificate of Appreciation from the
              Hobicha Woreda administration in Wolayita, Ethiopia, in
              recognition of its contribution to the implementation of a
              drinking water supply and sanitation project in the area.
            </p>
          </article>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
