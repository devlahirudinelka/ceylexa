"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { SocialIcon } from "@/components/ui/SocialIcons";

type Member = {
  name: string;
  role: string;
  bio: string;
  highlight?: string;
  image?: string;
  socials?: Partial<
    Record<
      | "facebook"
      | "instagram"
      | "linkedin"
      | "x"
      | "youtube"
      | "tiktok"
      | "whatsapp"
      | "website"
      | "portfolio",
      string
    >
  >;
};

const TEAM: Member[] = [
  {
    name: "Thilanka Rathnayake",
    role: "Senior Digital Marketing Manager",
    highlight: "Thilanka",
    bio: "In the role of Senior Digital Marketing Manager, Thilanka leads digital marketing initiatives, manages campaign performance, identifies growth opportunities, and works closely with creative and marketing teams to deliver measurable results.",
    image: "/images/team/thilanka-rathnayake.webp",
    socials: { linkedin: "https://www.linkedin.com/in/iamthilanka/" },
  },
  {
    name: "Kalani Bandara",
    role: "Senior Software Engineer",
    highlight: "Kalani",
    bio: "In the role of Senior Software Engineer, Kalani leads software development initiatives, designs and implements scalable technology solutions, ensures code quality and system performance, and contributes to technical decision-making. Working closely with development and cross-functional teams, Kalani helps transform business requirements into reliable, efficient, and innovative software solutions while supporting best practices and continuous improvement.",
    image: "/images/team/kalani-bandara.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/kalani-bandara-304162160/",

      website: "https://lanibandara.dev",
    },
  },
  {
    name: "Lahiru DK Yapa",
    role: "Senior Software Engineer",
    highlight: "Lahiru",
    bio: "In the role of Senior Software Engineer, Lahiru oversees the design, development, testing, and optimisation of software solutions. Working closely with technical and cross-functional teams, Lahiru contributes to architecture and technical decisions, resolves complex development challenges, and ensures that applications are secure, scalable, reliable, and aligned with business requirements.",
    image: "/images/team/lahiru-dk-yapa.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/devlahirudinelka/",
      website: "https://devlahirudinelka.me",
    },
  },
  {
    name: "MC Rumesh",
    role: "Art Director",
    highlight: "Rumesh",
    bio: "In the role of Art Director, MC Rumesh leads the creative vision across visual projects, develops design concepts, and ensures consistency in the overall visual identity of campaigns and brand communications. Working closely with designers, marketing, and creative teams, Rumesh transforms ideas into compelling visual experiences while maintaining high creative standards and ensuring every project communicates its intended message effectively.",
    image: "/images/team/mc-rumesh.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/chandika-rumesh/",
      portfolio: "https://www.pinterest.com/ruuarts/Chithal",
    },
  },
  {
    name: "Chithal Wellage",
    role: "Senior Graphic Designer",
    highlight: "Chithal",
    bio: "In the role of Senior Graphic Designer, Chithal develops creative visual concepts and produces engaging designs across digital and marketing platforms. Working closely with the Art Director, marketing, and creative teams, Chithal translates ideas and brand requirements into polished visual content, maintaining consistency, quality, and strong attention to detail across every design.",
    image: "/images/team/chithal-wellage.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/chithal-wellage-10825a2b8/",
      portfolio: "https://www.behance.net/chithalwellage1/appreciated",
    },
  },
  {
    name: "Sumudu Wijewardhana",
    role: "Video Editor",
    highlight: "Sumudu",
    bio: "In the role of Video Editor, Sumudu transforms raw footage and creative concepts into engaging, polished video content for digital and marketing platforms. Working closely with the creative, design, and marketing teams, Sumudu manages video editing, pacing, transitions, sound, visual effects, and storytelling to create compelling content that effectively communicates the intended message and strengthens the overall brand presence.",
    image: "/images/team/sumudu-wijewardhana.webp",
    socials: {
      facebook: "https://www.facebook.com/sumuduonline",
      portfolio: "https://www.deviantart.com/sumuduonline",
    },
  },
];

