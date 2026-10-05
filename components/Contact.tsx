"use client";

import { useState, type FormEvent } from "react";
import { SocialIcon } from "@/components/ui/SocialIcons";
import { CEYLEXA_SOCIALS, CONTACT_EMAIL, OFFICES } from "@/lib/site";

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="relative z-2 w-5 flex-none text-white">
      <path
        d="M17.3172 10.4425L11.6922 16.0675C11.5749 16.1848 11.4159 16.2507 11.25 16.2507C11.0841 16.2507 10.9251 16.1848 10.8078 16.0675C10.6905 15.9503 10.6247 15.7912 10.6247 15.6253C10.6247 15.4595 10.6905 15.3004 10.8078 15.1832L15.3664 10.6253H3.125C2.95924 10.6253 2.80027 10.5595 2.68306 10.4423C2.56585 10.3251 2.5 10.1661 2.5 10.0003C2.5 9.83459 2.56585 9.67562 2.68306 9.55841C2.80027 9.4412 2.95924 9.37535 3.125 9.37535H15.3664L10.8078 4.81753C10.6905 4.70026 10.6247 4.5412 10.6247 4.37535C10.6247 4.2095 10.6905 4.05044 10.8078 3.93316C10.9251 3.81588 11.0841 3.75 11.25 3.75C11.4159 3.75 11.5749 3.81588 11.6922 3.93316L17.3172 9.55816C17.3753 9.61621 17.4214 9.68514 17.4529 9.76101C17.4843 9.83688 17.5005 9.91821 17.5005 10.0003C17.5005 10.0825 17.4843 10.1638 17.4529 10.2397C17.4214 10.3156 17.3753 10.3845 17.3172 10.4425Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

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
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  }

  const field =
    "w-full rounded-[0.875rem] border border-border bg-white px-4 text-[0.9375rem] text-black placeholder:text-dim-gray/70 transition focus:border-[#d7ba5e] focus:outline-none focus:ring-1 focus:ring-[#d7ba5e]";

  return (
    <section className="relative w-full">
      <div className="w-full h-27 max-tablet:h-24 max-md:h-18 max-mobile:h-[3.6rem]" />

      <div className="mx-auto container px-6 max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <h1 className="text-left">Get in Touch</h1>
        <h3 className="text-left">
          Do You Have A Project And Want To Discuss? We&rsquo;d Love to Hear
          From You
        </h3>
        <div className="w-full h-16 max-md:h-10" />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: intro + offices */}
          <div className="flex flex-col gap-10 lg:col-span-7">
            <div className="flex flex-col items-start gap-4">
              {/* <div className="flex items-center gap-0.5 text-[0.875rem] leading-[1.5em]">
                <span className="text-[#d7ba5e]">{"//"}</span>
                <span className="text-dim-gray">
                  Let&rsquo;s Start a Conversation
                </span>
              </div> */}

              <div className=" ">
                <p className="mb-0 font-sans text-[1rem] leading-[1.5em] text-black">
                  Have a project in mind, a new idea, or simply looking for the
                  right digital partner? We&rsquo;d love to hear from you. Tell
                  us a little about your business, your goals, and what
                  you&rsquo;re looking to achieve, and our team will be happy to
                  explore how we can help.
                </p>
                <p className="mb-0 font-sans text-[1rem] leading-[1.5em] text-black mt-6">
                  Whether you need support with digital marketing, branding,
                  social media, content creation, web development, paid
                  advertising, or a complete digital strategy, let&rsquo;s start
                  with a conversation and take the next step together.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {OFFICES.map((office) => (
                <div
                  key={office.name}
                  className="flex flex-col gap-1 rounded-2xl border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] p-6"
                >
                  <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-[#d7ba5e]">
                    {office.name}
                  </span>
                  <span className="text-[0.875rem] text-dim-gray">
                    {office.city}
                  </span>
                  <div className="mt-3 flex flex-col gap-1.5 text-[1rem] font-medium text-black">
                    <a
                      href={office.phoneHref}
                      className="transition-colors duration-200 hover:text-[#d7ba5e]"
                    >
                      {office.phone}
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="break-all transition-colors duration-200 hover:text-[#d7ba5e]"
                    >
                      {office.email}
                    </a>
                    <a
                      href={office.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 hover:text-[#d7ba5e]"
                    >
                      {office.website}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1">
              {CEYLEXA_SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center text-[#a8915a] transition-all duration-300 hover:-translate-y-0.5 hover:text-black"
                >
                  <SocialIcon name={social.label} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] p-8 max-md:p-6 lg:col-span-5 lg:p-10">
            <h3 className="text-foreground">Send a message</h3>

            <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[0.875rem] font-medium text-black"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  maxLength={256}
                  placeholder="Your Name"
                  required
                  className={`${field} h-12`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[0.875rem] font-medium text-black"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={256}
                  placeholder="you@example.com"
                  required
                  className={`${field} h-12`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[0.875rem] font-medium text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={5000}
                  placeholder="Tell us a bit about what you need."
                  required
                  className={`${field} min-h-[120px] resize-y py-3`}
                />
              </div>

              <button
                type="submit"
                className="relative mt-2 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-[6.25rem] bg-[#d7ba5e] px-6 py-3 font-semibold text-white"
              >
                <span className="overflow-hidden h-6">
                  <span className="relative z-2 block leading-[1.5em]">
                    Send Message
                  </span>
                  <span className="relative z-2 block leading-[1.5em]">
                    Send Message
                  </span>
                </span>
                <span className="flex max-w-[1.2rem] items-center justify-start overflow-hidden">
                  <ArrowIcon />
                  <ArrowIcon />
                </span>
                <span className="absolute -bottom-4 left-0 h-4 w-4 rounded-full bg-black" />
              </button>

              <p className="mb-0 text-center text-[0.75rem] text-dim-gray">
                {status === "sent"
                  ? "Opening your email app with your message pre-filled…"
                  : "Opens your email app with your message pre-filled."}
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-30 max-tablet:h-20 max-md:h-18 max-mobile:h-16" />
    </section>
  );
}
