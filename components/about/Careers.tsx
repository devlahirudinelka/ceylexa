"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";
import { Bookmark, X } from "lucide-react";

const ROLES = [
  {
    title: "Digital Marketing Manager",
    location: "Colombo / Sri Lanka",
    points: [
      "Lead digital marketing strategy, campaigns, content, and performance",
      "Work with a growing portfolio of local and international brands",
    ],
    isNew: true,
  },
  {
    title: "Website Developer",
    location: "Colombo / Sri Lanka",
    points: [
      "Design, develop, maintain, and optimise modern business websites",
      "Work across responsive websites, e-commerce platforms, and digital experiences",
    ],
    isNew: true,
  },
  {
    title: "Art Director",
    location: "Colombo / Sri Lanka",
    points: [
      "Lead creative concepts, visual direction, campaigns, and brand experiences",
      "Collaborate with designers, marketers, and creative teams",
    ],
    isNew: true,
  },
  {
    title: "Graphic Designer",
    location: "Auckland / New Zealand",
    points: [
      "Create engaging visual content for digital, social media, campaigns, and brands",
      "Bring creative ideas to life across multiple platforms and industries",
    ],
    isNew: true,
  },
  {
    title: "Copywriter",
    location: "Auckland / New Zealand",
    points: [
      "Create compelling copy for websites, social media, campaigns, advertising, and brands",
      "Help shape clear and engaging brand voices across multiple channels",
    ],
    isNew: true,
  },
  {
    title: "Project Manager",
    location: "Colombo / Sri Lanka",
    points: [
      "Manage digital, marketing, branding, website, and creative projects from concept to completion",
      "Coordinate teams, timelines, clients, and deliverables to ensure projects stay on track",
    ],
    isNew: true,
  },
];

