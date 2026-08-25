"use client";

import { useState, type FormEvent } from "react";

const SOCIALS = [
  { label: "Twitter", href: "https://x.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

const CONTACT_EMAIL = "hello@ceylexa.com";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  // There's no form backend (email API / route handler) wired up in this
  // project yet, so submitting hands the message off to the visitor's own
  // email client via a mailto: link instead of faking a "message received"
  // state. Swap this for a real endpoint (a Next.js route handler calling
  // Resend/Postmark, or a service like Formspree) once one exists — at
  // that point this can go back to a normal fetch() POST.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `New message from ${name || "your website"}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  }

  return (
    <section className="section">
      <div className="space-29xl" />
      <div className="w-layout-blockcontainer container w-container">
        <div className="contact-header">
          <h1 className="hero-heading contact">
            Get in <span className="highlight-text">Touch</span>
          </h1>
        </div>

        <div className="space-29xl" />

        <div className="w-layout-grid contact-grid">
          <div className="contact-left">
            <div className="contact-left-top">
              <div className="font-size-xsm pure-black all-caps">our contacts</div>
              <h2 className="contact-heading">
                Let&rsquo;s Start Working Together. Get in Touch with Us!
              </h2>
            </div>

            <div className="contact-left-bottom">
              <div className="contact-link-block">
                <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="spacing-4xl" />

              <div className="max-width-13">
                <div className="font-size-md">Colombo, Sri Lanka</div>
              </div>

              <div className="spacing-6xl" />

              <div className="social-link-wrap">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link w-inline-block"
                  >
                    <div className="font-size-xsm pure-black">{social.label}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="form-title">Send a message</div>
            <div className="contact-form-main w-form">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="group">
                  <label htmlFor="name" className="font-size-sm">
                    Name
                  </label>
                  <input
                    className="text-field w-input"
                    maxLength={256}
                    name="name"
                    placeholder="Name"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="font-size-sm">
                    Email Address
                  </label>
                  <input
                    className="text-field w-input"
                    maxLength={256}
                    name="email"
                    placeholder="Email"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="message" className="font-size-sm">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us a bit about what you need."
                    maxLength={5000}
                    id="message"
                    name="message"
                    className="text-field messege-area w-input"
                    required
                  />
                </div>
                <input type="submit" className="submit-button w-button" value="Send" />
                <p className="font-size-xsm" style={{ marginTop: "0.75rem" }}>
                  {status === "sent"
                    ? "Opening your email app with your message pre-filled…"
                    : "Opens your email app with your message pre-filled."}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
