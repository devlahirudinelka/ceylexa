// Service copy comes from "Ceylexa Web Document - Services".
// `items` is the full bullet list for each service (shown on the detail
// page); `pills` is the short label list used by the homepage carousel and
// nav, derived from the first few items so the two never drift apart.

export type ServiceOffering = {
  title: string;
  description: string;
};

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
  /** Extra paragraphs shown under the main description on the detail page. */
  extra?: string;
  items: ServiceOffering[];
};

type ServiceInput = Omit<ServiceItem, "pills"> & { pillCount?: number };

function defineService({ pillCount = 5, ...service }: ServiceInput): ServiceItem {
  return {
    ...service,
    pills: service.items.slice(0, pillCount).map((item) => item.title),
  };
}

export const SERVICES_INTRO = {
  heading: "Everything your brand needs",
  headingAccent: "to grow.",
  paragraphs: [
    "At Ceylexa Digital, we bring strategy, creativity, technology, and digital marketing together to help brands build a strong and lasting online presence. Social media management and content creation to website development, digital marketing, and brand growth strategies, we provide everything your business needs to connect with the right audience and grow online.",
    "Explore what we do and discover the services designed to take your brand from where it is today to where you want it to be. Whether you're launching a new business, building your digital presence, or looking for new ways to grow, Ceylexa is here to turn your ideas into impactful digital experiences.",
  ],
};

export const PLATFORM_PARTNERS = {
  heading: "Powered by Leading Digital Marketing Platforms",
  body: "At Ceylexa Digital, we work with leading digital marketing platforms and technology partners around the world to bring our clients access to powerful tools, advanced advertising solutions, and the latest digital marketing capabilities. Our partnerships and platform expertise allow us to create smarter strategies, deliver targeted campaigns, track meaningful results, and help businesses grow in an ever-evolving digital landscape.",
  // The source document only has text placeholders for these logos
  // ("Facebook Partner Logo", "Google Partner Logo", "TikTok Partner").
  // Swap for real logo images once they're supplied.
  partners: ["Facebook Partner", "Google Partner", "TikTok Partner"],
};