export default function Careers() {
  const [hiddenRoles, setHiddenRoles] = useState<string[]>([]);
  const [savedRoles, setSavedRoles] = useState<string[]>([]);

  const visibleRoles = ROLES.filter(
    (role) => !hiddenRoles.includes(role.title),
  );

  const toggleSaved = (title: string) => {
    setSavedRoles((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  };

  const hideRole = (title: string) => {
    setHiddenRoles((current) => [...current, title]);
  };

  return (
    <section id="careers" className="relative">
      <div className="max-w-7xl mx-auto block w-full px-6 max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />

          {/* Careers introduction */}
          <div className="space-y-2">
            <h3 className="text-left">Join #TeamCeylexa</h3>
            <h3 className="text-left">
              Enriching people in a culture of belonging
            </h3>
          </div>

          <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />

          <div className="flex w-full flex-col gap-5">
            <p className="mb-0 font-sans text-base leading-[1.5em] font-normal text-black">
              We are a people-first company &amp; are committed to providing
              best-in-class learning and development. At Ceylexa, your career is
              more than just a job. It&apos;s a journey filled with learning,
              innovation, and growth. As one of the leading digital marketing
              companies in Sri Lanka, we are constantly looking for bold
              thinkers, creative problem-solvers, and passionate individuals who
              are eager to make an impact in the ever-evolving digital world.
            </p>

            <p className="mb-0 font-sans text-base leading-[1.5em] font-normal text-black">
              We believe in building a culture where your ideas matter, where
              diversity is celebrated, and where collaboration drives success.
              Whether you are just starting your professional career or looking
              to level up your skills, Ceylexa provides the right environment to
              help you grow. With exposure to real-world projects, mentorship
              from experienced professionals, and continuous training, you will
              gain the expertise needed to excel in today&apos;s competitive
              digital landscape.
            </p>

            <p className="mb-0 font-sans text-base leading-[1.5em] font-normal text-black">
              Our career opportunities span across multiple areas, including
              digital marketing jobs in Sri Lanka, web developer vacancies, and
              web design positions. Each role is designed to challenge you,
              inspire creativity, and push your career to new heights. By
              joining our team, you become part of a dynamic workplace that
              values innovation, teamwork, and a strong drive to lead the future
              of digital solutions.
            </p>

            <p className="mb-0 font-sans text-base leading-[1.5em] font-normal text-black">
              If you are passionate about shaping the future of online marketing
              and want to work with one of the most recognized digital marketing
              companies in the region, Ceylexa is the place to begin or advance
              your journey. If you&apos;d like to join us, check out the
              positions currently available and share your details with us via
              email. We will get in touch with you.
            </p>
          </div>

          <div className="pt-15 w-full max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />

          <h3 className="text-left">Become a Proud Member of #TeamCeylexa</h3>

          <div className="pt-4 w-full max-tablet:pt-[0.8rem] max-md:pt-[0.7rem] max-mobile:pt-[0.6rem]" />

          <div className="flex w-full flex-col gap-5">
            <p className="mb-0 font-sans text-base leading-[1.5em] font-normal text-black">
              Discover the latest career opportunities and professional roles
              available across digital marketing, creative, technology, and
              business. From digital marketing and web development to design,
              content, and project management, explore opportunities to grow
              your skills, work with inspiring teams, and take the next step in
              your career.
            </p>

            <p className="mb-0 font-sans text-base leading-[1.5em] font-normal text-black">
              Stay up to date with new roles and find an opportunity that
              matches your experience, talents, and career goals.
            </p>
          </div>

          <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />

          {/* Job listings */}
          {visibleRoles.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {visibleRoles.map((role) => {
                const isSaved = savedRoles.includes(role.title);

                return (
                  <article
                    key={`${role.title}-${role.location}`}
                    className="flex min-h-[310px] flex-col rounded-[22px] border-2 border-[#E7E9EF] bg-white px-7 py-5 transition-colors duration-200 hover:border-[#D8DCE5] max-sm:min-h-0 max-sm:px-5 max-sm:py-5"
                  >
                    {/* Job title and location */}
                    <div>
                      <h4 className="text-[24px] leading-tight font-semibold tracking-[-0.025em] text-[#303744] max-sm:text-[21px]">
                        {role.title}
                      </h4>

                      <p className="mt-2 text-[17px] leading-snug text-[#697386]">
                        {role.location}
                      </p>

                      <p className="mt-3 text-[16px] text-[#697386]">
                        Full time
                      </p>

                      {/* Responsibilities */}
                      <ul className="mt-5 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.55] text-[#5E6879] marker:text-[#303744]">
                        {role.points.map((point) => (
                          <li key={point} className="pl-1">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card footer */}
                    <div className="mt-auto flex flex-wrap items-end justify-between gap-x-4 gap-y-5 pt-8">
                      <div className="flex flex-wrap items-center gap-3">
                        {role.isNew && (
                          <span className="inline-flex min-h-[33px] items-center rounded-[11px] bg-[#E0F5EF] px-4 text-[14px] font-semibold text-[#26785D]">
                            New to you
                          </span>
                        )}

                        <a
                          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                            `Application: ${role.title} (${role.location})`,
                          )}`}
                          className="inline-flex min-h-[33px] items-center justify-center rounded-[11px] bg-[#E0F5EF] px-6 text-[14px] font-semibold text-[#365A50] no-underline transition-colors hover:bg-[#CDEDE3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#26785D]"
                        >
                          Apply Now
                        </a>
                      </div>

                      <div className="ml-auto flex shrink-0 items-center gap-5 text-[#303744]">
                        <button
                          type="button"
                          aria-label={
                            isSaved
                              ? `Remove ${role.title} from saved jobs`
                              : `Save ${role.title}`
                          }
                          aria-pressed={isSaved}
                          onClick={() => toggleSaved(role.title)}
                          className="inline-flex items-center justify-center rounded-md p-1 transition-colors hover:bg-[#F2F4F7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#303744]"
                        >
                          <Bookmark
                            size={21}
                            strokeWidth={2}
                            fill={isSaved ? "currentColor" : "none"}
                          />
                        </button>

                        <button
                          type="button"
                          onClick={() => hideRole(role.title)}
                          aria-label={`Hide ${role.title}`}
                          className="inline-flex items-center gap-2 rounded-md p-1 text-[16px] font-medium text-[#303744] transition-colors hover:text-[#697386] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#303744]"
                        >
                          <X size={19} strokeWidth={2} />
                          <span>Hide</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[22px] border-2 border-[#E7E9EF] px-6 py-10 text-center">
              <p className="text-base text-[#697386]">
                You&apos;ve hidden all the current roles.
              </p>
              <button
                type="button"
                onClick={() => setHiddenRoles([])}
                className="mt-4 rounded-[11px] bg-[#E0F5EF] px-5 py-2.5 text-sm font-semibold text-[#26785D] transition-colors hover:bg-[#CDEDE3]"
              >
                Show all positions
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
