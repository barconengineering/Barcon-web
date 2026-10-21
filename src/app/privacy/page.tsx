import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { company } from "@/lib/content";
import { PageIntro } from "@/components/shared";
export const metadata: Metadata = pageMetadata("/privacy", { title: "Website privacy" });
export default function PrivacyPage() {
  return <><PageIntro label="Website information" title="Your enquiry, in your control.">How the contact features on this website work.</PageIntro><section className="section container prose"><h2>Contact enquiries</h2><p>The enquiry form prepares an email in your browser. It does not submit or store your details on a Barcon website server. Choosing “Open email app” passes the details to your email application, where you can review and send the message.</p><p>The information you send is handled by your email provider and the recipient’s email provider. You can also contact Barcon directly at <a href={`mailto:${company.email}`}>{company.email}</a>.</p><h2>Cookies and analytics</h2><p>This website does not include advertising trackers, analytics scripts, or a website account system. Its contact form does not save your entries after you reload or leave the page.</p><h2>External links</h2><p>The address link opens a search in Google Maps. External websites and email applications operate under their own privacy policies.</p><h2>Questions</h2><p>For questions about information you have sent to Barcon, email <a href={`mailto:${company.email}`}>{company.email}</a> or call <a href={`tel:${company.phoneHref}`}>{company.phone}</a>.</p></section></>;
}
