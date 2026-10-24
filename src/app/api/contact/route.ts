import { Resend } from "resend";
import { contactEmail, parseContact, type ContactResponse } from "@/lib/contact";

const sender = "Barcon Website <noreply@barconengineering.com>";

function reply(body: ContactResponse, status = 200) {
  return Response.json(body, { status });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !recipient) return reply({ ok: false, error: "The enquiry service is not available right now." }, 503);
  let body: unknown;
  try { body = await request.json(); }
  catch { return reply({ ok: false, error: "Invalid request." }, 400); }
  const parsed = parseContact(body);
  if (!parsed.ok) return reply({ ok: false, error: parsed.error }, 400);
  if (parsed.spam) return reply({ ok: true });
  const { subject, text } = contactEmail(parsed.enquiry);
  try {
    const { error } = await new Resend(apiKey).emails.send({ from: sender, to: recipient, replyTo: parsed.enquiry.email, subject, text });
    if (error) return reply({ ok: false, error: "Your enquiry could not be sent. Please try again." }, 502);
  } catch {
    return reply({ ok: false, error: "Your enquiry could not be sent. Please try again." }, 502);
  }
  return reply({ ok: true });
}
