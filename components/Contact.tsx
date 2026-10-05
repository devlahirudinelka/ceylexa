"use client";

import { useState, type FormEvent } from "react";

import { CEYLEXA_SOCIALS, CONTACT_EMAIL, OFFICES } from "@/lib/site";

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
    <section className="relative">
      <div className="pt-27 w-full max-tablet:pt-24 max-md:pt-18 max-mobile:pt-[3.6rem]" />
      <div className="block mx-auto px-6 max-w-[84rem] w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="overflow-hidden">
          <h1 className="text-[11.4rem] leading-[1em] font-semibold text-center uppercase max-tablet:text-[8rem] max-tablet:text-left max-md:text-[5.8rem] max-mobile:text-[3.6rem]">
            Get in <span className="text-[#d7ba5e]">Touch</span>
          </h1>
        </div>

        <div className="pt-27 w-full max-tablet:pt-24 max-md:pt-18 max-mobile:pt-[3.6rem]" />

        <div className="grid gap-4 grid-rows-[auto] grid-cols-[repeat(2,1fr)] auto-cols-[1fr] justify-between max-md:gap-[2.44rem] max-md:grid-cols-[repeat(1,1fr)] max-mobile:gap-[2.1rem]">
          <div className="flex flex-col justify-between w-full max-w-[30.6174rem] max-md:gap-[2.012rem] max-md:max-w-none max-mobile:gap-6">
            <div className="flex gap-4 flex-col justify-start items-start max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem]">
              <div className="font-sans text-black text-[0.875rem] leading-[1.5em] uppercase">
                Let&rsquo;s Start a Conversation
              </div>
              <h2 className="text-[3rem] leading-[1.2em] font-semibold max-tablet:text-[2.5rem] max-md:text-[2.25rem] max-mobile:text-[1.9rem] max-mobile:text-left">
                Do You Have A Project And Want To Discuss? We&rsquo;d Love to Hear From You
              </h2>
              <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
              <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                Have a project in mind, a new idea, or simply looking for the right digital
                partner? We&rsquo;d love to hear from you. Tell us a little about your
                business, your goals, and what you&rsquo;re looking to achieve, and our team
                will be happy to explore how we can help.
              </p>
              <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />
              <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                Whether you need support with digital marketing, branding, social media,
                content creation, web development, paid advertising, or a complete digital
                strategy, let&rsquo;s start with a conversation and take the next step
                together.
              </p>
            </div>

            <div className="contact-left-bottom">
              {OFFICES.map((office) => (
                <div key={office.name} style={{ marginBottom: "2rem" }}>
                  <div className="font-sans text-black text-[0.875rem] leading-[1.5em] uppercase">{office.name}</div>
                  <div className="pt-2 w-full max-tablet:pt-[0.4rem] max-md:pt-[0.35rem] max-mobile:pt-[0.3rem]" />
                  <div className="text-[1.125rem] leading-[1.5em] max-tablet:text-[1rem] max-md:text-[0.875rem] max-mobile:text-[0.75rem]">{office.city}</div>
                  <div className="text-[1.125rem] leading-[1.5em] max-tablet:text-[1rem] max-md:text-[0.875rem] max-mobile:text-[0.75rem]">
                    <a href={office.phoneHref} className="text-black text-[2rem] leading-[1.2em] [transition:all_0.3s] hover:text-[#d7ba5e] max-tablet:text-[1.75rem] max-md:text-[1.5rem] max-mobile:text-[1.25rem]">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex gap-2 flex-col justify-start items-start max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]">
                    <a href={`mailto:${office.email}`} className="text-black text-[2rem] leading-[1.2em] [transition:all_0.3s] hover:text-[#d7ba5e] max-tablet:text-[1.75rem] max-md:text-[1.5rem] max-mobile:text-[1.25rem]">
                      {office.email}
                    </a>
                  </div>
                  <div className="text-[1.125rem] leading-[1.5em] max-tablet:text-[1rem] max-md:text-[0.875rem] max-mobile:text-[0.75rem]">
                    <a
                      href={office.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black text-[2rem] leading-[1.2em] [transition:all_0.3s] hover:text-[#d7ba5e] max-tablet:text-[1.75rem] max-md:text-[1.5rem] max-mobile:text-[1.25rem]"
                    >
                      {office.website}
                    </a>
                  </div>
                </div>
              ))}

              <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />

              <div className="flex gap-2 justify-start items-center max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem]">
                {CEYLEXA_SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 px-4 max-w-full border border-black rounded-full max-tablet:py-[0.4rem] max-tablet:px-[0.8rem] max-md:py-[0.35rem] max-md:px-[0.7rem] max-mobile:py-[0.3rem] max-mobile:px-[0.6rem]"
                  >
                    <div className="font-sans text-black text-[0.875rem] leading-[1.5em]">{social.label}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-10 flex-col w-full max-w-[30.25rem] max-tablet:gap-8 max-md:gap-[1.4rem] max-md:max-w-none max-mobile:gap-[1.05rem]">
            <div className="text-[2rem] leading-[1.2em] max-tablet:text-[1.75rem] max-md:text-[1.5rem] max-mobile:text-[1.25rem]">Send a message</div>
            <div className="m-0">
              <form className="flex gap-5 flex-col max-tablet:gap-4 max-md:gap-3.5 max-mobile:gap-3" onSubmit={handleSubmit}>
                <div className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group">
                  <label htmlFor="name" className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                    Name
                  </label>
                  <input
                    className="block mb-0 py-3 px-4 w-full h-12 text-black align-middle text-[14px] leading-[1.42857] bg-white border border-soft-charcoal-tint rounded-xl focus:border-[#3898ec] focus:outline-0 disabled:bg-[#eee] disabled:cursor-not-allowed placeholder:text-black max-tablet:py-[0.6rem] max-tablet:px-[0.8rem] max-md:py-[0.5249rem] max-md:px-[0.7rem] max-mobile:p-[0.825rem] max-mobile:h-[2.8rem]"
                    maxLength={256}
                    name="name"
                    placeholder="Name"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                <div className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group">
                  <label htmlFor="email" className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                    Email Address
                  </label>
                  <input
                    className="block mb-0 py-3 px-4 w-full h-12 text-black align-middle text-[14px] leading-[1.42857] bg-white border border-soft-charcoal-tint rounded-xl focus:border-[#3898ec] focus:outline-0 disabled:bg-[#eee] disabled:cursor-not-allowed placeholder:text-black max-tablet:py-[0.6rem] max-tablet:px-[0.8rem] max-md:py-[0.5249rem] max-md:px-[0.7rem] max-mobile:p-[0.825rem] max-mobile:h-[2.8rem]"
                    maxLength={256}
                    name="email"
                    placeholder="Email"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div className="flex gap-2 flex-col max-tablet:gap-[0.4rem] max-md:gap-[0.35rem] max-mobile:gap-[0.3rem] group">
                  <label htmlFor="message" className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us a bit about what you need."
                    maxLength={5000}
                    id="message"
                    name="message"
                    className="block mb-0 py-3 px-4 w-full h-30 text-black align-middle text-[14px] leading-[1.42857] bg-white border border-soft-charcoal-tint rounded-xl focus:border-[#3898ec] focus:outline-0 disabled:bg-[#eee] disabled:cursor-not-allowed placeholder:text-black max-tablet:py-[0.6rem] max-tablet:px-[0.8rem] max-tablet:h-28 max-md:py-[0.5249rem] max-md:px-[0.7rem] max-mobile:p-[0.825rem]"
                    required
                  />
                </div>
                <input
                  type="submit"
                  className="inline-block py-3 px-6 w-full text-white leading-[1.5em] no-underline font-semibold text-center bg-[#d7ba5e] border border-[#d7ba5e] rounded-xl cursor-pointer [transition:all_0.35s] hover:text-[#d7ba5e] hover:bg-white hover:border hover:border-[#d7ba5e] max-tablet:py-[0.6rem] max-tablet:px-[1.2rem] max-md:py-[0.5249rem] max-md:px-[1.0499rem] max-mobile:py-[0.449rem] max-mobile:px-[0.899rem]"
                  value="Send"
                />
                <p className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em]" style={{ marginTop: "0.75rem" }}>
                  {status === "sent"
                    ? "Opening your email app with your message pre-filled…"
                    : "Opens your email app with your message pre-filled."}
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-27 w-full max-tablet:pt-24 max-md:pt-18 max-mobile:pt-[3.6rem]" />
      </div>
    </section>
  );
}
