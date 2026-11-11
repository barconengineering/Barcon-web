import { pageMetadata } from "@/lib/site";
import { company } from "@/lib/content";
import { PageIntro } from "@/components/shared";
export const metadata = pageMetadata("/privacy", {
  title: "Website privacy",
  description:
    "How Barcon Engineering handles website enquiries and website usage information.",
});
export default function PrivacyPage() {
  return (
    <>
      <PageIntro label="Website information" title="Privacy and enquiries.">
        How this website handles the information you share.
      </PageIntro>
      <section className="section container prose">
        <h2>Information you provide</h2>
        <p>
          The contact form collects your name, email address, optional phone
          number, area of interest and message. Please include only information
          needed to discuss your enquiry, and avoid sending sensitive personal
          information through this form.
        </p>
        <h2>How enquiries are handled</h2>
        <p>
          Enquiries are sent to Barcon Engineering by email using Resend, our
          email delivery provider, and then handled in Barcon’s email system. We
          use the details you provide to respond to your enquiry. The website
          application does not save enquiries in a database.
        </p>
        <p>
          Email messages and related delivery records may be retained in the
          email systems used to handle enquiries. To ask about retention or
          request deletion of information you have sent, contact{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
        <h2>Website analytics and hosting</h2>
        <p>
          The site includes Vercel Web Analytics to understand aggregate website
          usage and improve the site. Hosting and email providers may also
          process technical information needed to deliver and protect their
          services.
        </p>
        <p>
          Vercel Web Analytics does not use cookies, and this website does not
          set advertising or tracking cookies.
        </p>
        <p>
          This website has no visitor accounts or advertising features. The
          enquiry form does not save your entries in browser storage after you
          reload or leave the page.
        </p>
        <h2>External services</h2>
        <p>
          The address link opens Google Maps. External websites, hosting
          services and email providers operate under their own privacy policies.
        </p>
        <h2>Questions</h2>
        <p>
          Contact <a href={`mailto:${company.email}`}>{company.email}</a> or
          call <a href={`tel:${company.phoneHref}`}>{company.phone}</a> about
          information you have shared with Barcon.
        </p>
      </section>
    </>
  );
}
