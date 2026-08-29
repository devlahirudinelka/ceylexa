// Shared client roster for the Clients page (components/Clients.tsx +
// components/ClientsCardGrid.tsx) — same brands as
// components/LogoMarquee.tsx (public/images/Clients/*.webp), with `name`
// used for the visible label. "Cyclone Swimminng" is the on-disk
// filename's own typo, kept as the src but not repeated in the UI.
//
// `title` and `description` are placeholder copy (no real per-client
// industry/description data exists in this project) — swap them for the
// real thing per client. `socials` is left empty on purpose: fill in a
// client's real facebook/instagram/linkedin/tiktok URL and its icon
// appears automatically in the card's hover reveal — nothing else to
// wire up.

export type ClientSocials = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
};

export type Client = {
  name: string;
  file: string;
  title: string;
  description: string;
  socials?: ClientSocials;
};

const PLACEHOLDER_TITLE = "Client Partner";
const PLACEHOLDER_DESCRIPTION =
  "Add a short line here about the campaigns, design, or strategy work we've done together.";

const CLIENT_NAMES: { name: string; file: string }[] = [
  { name: "2nd Chance Flowers", file: "2nd Chance Flowers.webp" },
  { name: "BurgerTime", file: "BurgerTime.webp" },
  { name: "Centro Cafe", file: "Centro Cafe.webp" },
  { name: "Ceylon Wedding Planners", file: "Ceylon Wedding Planners.webp" },
  { name: "Ceylora", file: "Ceylora.webp" },
  { name: "Ceyora Jewelry", file: "Ceyora Jewelry.webp" },
  { name: "Ceyzler", file: "Ceyzler.webp" },
  { name: "Cinnarooo", file: "Cinnarooo.webp" },
  { name: "Country Bunches", file: "Country Bunches.webp" },
  { name: "Cyclone Swimming", file: "Cyclone Swimminng.webp" },
  { name: "DB Ceylon", file: "DB Ceylon.webp" },
  { name: "Dhananjaya Bandara", file: "Dhananjaya Bandara.webp" },
  { name: "Doctor Band", file: "Doctor Band.webp" },
  { name: "Grand Ceylon", file: "Grand Ceylon.webp" },
  { name: "Hot Chocolate", file: "Hot Chocolate.webp" },
  { name: "Lakdiv", file: "Lakdiv.webp" },
  { name: "Looks Salon", file: "Looks Salon.webp" },
  { name: "Lovi", file: "Lovi.webp" },
  { name: "Manjula Handapangoda", file: "Manjula Handapangoda.webp" },
  { name: "Nuwan Wijethunga", file: "Nuwan Wijethunga.webp" },
  { name: "Queen of the World", file: "Queen of the World.webp" },
  { name: "Tandoori Grill", file: "Tandoori Grill.webp" },
  { name: "Team T", file: "Team T.webp" },
];

export const CLIENTS: Client[] = CLIENT_NAMES.map(({ name, file }) => ({
  name,
  file,
  title: PLACEHOLDER_TITLE,
  description: PLACEHOLDER_DESCRIPTION,
  // socials: {
  //   facebook: "https://facebook.com/...",
  //   instagram: "https://instagram.com/...",
  //   linkedin: "https://linkedin.com/company/...",
  //   tiktok: "https://tiktok.com/@...",
  // },
}));
