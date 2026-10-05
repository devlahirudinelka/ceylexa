import { CONTACT_EMAIL } from "@/lib/site";
import { Eyebrow, GoldWord, H2_CLASS, Sparkle } from "@/components/ui/brand";

export const ROLES = [
  {
    title: "Digital Marketing Manager",
    location: "Colombo / Sri Lanka",
    points: [
      "Lead digital marketing strategy, campaigns, content, and performance",
      "Work with a growing portfolio of local and international brands",
    ],
  },
  {
    title: "Website Developer",
    location: "Colombo / Sri Lanka",
    points: [
      "Design, develop, maintain, and optimise modern business websites",
      "Work across responsive websites, e-commerce platforms, and digital experiences",
    ],
  },
  {
    title: "Art Director",
    location: "Colombo / Sri Lanka",
    points: [
      "Lead creative concepts, visual direction, campaigns, and brand experiences",
      "Collaborate with designers, marketers, and creative teams",
    ],
  },
  {
    title: "Graphic Designer",
    location: "Auckland / New Zealand",
    points: [
      "Create engaging visual content for digital, social media, campaigns, and brands",
      "Bring creative ideas to life across multiple platforms and industries",
    ],
  },
  {
    title: "Copywriter",
    location: "Auckland / New Zealand",
    points: [
      "Create compelling copy for websites, social media, campaigns, advertising, and brands",
      "Help shape clear and engaging brand voices across multiple channels",
    ],
  },
  {
    title: "Project Manager",
    location: "Colombo / Sri Lanka",
    points: [
      "Manage digital, marketing, branding, website, and creative projects from concept to completion",
      "Coordinate teams, timelines, clients, and deliverables to ensure projects stay on track",
    ],
  },
];

export default function Careers() {
  return (
    <section id="careers" className="relative scroll-mt-24 bg-ghost-white">
      <div className="mx-auto container px-6 py-30 max-tablet:py-20 max-md:py-18 max-mobile:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Careers</Eyebrow>
            <h2 className={`mt-4 ${H2_CLASS}`}>
              Enriching people in a <GoldWord>culture of belonging</GoldWord>
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-7">
            <p className="mb-0 font-sans text-[1.375rem] font-medium leading-[1.4em] text-black max-md:text-[1.125rem]">
              We are a people-first company &amp; are committed to providing
              best-in-class learning and development. At Ceylexa, your career is
              more than just a job. It&rsquo;s a journey filled with learning,
              innovation, and growth. As one of the leading digital marketing
              companies in Sri Lanka, we are constantly looking for bold
              thinkers, creative problem-solvers, and passionate individuals who
              are eager to make an impact in the ever-evolving digital world.
            </p>
            <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
              We believe in building a culture where your ideas matter, where
              diversity is celebrated, and where collaboration drives success.
              Whether you are just starting your professional career or looking
              to level up your skills, Ceylexa provides the right environment to
              help you grow. With exposure to real-world projects, mentorship
              from experienced professionals, and continuous training, you will
              gain the expertise needed to excel in today&rsquo;s competitive
              digital landscape.
            </p>
<p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
              Our career opportunities span across multiple areas, including
              digital marketing jobs in Sri Lanka, web developer vacancies, and
              web design positions. Each role is designed to challenge you,
              inspire creativity, and push your career to new heights. By
              joining our team, you become part of a dynamic workplace that
              values innovation, teamwork, and a strong drive to lead the future
              of digital solutions.
            </p>
<p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
              If you are passionate about shaping the future of online marketing
              and want to work with one of the most recognized digital marketing
              companies in the region, Ceylexa is the place to begin or advance
              your journey. If you&rsquo;d like to join us, do check out the
              positions currently available and share your details with us via
              an email &amp; we will get in touch with you.
            </p>
          </div>
        </div>

        <div className="mt-20 flex items-end justify-between gap-8 border-t border-light-transparent-black pt-12 max-md:mt-14 max-md:flex-col max-md:items-start">
          <h3 className="font-sans text-[2.25rem] font-medium leading-[1.15em] tracking-tight max-md:text-[1.75rem] max-w-[26rem]">
            Become <GoldWord>a Proud Member</GoldWord> of #TeamCeylexa
          </h3>
          <div className="flex max-w-[34rem] flex-col gap-4">
            <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
              Discover the latest career opportunities and professional roles
              available across digital marketing, creative, technology, and
              business. From digital marketing and web development to design,
              content, and project management, explore opportunities to grow
              your skills, work with inspiring teams, and take the next step in
              your career.
            </p>
<p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
              Stay up to date with new roles and find an opportunity that
              matches your experience, talents, and career goals.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-light-transparent-black">
          {ROLES.map((role, i) => (
            <div key={`${role.title}-${role.location}`} className="group relative grid grid-cols-[auto_1fr] gap-x-6 border-b border-light-transparent-black py-8 max-md:gap-x-4 max-md:py-6 md:!grid-cols-[auto_1fr_1.4fr_auto] md:items-start">
              <span className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-[#d7ba5e] transition-transform duration-500 group-hover:scale-x-100" />
              <span className="pt-1.5 text-[0.8125rem] font-medium tabular-nums text-dim-gray transition-colors duration-300 group-hover:text-[#d7ba5e]">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4 className="font-sans text-[1.5rem] font-medium leading-[1.2em] text-black max-md:text-[1.25rem]">{role.title}</h4>
                <div className="mt-2 font-sans text-[0.75rem] font-medium uppercase tracking-wider text-dim-gray">Full time | {role.location}</div>
              </div>
              <ul className="flex flex-col gap-2 max-md:col-start-2 max-md:mt-4">
                {role.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 font-sans text-[0.9375rem] leading-[1.5em] text-dim-gray">
                    <Sparkle className="mt-1.5 w-3 shrink-0 text-[#d7ba5e]" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  `Application: ${role.title} (${role.location})`,
                )}`}
                className="inline-flex items-center gap-2 self-start rounded-full border border-light-transparent-black py-2 pl-5 pr-2 text-[0.875rem] font-semibold text-black transition-colors duration-300 hover:border-[#d7ba5e] max-md:col-start-2 max-md:mt-5 max-md:justify-self-start"
              >
                Apply via email
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#d7ba5e] group-hover:text-black">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
