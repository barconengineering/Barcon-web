"use client";

import { useState, type FormEvent } from "react";
import { company, services } from "@/lib/content";
import { Icon } from "./icons";
type Enquiry = { name: string; email: string; phone: string; service: string; message: string };
export function ContactForm() {
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const body = enquiry ? `Name: ${enquiry.name}\nEmail: ${enquiry.email}\nPhone: ${enquiry.phone || "Not provided"}\nService: ${enquiry.service}\n\n${enquiry.message}` : "";
  async function copy() {
    try { await navigator.clipboard.writeText(body); setCopyStatus("Enquiry copied. Paste it into your email."); }
    catch { setCopyStatus("Copy was unavailable. Select and copy the enquiry text below."); }
  }
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = String(data.get("message")).trim();
    const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;
    if (message.length < 10) {
      messageInput.setCustomValidity("Please add at least 10 characters about your project.");
      messageInput.reportValidity();
      return;
    }
    setEnquiry({
      name: String(data.get("name")).trim(),
      email: String(data.get("email")).trim(),
      phone: String(data.get("phone")).trim(),
      service: String(data.get("service")),
      message,
    });
    setCopyStatus("");
    setTimeout(() => document.getElementById("enquiry-review")?.focus(), 0);
  }
  return <div className="enquiry-panel">
    <h2>Tell us what you’re planning.</h2>
    <p>Your details stay in this browser until you choose to send them using your email app.</p>
    <form onSubmit={prepare}>
      <div className="form-row"><label>Full name <span>(required)</span><input name="name" autoComplete="name" required maxLength={100} pattern={".*\\S.*"} placeholder="Your name" /></label><label>Email address <span>(required)</span><input name="email" type="email" autoComplete="email" required maxLength={200} placeholder="you@company.com" /></label></div>
      <div className="form-row"><label>Phone number <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="+251" /></label><label>Area of interest<select name="service" defaultValue="General enquiry"><option>General enquiry</option>{services.map(s => <option key={s.slug}>{s.title}</option>)}</select></label></div>
      <label>Project details <span>(required)</span><textarea name="message" rows={5} required minLength={10} maxLength={2000} onChange={event => event.currentTarget.setCustomValidity("")} placeholder="Tell us about the location, scope, and what you need." /></label>
      <button className="button" type="submit">Prepare enquiry <Icon name="arrow" size={20} /></button>
      <p className="form-note">You’ll review your enquiry before opening your email app. <a href="/privacy">Privacy information</a></p>
    </form>
    {enquiry && <section className="enquiry-review" id="enquiry-review" tabIndex={-1} aria-labelledby="review-heading"><h3 id="review-heading">Your enquiry is ready to review.</h3><p>No message has been sent. Open your email app to send it to <strong>{company.email}</strong>.</p><pre>{body}</pre><div className="button-row"><a className="button" href={`mailto:${company.email}?subject=${encodeURIComponent(`Project enquiry: ${enquiry.service}`)}&body=${encodeURIComponent(body)}`}>Open email app <Icon name="diagonal" size={20} /></a><button className="button button-secondary" type="button" onClick={copy}>Copy enquiry</button></div><p role="status">{copyStatus}</p></section>}
  </div>;
}
