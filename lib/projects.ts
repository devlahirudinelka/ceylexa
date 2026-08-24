export type ApproachStep = {
  step: string;
  title: string;
  description: string;
};

export type Deliverable = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  href: string;
  date: string;
  category: string;
  title: string;
  tags: string;
  image: string;
  client: string;
  industry: string;
  location: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: ApproachStep[];
  deliverables: Deliverable[];
};

export const PROJECTS: Project[] = [
  {
    slug: "oster",
    href: "/project/oster",
    date: "May 4, 2025",
    category: "Advertising",
    title: "Oster",
    tags: "Illustration Design, eBook & Digital Reports",
    image: "/images/project-3.webp",
    client: "Oster",
    industry: "Bridal & Occasionwear",
    location: "Colombo, Sri Lanka",
    summary:
      "A hand-illustrated digital lookbook and eBook catalog for Oster's seasonal bridal collection, built to turn scrollers into showroom visits.",
    overview:
      "Oster came to us ahead of a seasonal collection launch with hundreds of studio images and no story to tie them together. We built an illustrated brand system — custom line-art motifs, a digital lookbook, and a downloadable eBook catalog — that turned a straightforward product shoot into a keepsake piece customers wanted to share.",
    challenge:
      "The brand's existing catalog was a plain product grid: accurate, but forgettable. Oster needed something that felt as considered as the garments themselves, without slowing down the small team who'd have to keep publishing it every season.",
    approach: [
      {
        step: "01",
        title: "Visual audit",
        description:
          "We mapped every existing asset against the new collection story to see what could be reused, reshot, or reimagined.",
      },
      {
        step: "02",
        title: "Illustration system",
        description:
          "A custom set of line-art motifs and page ornaments, designed to sit quietly behind the photography rather than compete with it.",
      },
      {
        step: "03",
        title: "Digital lookbook",
        description:
          "A scroll-paced lookbook that paired each look with its illustrated detail, built to read well on both desktop and mobile.",
      },
      {
        step: "04",
        title: "eBook & handoff",
        description:
          "A downloadable eBook version plus a lightweight template the in-house team could reuse for future collections without our involvement.",
      },
    ],
    deliverables: [
      { value: "6 weeks", label: "Project timeline" },
      { value: "40+", label: "Illustrated assets" },
      { value: "1", label: "Digital lookbook + eBook" },
      { value: "3", label: "Channels launched on" },
    ],
  },
  {
    slug: "roland-88tdv",
    href: "/project/roland-88tdv",
    date: "February 15, 2023",
    category: "Marketing",
    title: "Roland",
    tags: "Ad Creative, Social Media Creative",
    image: "/images/project-2.webp",
    client: "Roland",
    industry: "Fashion & Apparel",
    location: "Colombo, Sri Lanka",
    summary:
      "Full-funnel ad creative and always-on social content for Roland, built to keep pace with a five-platform posting calendar.",
    overview:
      "Roland needed a creative engine that could keep up with paid and organic social at once — new ad variants every week, on-brand and ready to test, without a fresh brief every time. We set up a repeatable creative system and ran it as an extension of their in-house team.",
    challenge:
      "Their previous agency delivered polished one-off campaigns, but nothing that scaled. Every new ad set meant a new round of briefs and approvals, which meant the brand's paid spend kept outrunning its content.",
    approach: [
      {
        step: "01",
        title: "Creative audit",
        description:
          "We reviewed a year of ad performance to see which formats, hooks, and visuals were actually earning attention.",
      },
      {
        step: "02",
        title: "Modular templates",
        description:
          "A set of on-brand templates the team could recombine quickly, so new variants didn't mean starting from a blank page.",
      },
      {
        step: "03",
        title: "Production sprints",
        description:
          "Weekly batches of ad and organic creative, produced against a shared content calendar instead of one-off requests.",
      },
      {
        step: "04",
        title: "Test & report",
        description:
          "Every batch shipped with a short performance readout, so the next sprint could build on what was actually working.",
      },
    ],
    deliverables: [
      { value: "4-week", label: "Sprint cycle" },
      { value: "60+", label: "Ad & social creatives" },
      { value: "5", label: "Platforms covered" },
      { value: "Always-on", label: "Content cadence" },
    ],
  },
  {
    slug: "reddit",
    href: "/project/reddit",
    date: "March 30, 2023",
    category: "Advertising",
    title: "Reddit",
    tags: "Motion Designer, Social Media Creative",
    image: "/images/project-1.webp",
    client: "Reddit Placement Campaign",
    industry: "Consumer Brand",
    location: "Colombo, Sri Lanka",
    summary:
      "Motion-first, community-native creative built specifically for Reddit's ad placements — not a repurposed Instagram cut.",
    overview:
      "Reddit ads live or die on how native they feel to the feed. We built a motion-first creative system from scratch for this placement — pacing, captions, and sound design tuned for a scroll that punishes anything that looks like an ad.",
    challenge:
      "The brand's existing video assets were built for Instagram and TikTok, and performed poorly when dropped straight into Reddit. It needed a format-native approach, not a resize.",
    approach: [
      {
        step: "01",
        title: "Platform research",
        description:
          "We studied what actually earns attention — and upvotes — in-feed on Reddit, separate from every other platform's playbook.",
      },
      {
        step: "02",
        title: "Motion system",
        description:
          "A lightweight animation and caption system designed to read clearly with the sound off, in the first two seconds.",
      },
      {
        step: "03",
        title: "Native edits",
        description:
          "Every cut built and paced specifically for Reddit's placements, not repurposed from another channel.",
      },
      {
        step: "04",
        title: "Iteration loop",
        description:
          "Weekly creative drops informed by early engagement signals, so the format kept sharpening itself.",
      },
    ],
    deliverables: [
      { value: "8-week", label: "Campaign run" },
      { value: "25+", label: "Motion edits" },
      { value: "Native", label: "Reddit-first format" },
      { value: "Weekly", label: "Creative drops" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getOtherProjects(slug: string): Project[] {
  return PROJECTS.filter((project) => project.slug !== slug);
}
