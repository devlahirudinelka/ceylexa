// News & events shown on /about (preview) and /news.

export type NewsItem = {
  slug: string;
  category: string;
  title: string;
  paragraphs: string[];
  tagline: string;
};

export const NEWS: NewsItem[] = [
  {
    slug: "ceylexa-expands-to-wellington-new-zealand",
    category: "Expansion",
    title: "Ceylexa Digital Expands to Wellington, New Zealand",
    paragraphs: [
      "We’re excited to announce the opening of our new Ceylexa branch in Wellington, New Zealand! This marks an exciting new chapter in our journey as we expand our presence and bring our digital marketing, creative, branding, and technology solutions to more businesses across New Zealand.",
      "Our Wellington branch will allow us to work more closely with local businesses, connect with new talent, and build stronger relationships within the New Zealand business community.",
    ],
    tagline:
      "A new city. A new chapter. The same Ceylexa vision, creating digital solutions that help brands grow.",
  },
  {
    slug: "most-popular-social-media-agency-award-2024",
    category: "Award",
    title: "Ceylexa Digital Wins Most Popular Social Media Agency Award 2024",
    paragraphs: [
      "We’re proud to share a special milestone from our journey. Ceylexa was recognized as the Most Popular Social Media Agency at the Popular Awards 2024. This achievement reflects the trust, support, and partnerships we’ve built with our clients and audiences over the years. It’s a proud moment for our entire team and an encouragement to keep creating meaningful, creative, and impactful digital work.",
      "We’re grateful to everyone who has been part of our journey and helped make this recognition possible.",
    ],
    tagline:
      "Thank you for believing in Ceylexa. Here’s to creating more, achieving more, and growing together.",
  },
  {
    slug: "first-project-in-dubai",
    category: "Expansion",
    title: "Ceylexa Digital Launches Its First Project in Dubai",
    paragraphs: [
      "We’re excited to announce another important milestone in the Ceylexa journey — the launch of our first project in Dubai, UAE.",
      "Expanding into the Dubai market marks an exciting step forward for our growing international presence. This project gives us the opportunity to bring our creativity, digital expertise, and strategic approach to a new market while working with businesses and audiences beyond our home markets.",
      "We’re proud of how far we’ve come and excited about what lies ahead as Ceylexa continues to expand across international markets.",
    ],
    tagline: "New market. New opportunity. New chapter for Ceylexa.",
  },
  {
    slug: "digital-marketing-partner-mrs-sri-lanka-2020",
    category: "Partnership",
    title: "Proud Digital Marketing Partner of Mrs. Sri Lanka 2020",
    paragraphs: [
      "We are proud to have been the Digital Marketing Partner for Mrs. Sri Lanka 2020.",
      "Being part of this prestigious platform was a memorable experience for the Ceylexa Digital team. We had the opportunity to support the event through our digital marketing expertise, helping strengthen its online presence and connect the event with audiences across digital platforms. We’re grateful for the opportunity to be part of such a significant event and proud of the work, creativity, and dedication our team brought to the partnership.",
    ],
    tagline:
      "A proud partnership. A memorable journey. Another milestone in the Ceylexa story.",
  },
  {
    slug: "partnership-mrs-sri-lanka-2021",
    category: "Partnership",
    title: "A Proud Partnership with Mrs. Sri Lanka 2021",
    paragraphs: [
      "Ceylexa Digital was honoured to be the Digital Marketing Partner for Mrs. Sri Lanka 2021, supporting one of Sri Lanka’s celebrated beauty and lifestyle platforms through the power of digital. From creating greater online visibility to connecting audiences with the event, this partnership gave our team the opportunity to bring creativity, strategy, and digital expertise to a truly memorable occasion.",
      "We’re proud of the role we played and grateful to everyone who made this experience part of the Ceylexa journey.",
    ],
    tagline: "Celebrating talent. Creating impact. Connecting through digital.",
  },
  {
    slug: "digital-marketing-partner-db-ceylon-bridal-show",
    category: "Partnership",
    title: "Proud Digital Marketing Partner of DB Ceylon Bridal Show",
    paragraphs: [
      "We’re proud to have been the Digital Marketing Partner of the DB Ceylon Bridal Show, one of Sri Lanka’s biggest and most celebrated bridal events. It was an exciting opportunity for Ceylexa Digital to bring our digital expertise, creativity, and strategic approach to a major platform within Sri Lanka’s bridal and wedding industry.",
      "From building online visibility to engaging audiences across digital platforms, we were delighted to play a part in bringing this spectacular bridal experience to life online.",
    ],
    tagline:
      "Proud to partner. Proud to create. Proud to be part of Sri Lanka’s bridal industry.",
  },
];

export const getNewsBySlug = (slug: string) => NEWS.find((n) => n.slug === slug);
export const getOtherNews = (slug: string) => NEWS.filter((n) => n.slug !== slug);
