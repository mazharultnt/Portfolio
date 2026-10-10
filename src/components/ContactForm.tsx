"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { Check, Send } from "./icons";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real people leave this empty, spam bots fill it in.
    if (data.get("_honey")) return;

    setStatus("sending");
    setError("");

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? "") || "New portfolio message",
      message: String(data.get("message") ?? ""),
      _subject: `Portfolio message: ${String(data.get("subject") ?? "") || "New message"}`,
      _replyto: String(data.get("email") ?? ""),
      _template: "table",
      _captcha: "false",
    };

    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === "false" || json.success === false) {
        throw new Error(json.message || "The message could not be sent.");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again, or email me directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span className="success-icon"><Check /></span>
        <h3>Message sent</h3>
        <p>Thank you for reaching out. I will read your message and reply to your email as soon as I can.</p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="Jane Cooper" required autoComplete="name" minLength={2} />
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="jane@company.com" required autoComplete="email" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="Junior front-end role, remote" />
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} placeholder="Tell me a little about the role or project..." required minLength={10} />
      </div>

      {/* Honeypot field, hidden from people */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="honey" aria-hidden="true" />

      {status === "error" && (
        <p className="form-error" role="alert">
          {error} You can also write to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <span className="spinner" aria-hidden="true" /> Sending...
          </>
        ) : (
          <>
            Send message <Send />
          </>
        )}
      </button>
      <p className="form-note">Your message goes straight to my email inbox.</p>
    </form>
  );
}
