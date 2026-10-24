export const contactLimits = { name: 100, email: 200, phone: 40, service: 100, messageMin: 10, messageMax: 5000 };

export type ContactPayload = { name: string; email: string; phone: string; service: string; message: string; website: string };
export type ContactEnquiry = Omit<ContactPayload, "website">;
export type ContactResponse = { ok: true } | { ok: false; error: string };
type ParsedContact = { ok: true; spam: boolean; enquiry: ContactEnquiry } | { ok: false; error: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(source: Record<string, unknown>, key: string) {
  const value = source[key];
  return typeof value === "string" ? value.trim() : "";
}

export function readContactForm(form: HTMLFormElement): ContactPayload {
  const data = new FormData(form);
  const value = (key: string) => String(data.get(key) ?? "").trim();
  return { name: value("name"), email: value("email"), phone: value("phone"), service: value("service"), message: value("message"), website: value("website") };
}

export function parseContact(input: unknown): ParsedContact {
  if (!input || typeof input !== "object") return { ok: false, error: "Invalid request." };
  const source = input as Record<string, unknown>;
  const enquiry = { name: field(source, "name"), email: field(source, "email"), phone: field(source, "phone"), service: field(source, "service") || "General enquiry", message: field(source, "message") };
  if (field(source, "website")) return { ok: true, spam: true, enquiry };
  if (!enquiry.name || enquiry.name.length > contactLimits.name) return { ok: false, error: "Please enter your name." };
  if (!emailPattern.test(enquiry.email) || enquiry.email.length > contactLimits.email) return { ok: false, error: "Please enter a valid email address." };
  if (enquiry.phone.length > contactLimits.phone) return { ok: false, error: "Please enter a shorter phone number." };
  if (enquiry.service.length > contactLimits.service) return { ok: false, error: "Please choose an area of interest." };
  if (enquiry.message.length < contactLimits.messageMin) return { ok: false, error: "Please add at least 10 characters about your project." };
  if (enquiry.message.length > contactLimits.messageMax) return { ok: false, error: "Please keep your message under 5,000 characters." };
  return { ok: true, spam: false, enquiry };
}

export function contactEmail(enquiry: ContactEnquiry) {
  const name = enquiry.name.replace(/[\r\n]+/g, " ");
  return {
    subject: `Website enquiry: ${enquiry.service} from ${name}`,
    text: `Name: ${name}\nEmail: ${enquiry.email}\nPhone: ${enquiry.phone || "Not provided"}\nArea of interest: ${enquiry.service}\n\n${enquiry.message}`,
  };
}