type SocialLink = {
  key: keyof NonNullable<Member["socials"]>;
  label: string;
  icon: ReactNode;
};

const SOCIALS: SocialLink[] = [
  {
    key: "facebook",
    label: "Facebook",
    icon: <SocialIcon name="Facebook" size={17} />,
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: <SocialIcon name="Instagram" size={17} />,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: <SocialIcon name="LinkedIn" size={17} />,
  },
  {
    key: "x",
    label: "X",
    icon: <SocialIcon name="X" size={16} />,
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: <SocialIcon name="YouTube" size={19} />,
  },
  {
    key: "tiktok",
    label: "TikTok",
    icon: <SocialIcon name="TikTok" size={17} />,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: <SocialIcon name="WhatsApp" size={18} />,
  },
  {
    key: "website",
    label: "Website",
    icon: <SocialIcon name="Website" size={17} />,
  },
  {
    key: "portfolio",
    label: "Portfolio",
    icon: <SocialIcon name="Portfolio" size={17} />,
  },
];

function bioWithHighlight(member: Member): ReactNode {
  if (!member.highlight || !member.bio.includes(member.highlight)) {
    return member.bio;
  }

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

  const socials = SOCIALS.filter((social) => member.socials?.[social.key]);

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
            {initials}
          </div>
        )}

        <span className="absolute left-5 top-5 rounded-full bg-black/70 px-3 py-1 font-sans text-[0.75rem] font-medium tabular-nums text-[#d7ba5e] backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center px-7 pb-7 pt-6 text-center max-md:px-5">
        <h3 className="font-sans text-[1.5rem] font-semibold leading-[1.2em] text-black">
          {member.name}
        </h3>

        <div className="mt-1 font-sans text-[0.9375rem] leading-[1.5em] text-[#a8915a]">
          {member.role}
        </div>

        <p className="mb-0 mt-4 font-sans text-[0.9375rem] leading-[1.55em] text-dim-gray">
          {bioWithHighlight(member)}
        </p>

        {socials.length > 0 && (
          <div className="mt-auto flex flex-wrap justify-center gap-1 pt-6">
            {socials.map((social) => (
              <a
                key={social.key}
                href={member.socials?.[social.key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} — ${social.label}`}
                title={social.label}
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
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;

    if (!heading) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform",
        },
      );
    }, heading);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />

      <div className="max-w-7xl mx-auto block w-full px-6 max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
        <div className="inner-wrappar">
          <div className="flex flex-col items-start justify-start gap-4 max-tablet:gap-[0.8rem] max-md:gap-[0.7rem] max-mobile:gap-[0.6rem]">
            <div className="process font-sans text-[0.875rem] leading-[1.5em] text-dim-gray">
              <h1 className="text-left" ref={headingRef}>
                Team
              </h1>
            </div>

            <h3 className="text-left">
              Get to know the masterminds that make the magic happen.
            </h3>
          </div>

          <div className="pt-6 w-full max-tablet:pt-[1.2rem] max-md:pt-[1.0499rem] max-mobile:pt-[0.899rem]" />

          <div className="flex flex-col gap-5">
            <p className="mb-0 font-sans text-base leading-[1.5em] font-normal text-black">
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

            <p className="mb-0 font-sans text-base leading-[1.5em] font-normal text-black">
              Our team of specialists is passionate about transforming ideas
              into compelling digital experiences. From sophisticated website
              designs and engaging social media campaigns to impactful branding
              and performance-driven advertising, we focus on delivering quality
              and consistency across every touchpoint. We believe successful
              digital marketing is built on strong partnerships. By working
              closely with our team and clients, we become an extension of their
              team, understanding their vision, solving their challenges, and
              continuously looking for opportunities to help them move forward.
            </p>
          </div>
        </div>

        <div className="pt-15 w-full max-tablet:pt-12 max-md:pt-10.5 max-mobile:pt-9" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>

      <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
    </section>
  );
}
