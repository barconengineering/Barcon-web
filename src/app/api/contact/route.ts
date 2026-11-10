import { Resend } from "resend";
import {
  contactEmail,
  parseContact,
  type ContactResponse,
} from "@/lib/contact";

const sender = "Barcon Website <noreply@barconengineering.com>";

function reply(body: ContactResponse, status = 200) {
  return Response.json(body, { status });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return reply(
      { ok: false, error: "Please submit the enquiry from this website." },
      403,
    );
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  )
    return reply({ ok: false, error: "Invalid request format." }, 415);
  const reader = request.body?.getReader();
  if (!reader) return reply({ ok: false, error: "Invalid request." }, 400);
  const decoder = new TextDecoder();
  let textBody = "";
  let bytes = 0;
  let body: unknown;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 32768) {
        await reader.cancel();
        return reply(
          {
            ok: false,
            error: "Please keep your enquiry within the form limits.",
          },
          413,
        );
      }
      textBody += decoder.decode(value, { stream: true });
    }
    textBody += decoder.decode();
    body = JSON.parse(textBody);
  } catch {
    return reply({ ok: false, error: "Invalid request." }, 400);
  }
  const parsed = parseContact(body);
  if (!parsed.ok) return reply({ ok: false, error: parsed.error }, 400);
  if (parsed.spam) return reply({ ok: true });
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !recipient)
    return reply(
      { ok: false, error: "The enquiry service is not available right now." },
      503,
    );
  const { subject, text } = contactEmail(parsed.enquiry);
  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: sender,
      to: recipient,
      replyTo: parsed.enquiry.email,
      subject,
      text,
    });
    if (error)
      return reply(
        {
          ok: false,
          error: "Your enquiry could not be sent. Please try again.",
        },
        502,
      );
  } catch {
    return reply(
      { ok: false, error: "Your enquiry could not be sent. Please try again." },
      502,
    );
  }
  return reply({ ok: true });
}