export const SERVICES: ServiceItem[] = [
  defineService({
    slug: "web-design",
    number: "01",
    title: "Web Design",
    icon: "layout",
    summary:
      "Modern, responsive, high-performing websites built around your brand and your business goals.",
    description:
      "Your website is the digital home of your brand. At Ceylexa, we design and develop modern, responsive, high-performing websites that combine strong visual identity, functionality, seamless user experience, and performance. From initial concepts and UI/UX design to development, testing, and launch, we create websites that are easy to navigate, search-engine-friendly, and built around your business goals. Our digital experiences are designed not only to establish credibility and showcase your brand but also to engage visitors, drive conversions, and support long-term business growth.",
    items: [
      { title: "Website Design", description: "Modern, creative, and brand-focused website designs." },
      { title: "Website Development", description: "Fast, functional, and responsive websites built around your needs." },
      { title: "Business Websites", description: "Professional websites designed to establish and grow your online presence." },
      { title: "E-commerce Websites", description: "Online stores designed to showcase products and make selling simple." },
      { title: "UI/UX Design", description: "User-focused layouts and experiences that make websites easy and enjoyable to use." },
      { title: "Responsive Web Design", description: "Websites optimized for mobile, tablet, and desktop devices." },
      { title: "Landing Pages", description: "High-converting landing pages for campaigns, products, and services." },
      { title: "Website Redesign", description: "Transform outdated websites into modern digital experiences." },
      { title: "Website Maintenance & Updates", description: "Ongoing support to keep your website secure, updated, and performing smoothly." },
      { title: "SEO-Friendly Development", description: "Websites structured with search visibility and performance in mind." },
      { title: "Domain & Hosting Setup", description: "Assistance with getting your website online and managing its essential infrastructure." },
      { title: "Website Integration", description: "Connecting your website with forms, analytics, booking systems, payment solutions, and other digital tools." },
    ],
  }),
  defineService({
    slug: "digital-marketing",
    number: "02",
    title: "Digital Marketing",
    icon: "megaphone",
    summary:
      "Strategic, data-driven campaigns that grow your online presence and turn traffic into results.",
    description:
      "At Ceylexa Digital, we create strategic digital marketing campaigns that help your brand reach the right audience, build awareness, generate leads, and drive measurable results. From social media and paid advertising to search engine optimization and content marketing, we combine creativity with data-driven strategies to help your business grow in the digital space.",
    extra:
      "Whether you're launching a new brand or looking to take your existing marketing to the next level, our digital marketing solutions are tailored around your goals, audience, and budget.",
    items: [
      { title: "Social Media Marketing", description: "Build a strong and engaging presence across the platforms that matter to your audience." },
      { title: "Social Media Management", description: "Complete management of your social channels, from strategy and content to publishing and community engagement." },
      { title: "Content Marketing", description: "Create valuable, relevant content that attracts, engages, and converts your target audience." },
      { title: "Paid Social Advertising", description: "Targeted advertising campaigns across platforms such as Facebook, Instagram, TikTok, and LinkedIn." },
      { title: "Google Ads & Search Advertising", description: "Reach customers actively searching for your products or services." },
      { title: "Search Engine Optimization (SEO)", description: "Improve your website's visibility and help your business reach more organic traffic." },
      { title: "Email Marketing", description: "Build customer relationships and drive conversions through strategic email campaigns." },
      { title: "Lead Generation", description: "Develop campaigns designed to attract qualified leads and turn interest into business opportunities." },
      { title: "Digital Campaign Strategy", description: "Plan and execute campaigns around your business objectives, audience, and growth targets." },
      { title: "Influencer Marketing", description: "Connect your brand with relevant creators and audiences through strategic collaborations." },
      { title: "Analytics & Reporting", description: "Track performance, understand what is working, and use data to continuously improve your marketing." },
      { title: "Marketing Strategy & Consulting", description: "Develop practical digital strategies that align your marketing activities with your wider business goals." },
    ],
  }),
  defineService({
    slug: "content-creation",
    number: "03",
    title: "Content Creation",
    icon: "camera",
    summary:
      "Purposeful visuals, video, photography, and copy that give your brand a distinctive voice.",
    description:
      "At Ceylexa Digital, we create engaging, purposeful content that gives your brand a distinctive voice and keeps your audience connected. From creative concepts and branded visuals to social media posts, videos, and campaign content, we combine strategy, storytelling, and creativity to create content that stands out in a crowded digital space. Every piece of content is created with your brand, audience, and marketing goals in mind, helping you to build awareness, strengthen engagement, and create meaningful connections that support long-term growth.",
    items: [
      { title: "Social Media Content Creation", description: "Engaging content designed to build your brand presence and connect with your audience." },
      { title: "Creative Concept Development", description: "Fresh and original content ideas tailored to your brand and marketing goals." },
      { title: "Graphic Design", description: "Eye-catching visuals, promotional graphics, branded posts, and creative assets." },
      { title: "Video Content Creation", description: "Professional and engaging video content designed for digital platforms." },
      { title: "Reels & Short-Form Videos", description: "Scroll-stopping videos created for Instagram, TikTok, Facebook, and other social platforms." },
      { title: "Photography", description: "Creative brand, product, lifestyle, event, and social media photography." },
      { title: "Product Photography", description: "High-quality product visuals that showcase your products in the best way." },
      { title: "Copywriting", description: "Clear, creative, and persuasive copy for websites, social media, campaigns, and promotional materials." },
      { title: "Social Media Captions", description: "Engaging captions that communicate your brand message and encourage audience interaction." },
      { title: "Brand Storytelling", description: "Authentic stories and creative messaging that help your audience connect with your brand." },
      { title: "Campaign Content", description: "Creative content developed to support product launches, promotions, events, and marketing campaigns." },
      { title: "Content Planning", description: "Strategic content calendars and plans that keep your brand consistent and active across digital platforms." },
      { title: "Branded Creative Assets", description: "Consistent visual assets and templates that strengthen your brand identity across all channels." },
    ],
  }),
  defineService({
    slug: "paid-media-marketing",
    number: "04",
    title: "Paid Media Marketing",
    icon: "target",
    summary:
      "Targeted paid campaigns across Meta, Google, TikTok, and LinkedIn built for measurable returns.",
    description:
      "At Ceylexa Digital, we plan, manage, and optimise targeted paid media campaigns designed to reach the right people at the right time. By combining audience insights, creative strategy, precise targeting, and continuous optimisation, we help businesses increase visibility, drive quality traffic, generate leads, and achieve measurable results from their advertising investment. From building awareness to driving conversions, we create paid campaigns aligned with your business goals, audience, and budget.",
    items: [
      { title: "Meta Ads", description: "Targeted advertising campaigns across Facebook and Instagram." },
      { title: "TikTok Ads", description: "Creative, performance-focused campaigns designed to reach and engage relevant audiences." },
      { title: "Google Ads", description: "Search, display, shopping, and other Google advertising campaigns designed to capture high-intent customers." },
      { title: "LinkedIn Ads", description: "Targeted campaigns for B2B brands, professionals, and business audiences." },
      { title: "YouTube Advertising", description: "Video advertising campaigns designed to increase awareness, reach, and engagement." },
      { title: "Campaign Strategy & Planning", description: "Data-led paid media strategies built around your business objectives and target audience." },
      { title: "Audience Targeting", description: "Identify and reach relevant audiences using demographics, interests, behaviours, and intent." },
      { title: "Retargeting Campaigns", description: "Reconnect with people who have previously visited your website or interacted with your brand." },
      { title: "Lead Generation Campaigns", description: "Paid campaigns designed to attract and capture quality leads." },
      { title: "Conversion Campaigns", description: "Optimised campaigns focused on driving purchases, bookings, enquiries, or other valuable actions." },
      { title: "Creative Ad Development", description: "High-performing ad creatives, copy, visuals, and videos designed for paid campaigns." },
      { title: "Campaign Optimisation", description: "Continuous testing and optimisation of targeting, creatives, placements, and budgets." },
      { title: "Performance Tracking & Reporting", description: "Clear reporting and insights to measure campaign performance and guide future decisions." },
      { title: "Conversion Tracking & Analytics", description: "Set up and monitor key actions to understand how your advertising investment is performing." },
    ],
  }),
  defineService({
    slug: "branding",
    number: "05",
    title: "Branding",
    icon: "fingerprint",
    summary:
      "Brand identities that communicate who you are, what you stand for, and why customers choose you.",
    description:
      "At Ceylexa Digital, we build brands that are more than just visually appealing — we create distinctive identities that communicate who you are, what you stand for, and what makes your business different. From brand strategy and positioning to visual identity and brand guidelines, we combine creativity and strategy to create memorable brands that connect with the right audience and grow with your business.",
    extra:
      "Whether you're launching a new business, refreshing an existing brand, or looking to create a stronger presence in the market, we help turn your vision into a clear, consistent, and recognisable brand.",
    items: [
      { title: "Brand Strategy", description: "Define your brand's purpose, positioning, values, and direction." },
      { title: "Brand Identity", description: "Create a distinctive identity that represents your business and connects with your audience." },
      { title: "Logo Design", description: "Memorable and professional logos designed to represent your brand." },
      { title: "Visual Identity", description: "Develop a cohesive visual language across all brand touchpoints." },
      { title: "Brand Colour Palette", description: "Select colours that reflect your brand personality and create visual consistency." },
      { title: "Typography & Font Selection", description: "Choose typography that complements your identity and strengthens brand recognition." },
      { title: "Brand Guidelines", description: "Establish clear guidelines for maintaining a consistent brand across platforms." },
      { title: "Brand Positioning", description: "Define how your brand stands out and communicates its unique value." },
      { title: "Brand Messaging", description: "Develop clear and consistent messaging that communicates your brand story." },
      { title: "Taglines & Slogans", description: "Create memorable phrases that capture the essence of your brand." },
      { title: "Social Media Branding", description: "Align your social media presence with your overall brand identity." },
      { title: "Marketing Collateral Design", description: "Business cards, brochures, flyers, presentations, and other branded materials." },
      { title: "Packaging & Product Branding", description: "Create packaging and product visuals that strengthen your brand experience." },
      { title: "Brand Refresh", description: "Modernise and refine your existing identity while maintaining its core recognition." },
      { title: "Complete Brand Development", description: "Build your brand from strategy and identity through to a complete, consistent brand experience." },
    ],
  }),
  defineService({
    slug: "influencer-marketing-campaigns",
    number: "06",
    title: "Influencer Marketing Campaigns",
    icon: "users",
    summary:
      "Strategic influencer partnerships that amplify your brand's reach, engagement, and impact.",
    description:
      "At Ceylexa Digital, we harness the power of influencer marketing to help brands reach new audiences, build credibility, and create meaningful engagement. We develop strategic influencer campaigns by identifying the right creators for your brand, developing compelling campaign concepts, coordinating collaborations, and measuring performance to maximize the impact of every partnership. From micro-influencers to established creators, we focus on finding authentic partnerships that align with your brand, audience, and marketing objectives.",
    items: [
      { title: "Influencer Strategy", description: "Develop influencer marketing strategies aligned with your brand and campaign goals." },
      { title: "Influencer Identification", description: "Find relevant influencers based on audience, niche, location, content style, and reach." },
      { title: "Influencer Research & Selection", description: "Evaluate potential creators to identify suitable partnerships for your brand." },
      { title: "Campaign Concept Development", description: "Create creative campaign ideas that encourage authentic influencer storytelling." },
      { title: "Influencer Outreach & Collaboration", description: "Connect and communicate with influencers on behalf of your brand." },
      { title: "Campaign Management", description: "Manage influencer campaigns from planning and coordination through to execution." },
      { title: "Content Briefs", description: "Develop clear creative briefs to ensure influencer content reflects your campaign objectives and brand identity." },
      { title: "Product Seeding & Gifting Campaigns", description: "Coordinate product-based collaborations to generate authentic creator content." },
      { title: "Sponsored Content Campaigns", description: "Plan and manage paid influencer partnerships across relevant platforms." },
      { title: "Micro & Macro Influencer Campaigns", description: "Build campaigns using creators at different audience sizes based on your objectives." },
      { title: "Social Media Influencer Campaigns", description: "Campaigns across platforms such as Instagram, TikTok, YouTube, and Facebook." },
      { title: "UGC & Creator Content", description: "Generate authentic user-generated and creator-led content for your brand and advertising campaigns." },
      { title: "Influencer Event Campaigns", description: "Coordinate creator participation and content around launches, events, and brand activations." },
      { title: "Campaign Tracking & Reporting", description: "Monitor reach, engagement, content performance, traffic, and other campaign metrics." },
      { title: "Performance Analysis", description: "Evaluate campaign results and provide insights to improve future influencer marketing activities." },
    ],
  }),
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
