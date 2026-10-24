"use client";

import { company, services } from "@/lib/content";
import { contactLimits } from "@/lib/contact";
import { useContactForm } from "@/hooks/useContactForm";
import { Icon } from "./icons";
export function ContactForm() {
  const { status, error, sentTo, submit, resetValidity } = useContactForm();
  const sending = status === "sending";
  return <div className="enquiry-panel">
    <h2>Tell us what you’re planning.</h2>
    <p>Send your enquiry directly to the Barcon team. We’ll reply to the email address you provide.</p>
    <form onSubmit={submit} aria-busy={sending}>
      <div className="form-row"><label>Full name <span>(required)</span><input name="name" autoComplete="name" required maxLength={contactLimits.name} pattern={".*\\S.*"} placeholder="Your name" /></label><label>Email address <span>(required)</span><input name="email" type="email" autoComplete="email" required maxLength={contactLimits.email} placeholder="you@company.com" /></label></div>
      <div className="form-row"><label>Phone number <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={contactLimits.phone} placeholder="+251" /></label><label>Area of interest<select name="service" defaultValue="General enquiry"><option>General enquiry</option>{services.map(s => <option key={s.slug}>{s.title}</option>)}</select></label></div>
      <label>Project details <span>(required)</span><textarea name="message" rows={5} required minLength={contactLimits.messageMin} maxLength={contactLimits.messageMax} onChange={resetValidity} placeholder="Tell us about the location, scope, and what you need." /></label>
      <div className="form-honeypot" aria-hidden="true"><label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label></div>
      <button className="button" type="submit" disabled={sending}>{sending ? "Sending…" : "Send enquiry"} <Icon name="arrow" size={20} /></button>
      <p className="form-note"><a href="/privacy">Privacy information</a></p>
      <div className="form-status" role="status" aria-live="polite">
        {status === "success" && <p className="form-status-success">Thank you. Your enquiry has been sent, and we’ll reply to <strong>{sentTo}</strong>.</p>}
        {status === "error" && <p className="form-status-error">{error} You can also email us at <a href={`mailto:${company.email}`}>{company.email}</a>.</p>}
      </div>
    </form>
  </div>;
}
