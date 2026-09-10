export type ServiceItem = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  icon:
    | "layout"
    | "megaphone"
    | "camera"
    | "target"
    | "fingerprint"
    | "users";
  pills: string[];
  description: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "web-design",
    number: "01",
    title: "Web Design",
    icon: "layout",
    summary:
      "Modern, responsive, high-performing websites built around your brand and your business goals.",
    pills: [
      "Website Maintenance & Updates",
      "Website Development",
      "UI/UX Design",
      "E-Commerce",
      "Responsive Design",
    ],
    description:
      "Your website is the digital home of your brand. At Ceylexa, we design and develop modern, responsive, high-performing websites that combine strong visual identity, functionality, seamless user experience, and performance. From initial concepts and UI/UX design to development, testing, and launch, we create websites that are easy to navigate, search-engine friendly, and built around your business goals. Our digital experiences are designed not only to establish credibility and showcase your brand but also to engage visitors, drive conversions, and support long-term business growth.",
  },
  {
    slug: "digital-marketing",
    number: "02",
    title: "Digital Marketing",
    icon: "megaphone",
    summary:
      "Strategic, data-driven campaigns that grow your online presence and turn traffic into results.",
    pills: [
      "Social Media Marketing",
      "Social Media Management",
      "Performance Marketing",
      "SEO & SEM",
      "Email Marketing",
      "Digital Campaigns",
    ],
    description:
      "At Ceylexa, we turn digital opportunities into meaningful brand growth. Our digital marketing services combine creative thinking, strategic planning, data-driven insights, and targeted campaigns to help businesses reach the right audiences and achieve measurable results. From building a strong online presence to driving traffic, engagement, leads, and conversions, we create tailored digital strategies that move your brand forward.",
  },
  {
    slug: "content-creation",
    number: "03",
    title: "Content Creation",
    icon: "camera",
    summary:
      "Purposeful visuals, video, photography, and copy that give your brand a distinctive voice.",
    pills: [
      "Graphic Design & Visual Content",
      "Videography",
      "Photography",
      "Copywriting & Caption Writing",
      "Motion Graphics",
    ],
    description:
      "At Ceylexa, we create engaging, purposeful content that captures attention and gives your brand a distinctive voice in the digital space. From creative concepts and compelling visuals to scroll-stopping social media content, we combine strategy, storytelling, and creativity to produce content that connects with your audience and supports your marketing goals.",
  },
  {
    slug: "paid-media-marketing",
    number: "04",
    title: "Paid Media Marketing",
    icon: "target",
    summary:
      "Targeted paid campaigns across Meta, Google, TikTok, and LinkedIn built for measurable returns.",
    pills: [
      "Meta Ads Management",
      "Google Ads Management",
      "TikTok Advertising",
      "LinkedIn Advertising",
      "E-Commerce & Shopping Ads",
    ],
    description:
      "At Ceylexa, we plan and manage targeted paid media campaigns designed to put your brand in front of the right people at the right time. By combining audience insights, creative strategy, precise targeting, and continuous optimisation, we help businesses increase visibility, generate quality leads, drive website traffic, and achieve measurable returns from their advertising investment.",
  },
  {
    slug: "branding",
    number: "05",
    title: "Branding",
    icon: "fingerprint",
    summary:
      "Brand identities that communicate who you are, what you stand for, and why customers choose you.",
    pills: [
      "Brand Strategy & Positioning",
      "Logo Design",
      "Brand Guidelines",
      "Tagline & Slogan Development",
      "Brand Storytelling",
    ],
    description:
      "At Ceylexa, we build brands that are more than just visually appealing — we create identities that communicate who you are, what you stand for, and why your audience should choose you. From defining your brand strategy to creating a consistent visual identity, we combine creativity and strategy to build memorable brands that stand out, connect with audiences, and grow with your business.",
  },
  {
    slug: "influencer-marketing-campaigns",
    number: "06",
    title: "Influencer Marketing Campaigns",
    icon: "users",
    summary:
      "Strategic influencer partnerships that amplify your brand's reach, engagement, and impact.",
    pills: [
      "Influencer Marketing Strategy",
      "Influencer Selection & Vetting",
      "Influencer Campaign Planning",
      "Content Brief Development",
      "Collaborations & Partnerships",
    ],
    description:
      "At Ceylexa, we harness the power of influencer marketing to amplify your brand's reach and engagement. Our strategic approach involves identifying the right influencers, crafting compelling campaigns, and measuring results to ensure maximum impact and return on investment.",
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
