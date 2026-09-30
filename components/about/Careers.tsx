import { CONTACT_EMAIL } from "@/lib/site";

const ROLES = [
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
    <section id="careers" className="section">
      <div className="w-layout-blockcontainer container regular w-container">
        <div className="inner-wrappar">
          <div className="title-wrapar">
            <div className="font-size-xsm brand">{"//"}</div>
            <div className="font-size-xsm">Careers</div>
          </div>
          <div className="spacing-2xl" />
          <h2 className="heading-style-h2">Enriching people in a culture of belonging</h2>
          <div className="spacing-6xl" />

          <div className="flex max-w-4xl flex-col gap-5">
            <p className="font-size-sm">
              We are a people-first company &amp; are committed to providing best-in-class
              learning and development. At Ceylexa, your career is more than just a job.
              It&rsquo;s a journey filled with learning, innovation, and growth. As one of
              the leading digital marketing companies in Sri Lanka, we are constantly looking
              for bold thinkers, creative problem-solvers, and passionate individuals who are
              eager to make an impact in the ever-evolving digital world.
            </p>
            <p className="font-size-sm">
              We believe in building a culture where your ideas matter, where diversity is
              celebrated, and where collaboration drives success. Whether you are just
              starting your professional career or looking to level up your skills, Ceylexa
              provides the right environment to help you grow. With exposure to real-world
              projects, mentorship from experienced professionals, and continuous training,
              you will gain the expertise needed to excel in today&rsquo;s competitive
              digital landscape.
            </p>
            <p className="font-size-sm">
              Our career opportunities span across multiple areas, including digital
              marketing jobs in Sri Lanka, web developer vacancies, and web design
              positions. Each role is designed to challenge you, inspire creativity, and push
              your career to new heights. By joining our team, you become part of a dynamic
              workplace that values innovation, teamwork, and a strong drive to lead the
              future of digital solutions.
            </p>
            <p className="font-size-sm">
              If you are passionate about shaping the future of online marketing and want to
              work with one of the most recognized digital marketing companies in the region,
              Ceylexa is the place to begin or advance your journey. If you&rsquo;d like to
              join us, do check out the positions currently available and share your details
              with us via an email &amp; we will get in touch with you.
            </p>
          </div>

          <div className="spacing-20xl" />

          <h3
            className="heading-style-h2"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Become <span className="highlight-text">a Proud Member</span> of #TeamCeylexa
          </h3>
          <div className="spacing-2xl" />
          <div className="flex max-w-4xl flex-col gap-5">
            <p className="font-size-sm">
              Discover the latest career opportunities and professional roles available
              across digital marketing, creative, technology, and business. From digital
              marketing and web development to design, content, and project management,
              explore opportunities to grow your skills, work with inspiring teams, and take
              the next step in your career.
            </p>
            <p className="font-size-sm">
              Stay up to date with new roles and find an opportunity that matches your
              experience, talents, and career goals.
            </p>
          </div>

          <div className="spacing-6xl" />
          <div className="grid gap-5 md:grid-cols-2">
            {ROLES.map((role) => (
              <div key={`${role.title}-${role.location}`} className="bento-card flex flex-col rounded-2xl p-7">
                <h4 className="text-lg font-semibold text-foreground">{role.title}</h4>
                <div className="mt-1 text-xs font-medium tracking-wider text-muted uppercase">
                  Full time | {role.location}
                </div>
                <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-muted">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                    `Application: ${role.title} (${role.location})`
                  )}`}
                  className="mt-auto pt-6 text-sm font-medium text-accent-2 underline underline-offset-4"
                >
                  Apply via email
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-xxxl" />
    </section>
  );
}
