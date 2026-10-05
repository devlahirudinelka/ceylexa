import type { ReactNode } from "react";
import { SocialIcon } from "@/components/ui/SocialIcons";
import { CEYLEXA_SOCIALS, OFFICES } from "@/lib/site";

type Member = {
  name: string;
  role: string;
  /** Short bio. `highlight` is the part of the name shown in bold inside it. */
  bio: string;
  highlight?: string;
  /** Portrait in /public, e.g. "/images/team/thilanka-rathnayake.webp". Initials are shown until one is set. */
  image?: string;
  /** Only the links that are filled in are shown. */
  /** Marks a card that still needs real details. */
  placeholder?: boolean;
  socials?: Partial<Record<"facebook" | "instagram" | "linkedin" | "x" | "youtube" | "tiktok" | "whatsapp", string>>;
};

// Add more people here; the grid lays itself out.
const TEAM: Member[] = [
  {
    name: "Thilanka Rathnayake",
    role: "Senior Digital Marketing Manager",
    highlight: "Thilanka",
    bio: "In the role of Senior Digital Marketing Manager, Thilanka leads digital marketing initiatives, manages campaign performance, identifies growth opportunities, and works closely with creative and marketing teams to deliver measurable results.",
    // Temporary: hot-linked Google thumbnail. Save the photo into
    // /public/images/team/ and point this at the local file before launch.
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlErO809DYaWjpzzeT2JrTIyheqoFQ2qnJYbKhcTPrxGN2qO5sHHaDFo&s=10",
    socials: {},
  },
  // PLACEHOLDERS: replace each with a real team member (name, role, bio,
  // image, socials) or delete the ones you don't need before going live.
  ...Array.from({ length: 5 }, (_, i) => ({
    name: `Team Member ${i + 2}`,
    role: "Role / Job Title",
    bio: "Placeholder bio. Replace this with two or three lines about what this person does at Ceylexa and what they bring to the team.",
    // Dummy stock photo, to be replaced with the real portrait.
    image: `/images/hero-${i + 1}.webp`,
    placeholder: true,
  })),
];

// Order follows the card design. `fallback` is the company account, used
// when a member has no personal link of their own for that platform.
const company = (label: string) => CEYLEXA_SOCIALS.find((social) => social.label === label)?.href;
const SOCIALS: { key: keyof NonNullable<Member["socials"]>; label: string; icon: ReactNode; fallback?: string }[] = [
  { key: "facebook", label: "Facebook", icon: <SocialIcon name="Facebook" size={17} />, fallback: company("Facebook") },
  { key: "instagram", label: "Instagram", icon: <SocialIcon name="Instagram" size={17} />, fallback: company("Instagram") },
  { key: "linkedin", label: "LinkedIn", icon: <SocialIcon name="LinkedIn" size={17} />, fallback: company("LinkedIn") },
  { key: "x", label: "X", icon: <SocialIcon name="X" size={16} />, fallback: company("X") },
  { key: "youtube", label: "YouTube", icon: <SocialIcon name="YouTube" size={19} />, fallback: company("YouTube") },
  { key: "tiktok", label: "TikTok", icon: <SocialIcon name="TikTok" size={17} />, fallback: company("TikTok") },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: <SocialIcon name="WhatsApp" size={18} />,
    fallback: OFFICES[1].phoneHref.replace("tel:+", "https://wa.me/"),
  },
];

function bioWithHighlight(member: Member): ReactNode {
  if (!member.highlight || !member.bio.includes(member.highlight)) return member.bio;
  const [before, ...rest] = member.bio.split(member.highlight);
  return (
    <>
      {before}
      <strong className="font-semibold text-black">{member.highlight}</strong>
      {rest.join(member.highlight)}
    </>
  );
}

function MemberCard({ member, index }: { member: Member; index: number }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  const socials = SOCIALS.map((social) => ({ ...social, href: member.socials?.[social.key] || social.fallback })).filter(
    (social) => social.href,
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.875rem] border border-light-transparent-black bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#d7ba5e] hover:shadow-[0_30px_60px_-35px_rgba(0,0,0,0.35)] max-mobile:rounded-2xl">
      <div className="relative aspect-[4/3.6] w-full overflow-hidden bg-black">
        {member.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[6rem] font-medium leading-none tracking-tight text-[#d7ba5e]">
            {member.placeholder ? "+" : initials}
          </div>
        )}
        {member.placeholder && (
          <span className="absolute right-5 top-5 rounded-full bg-[#d7ba5e] px-3 py-1 font-sans text-[0.6875rem] font-semibold uppercase tracking-wider text-black">
            Placeholder
          </span>
        )}
        <span className="absolute left-5 top-5 rounded-full bg-black/70 px-3 py-1 font-sans text-[0.75rem] font-medium tabular-nums text-[#d7ba5e] backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center px-7 pb-7 pt-6 text-center max-md:px-5">
        <h3 className="font-sans text-[1.5rem] font-semibold leading-[1.2em] text-black">{member.name}</h3>
        <div className="mt-1 font-sans text-[0.9375rem] leading-[1.5em] text-[#d7ba5e]">{member.role}</div>
        <p className="mb-0 mt-4 font-sans text-[0.9375rem] leading-[1.55em] text-dim-gray">{bioWithHighlight(member)}</p>
        {socials.length > 0 && (
          <div className="mt-auto flex flex-wrap justify-center gap-1 pt-6">
            {socials.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on ${social.label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#a8915a] transition-all duration-300 hover:-translate-y-0.5 hover:text-black"
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section className="relative">
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
      <div className="block mx-auto px-6  container w-full before:content-['_'] before:[grid-area:1_/_1_/_2_/_2] before:table after:clear-both after:content-['_'] after:[grid-area:1_/_1_/_2_/_2] after:table max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div
          className="inner-wrappar"
          
        >
          <div className="flex gap-4 flex-col justify-start items-start max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem]">
            <div className="font-sans text-dim-gray text-[0.875rem] leading-[1.5em] process">
              <span className="text-[#d7ba5e] orrenge">{"//"}</span>
              <span> TEAM</span>
            </div>
            <h2 className="text-[3.25rem] leading-[1.2em] max-tablet:text-[2.9rem] max-tablet:text-center max-md:text-[2.75rem] max-mobile:text-[2.25rem]">
              Get to know the masterminds that make the magic happen.
            </h2>
          </div>

          <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />

          <div className="flex flex-col gap-5">
            <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
              We are a team of passionate innovators dedicated to building
              modern solutions for businesses that want to grow, adapt, and
              thrive. Our mission is to combine creativity, technology, and
              strategy to deliver meaningful results for our clients. With a
              focus on collaboration and transparency, we bring fresh ideas and
              practical expertise to every project. From concept to execution,
              we are committed to excellence, ensuring that each solution is
              tailored to meet the unique needs of those we serve. Together, we
              transform challenges into opportunities and visions into reality.
            </p>
            <p className="mb-0 font-sans text-black text-[1rem] leading-[1.5em] font-normal">
              Our team of specialists is passionate about transforming ideas
              into compelling digital experiences. From sophisticated website
              designs and engaging social media campaigns to impactful branding
              and performance-driven advertising, we focus on delivering quality
              and consistency across every touchpoint. We believe successful
              digital marketing is built on strong partnerships. By working
              closely with our Team and clients, we become an extension of their
              team understanding their vision, solving their challenges, and
              continuously looking for opportunities to help them move forward.
            </p>
          </div>
        </div>
        <div className="pt-15 w-full max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
