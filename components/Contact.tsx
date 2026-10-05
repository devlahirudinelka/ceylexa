"use client";

import { useState, type FormEvent } from "react";

import { ArrowUpRight } from "lucide-react";
import { CEYLEXA_SOCIALS, CONTACT_EMAIL, OFFICES } from "@/lib/site";
import { Eyebrow, GoldWord, PillarStrip } from "@/components/ui/brand";

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
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  }

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-24 -z-1 select-none text-center text-[20rem] font-bold leading-[0.9em] text-cultured max-tablet:text-[10rem] max-md:text-[7rem] max-mobile:text-[4.5rem]">
        HELLO
      </div>

      <div className="mx-auto container px-6 lg:px-8 pt-40 max-md:pt-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Let&rsquo;s Start a Conversation</Eyebrow>
            <h1 className="mt-5 font-sans text-[5.5rem] font-semibold leading-[1.02em] tracking-tight max-tablet:text-[4.25rem] max-md:text-[3.25rem] max-mobile:text-[2.5rem]">
              Get in <GoldWord>Touch</GoldWord>
            </h1>
          </div>
          <h2 className="font-sans text-[1.75rem] font-medium leading-[1.25em] tracking-tight text-black lg:col-span-5 max-md:text-[1.375rem]">
            Do You Have A Project And Want To Discuss? We&rsquo;d Love to Hear
            From You
          </h2>
        </div>
      </div>

      <div className="mt-14">
        <PillarStrip items={OFFICES.map((office) => office.city)} />
      </div>

      <div className="mx-auto container px-6 lg:px-8 py-28 max-md:py-18">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="flex flex-col gap-5">
              <p className="mb-0 font-sans text-[1.375rem] font-medium leading-[1.4em] text-black max-md:text-[1.125rem]">
                Have a project in mind, a new idea, or simply looking for the
                right digital partner? We&rsquo;d love to hear from you. Tell us
                a little about your business, your goals, and what you&rsquo;re
                looking to achieve, and our team will be happy to explore how we
                can help.
              </p>
              <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
                Whether you need support with digital marketing, branding,
                social media, content creation, web development, paid
                advertising, or a complete digital strategy, let&rsquo;s start
                with a conversation and take the next step together.
              </p>
            </div>

            <div className="mt-12 border-t border-light-transparent-black">
              {OFFICES.map((office, i) => (
                <div key={office.name} className="grid grid-cols-[auto_1fr] gap-x-6 border-b border-light-transparent-black py-8 max-md:gap-x-4 max-md:py-6">
                  <span className="pt-1 text-[0.8125rem] font-medium tabular-nums text-[#d7ba5e]">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="font-sans text-[0.8125rem] font-medium uppercase tracking-wider text-dim-gray">{office.name}</div>
                    <div className="mt-1 font-sans text-[1.5rem] font-medium leading-[1.2em] text-black max-md:text-[1.25rem]">{office.city}</div>
                    <div className="mt-4 flex flex-col items-start gap-1.5 font-sans text-[1.125rem] leading-[1.4em] max-md:text-[1rem]">
                      <a href={office.phoneHref} className="text-black transition-colors duration-300 hover:text-[#d7ba5e]">{office.phone}</a>
                      <a href={`mailto:${office.email}`} className="text-black transition-colors duration-300 hover:text-[#d7ba5e]">{office.email}</a>
                      <a href={office.websiteHref} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-300 hover:text-[#d7ba5e]">{office.website}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {CEYLEXA_SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-light-transparent-black px-4 py-1.5 font-sans text-[0.75rem] leading-[1.5em] text-dim-gray transition-colors duration-300 hover:border-[#d7ba5e] hover:text-[#d7ba5e]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[1.875rem] bg-ghost-white p-10 lg:sticky lg:top-28 max-md:p-6 max-mobile:rounded-2xl">
              <Eyebrow>Message</Eyebrow>
              <div className="mt-3 font-sans text-[2.25rem] font-medium leading-[1.15em] tracking-tight text-black max-md:text-[1.75rem]">
                Send a message
              </div>
              <form className="mt-8 flex flex-col gap-7" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="flex items-center gap-3 font-sans text-[0.8125rem] font-medium uppercase tracking-wider text-dim-gray">
                    <span className="tabular-nums text-[#d7ba5e]">01</span>
                    Name
                  </label>
                  <input className="block w-full border-0 border-b border-light-transparent-black bg-transparent px-0 py-3 font-sans text-[1.125rem] leading-[1.5em] text-black outline-none transition-colors duration-300 placeholder:text-dim-gray/60 focus:border-[#d7ba5e]" maxLength={256} name="name" placeholder="Your name" type="text" id="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="flex items-center gap-3 font-sans text-[0.8125rem] font-medium uppercase tracking-wider text-dim-gray">
                    <span className="tabular-nums text-[#d7ba5e]">02</span>
                    Email Address
                  </label>
                  <input className="block w-full border-0 border-b border-light-transparent-black bg-transparent px-0 py-3 font-sans text-[1.125rem] leading-[1.5em] text-black outline-none transition-colors duration-300 placeholder:text-dim-gray/60 focus:border-[#d7ba5e]" maxLength={256} name="email" placeholder="you@company.com" type="email" id="email" required />
                </div>
                <div>
                  <label htmlFor="message" className="flex items-center gap-3 font-sans text-[0.8125rem] font-medium uppercase tracking-wider text-dim-gray">
                    <span className="tabular-nums text-[#d7ba5e]">03</span>
                    Message
                  </label>
                  <textarea placeholder="Tell us a bit about what you need." maxLength={5000} id="message" name="message" className="block w-full border-0 border-b border-light-transparent-black bg-transparent px-0 py-3 font-sans text-[1.125rem] leading-[1.5em] text-black outline-none transition-colors duration-300 placeholder:text-dim-gray/60 focus:border-[#d7ba5e] h-32 resize-none" required />
                </div>
                <button
                  type="submit"
                  className="group inline-flex cursor-pointer items-center justify-between rounded-full bg-[#d7ba5e] py-2.5 pl-7 pr-2.5 font-sans text-[1rem] font-semibold leading-[1.5em] text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Send
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={17} />
                  </span>
                </button>
                <p className="mb-0 font-sans text-[0.875rem] leading-[1.5em] text-dim-gray">
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
