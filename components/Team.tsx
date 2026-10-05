import { Eyebrow, GoldWord, H2_CLASS } from "@/components/ui/brand";

import type { ReactNode } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
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

const svg = (d: string, viewBox = "0 0 24 24") => (
  <svg width="17" height="17" viewBox={viewBox} fill="currentColor" aria-hidden>
    <path d={d} />
  </svg>
);

// Order follows the card design. `fallback` is the company account, used
// when a member has no personal link of their own for that platform.
const company = (label: string) => CEYLEXA_SOCIALS.find((social) => social.label === label)?.href;
const SOCIALS: { key: keyof NonNullable<Member["socials"]>; label: string; icon: ReactNode; fallback?: string }[] = [
  { key: "facebook", label: "Facebook", icon: <Facebook size={17} />, fallback: company("Facebook") },
  { key: "instagram", label: "Instagram", icon: <Instagram size={17} />, fallback: company("Instagram") },
  { key: "linkedin", label: "LinkedIn", icon: <Linkedin size={17} />, fallback: company("LinkedIn") },
  {
    key: "x",
    label: "X",
    icon: svg("M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"),
    fallback: company("X"),
  },
  { key: "youtube", label: "YouTube", icon: <Youtube size={19} />, fallback: company("YouTube") },
  {
    key: "tiktok",
    label: "TikTok",
    icon: svg("M16.6 5.82c-1.02-.9-1.62-2.2-1.62-3.62h-3.14v13.44c0 1.62-1.32 2.94-2.94 2.94a2.94 2.94 0 0 1 0-5.88c.28 0 .55.04.8.11V9.6a6.1 6.1 0 0 0-.8-.05A6.09 6.09 0 0 0 3 15.65a6.09 6.09 0 0 0 6.09 6.09c3.36 0 6.09-2.73 6.09-6.09V8.4a7.3 7.3 0 0 0 4.27 1.37V6.63a4.3 4.3 0 0 1-2.85-.81Z"),
    fallback: company("TikTok"),
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: svg("M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24ZM8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01Z"),
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
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#a8915a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-[#d7ba5e]"
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
      <div className="mx-auto container px-6 py-30 max-tablet:py-20 max-md:py-18 max-mobile:py-16 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Team</Eyebrow>
          <h2 className={`mt-4 max-w-[52rem] ${H2_CLASS}`}>
            Get to know the masterminds that make the <GoldWord>magic happen.</GoldWord>
          </h2>
        </div>
        <div className="mt-14 grid gap-10 border-t border-light-transparent-black pt-10 md:grid-cols-2 md:gap-16 max-md:mt-10">
          <p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
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
<p className="mb-0 font-sans text-[1rem] leading-[1.6em] text-black">
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
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-md:mt-10">
          {TEAM.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
