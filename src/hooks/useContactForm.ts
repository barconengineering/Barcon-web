"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { contactLimits, readContactForm, type ContactResponse } from "@/lib/contact";

export type ContactStatus = "idle" | "sending" | "success" | "error";

export function useContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState("");
  const [sentTo, setSentTo] = useState("");

  function resetValidity(event: ChangeEvent<HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity("");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const payload = readContactForm(form);
    const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;
    if (payload.message.length < contactLimits.messageMin) {
      messageInput.setCustomValidity("Please add at least 10 characters about your project.");
      messageInput.reportValidity();
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = (await response.json().catch(() => null)) as ContactResponse | null;
      if (!response.ok || !result?.ok) throw new Error(result && !result.ok ? result.error : "Your enquiry could not be sent. Please try again.");
      form.reset();
      setSentTo(payload.email);
      setStatus("success");
    } catch (failure) {
      setError(failure instanceof TypeError ? "Your enquiry could not be sent. Please check your connection and try again." : failure instanceof Error ? failure.message : "Your enquiry could not be sent. Please try again.");
      setStatus("error");
    }
  }

  return { status, error, sentTo, submit, resetValidity };
}
