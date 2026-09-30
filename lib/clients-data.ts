// Client roster for the Clients page (components/Clients.tsx +
// components/ClientsCardGrid.tsx) — same brands as
// components/LogoMarquee.tsx (public/images/Clients/*.webp).
// "Cyclone Swimminng" is the on-disk filename's own typo, kept as the
// src but not repeated in the UI.
//
// Social + website links come from "Ceylexa Web Document - Links".
// Centro Cafe has no entry in that document, so it has no links yet.

export type ClientSocials = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
  youtube?: string;
  threads?: string;
  x?: string;
  website?: string;
};

export type Client = {
  name: string;
  file: string;
  title: string;
  description: string;
  socials?: ClientSocials;
};

const DEFAULT_TITLE = "Client Partner";
const DEFAULT_DESCRIPTION =
  "A brand we partner with on digital marketing, content, and growth.";

const CLIENT_DATA: {
  name: string;
  file: string;
  description?: string;
  socials?: ClientSocials;
}[] = [
  {
    name: "2nd Chance Flowers",
    file: "2nd Chance Flowers.webp",
    socials: {
      facebook: "https://www.facebook.com/2ndchanceflowers",
      instagram: "https://www.instagram.com/2ndchanceflowers_srilanka",
      tiktok: "https://www.tiktok.com/@2ndchanceflowers",
      threads: "https://www.threads.com/@2ndchanceflowers_srilanka",
    },
  },
  {
    name: "Burger Time",
    file: "BurgerTime.webp",
    socials: {
      facebook: "https://www.facebook.com/profile.php?id=100093512524259",
      instagram: "https://www.instagram.com/burgertimenz",
      tiktok: "https://www.tiktok.com/@burgertimeauckland",
      threads: "https://www.threads.com/@burgertimenz",
    },
  },
  { name: "Centro Cafe", file: "Centro Cafe.webp" },
  {
    name: "Ceylon Wedding Planners",
    file: "Ceylon Wedding Planners.webp",
    socials: {
      facebook: "https://www.facebook.com/CeylonWeddingPlanners",
      instagram: "https://www.instagram.com/ceylon.wedding.planners",
      tiktok: "https://www.tiktok.com/@ceylon_wedding_planners",
      website: "https://ceylonweddingplanners.lk",
    },
  },
  {
    name: "Ceylora",
    file: "Ceylora.webp",
    socials: {
      facebook: "https://www.facebook.com/Ceylora.lk",
      instagram: "https://www.instagram.com/ceylora.lk",
      x: "https://x.com/CeyloraLK",
      threads: "https://www.threads.com/Ceylora.lk",
    },
  },
  {
    name: "Ceyora",
    file: "Ceyora Jewelry.webp",
    socials: {
      facebook: "https://www.facebook.com/CeyoraJewelry",
      instagram: "https://www.instagram.com/CeyoraJewelry",
      tiktok: "https://www.tiktok.com/CeyoraJewelry",
      threads: "https://www.threads.com/CeyoraJewelry",
    },
  },
  {
    name: "Ceyzler",
    file: "Ceyzler.webp",
    socials: {
      facebook: "https://www.facebook.com/Ceyzler",
      instagram: "https://www.instagram.com/ceyzler.lk",
      x: "https://x.com/CeyzlerOnline",
      threads: "https://www.threads.com/ceyzler.lk",
    },
  },
  {
    name: "Cinnaroo",
    file: "Cinnarooo.webp",
    socials: {
      facebook: "https://www.facebook.com/CinnarooClothing",
      instagram: "https://www.instagram.com/cinnaroo_clothing",
      tiktok: "https://www.tiktok.com/@cinnarooclothing",
      website: "https://cinnaroo.store",
    },
  },
  {
    name: "Country Bunches",
    file: "Country Bunches.webp",
    socials: {
      facebook: "https://www.facebook.com/Country.bunches",
      instagram: "https://www.instagram.com/country.bunches",
      threads: "https://www.threads.com/country.bunches",
      website: "https://country.bunches.lk",
    },
  },
  {
    name: "Cyclone Swimming",
    file: "Cyclone Swimminng.webp",
    socials: {
      facebook: "https://www.facebook.com/CycloneSwimmingConsultancy",
      instagram: "https://www.instagram.com/cycloneswimmingacademy",
      tiktok: "https://www.tiktok.com/@cyclone.swimming",
      website: "https://www.cycloneswimmingconsultancy.com",
    },
  },
  {
    name: "DB Ceylon",
    file: "DB Ceylon.webp",
    description:
      "Branch launch campaign: 100+ influencers, 9.3M+ views and 12M+ people reached.",
    socials: {
      facebook: "https://www.facebook.com/DBCeylonOfficial",
      instagram: "https://www.instagram.com/dbceylonofficial",
      tiktok: "https://www.tiktok.com/@dbceylon",
      website: "https://dbceylon.com",
    },
  },
  {
    name: "Dhananjaya Bandara",
    file: "Dhananjaya Bandara.webp",
    socials: {
      facebook: "https://www.facebook.com/DhananjayaBandaraStudio",
      instagram: "https://www.instagram.com/dhananjaya_bandara_official",
      tiktok: "https://www.tiktok.com/@dananjayabandaraofficial",
      youtube: "https://www.youtube.com/@DhananjayaBandaraOfficial",
    },
  },
  {
    name: "Doctor Band",
    file: "Doctor Band.webp",
    description:
      "Doctor Darling music video launch: 2.3M+ views across YouTube, Facebook and TikTok.",
    socials: {
      facebook: "https://www.facebook.com/doctorbandsl",
      instagram: "https://www.instagram.com/doctorbandsl",
      tiktok: "https://www.tiktok.com/@doctorbandsl",
      youtube: "https://www.youtube.com/channel/UCioOLRA1euuTkNUiEOUdy0A",
    },
  },
  {
    name: "Grand Ceylon",
    file: "Grand Ceylon.webp",
    socials: {
      facebook: "https://www.facebook.com/GrandCeylonnz",
      instagram: "https://www.instagram.com/grandceylonnz",
      threads: "https://www.threads.com/GrandCeylonnz",
      website: "https://GrandCeylon.nz",
    },
  },
  {
    name: "Hot Chocolate",
    file: "Hot Chocolate.webp",
    socials: {
      facebook: "https://www.facebook.com/HOTCHOCOLATE.FB",
      instagram: "https://www.instagram.com/hotchocolate.insta",
      tiktok: "https://www.tiktok.com/@hotchocolatetiktok",
      youtube: "https://www.youtube.com/channel/UC4GtM27yMCO1FZm9jyTmf2g",
    },
  },
  {
    name: "Lakdiv",
    file: "Lakdiv.webp",
    socials: {
      facebook: "https://www.facebook.com/profile.php?id=100047776883896",
      instagram: "https://www.instagram.com/lakdiv_nz",
      threads: "https://www.threads.com/lakdiv_nz",
      website: "https://lakdiv.co.nz/",
    },
  },
  {
    name: "Looks Salon",
    file: "Looks Salon.webp",
    socials: {
      facebook: "https://www.facebook.com/lookssalonlk",
      instagram: "https://www.instagram.com/lookssalonlk",
      tiktok: "https://www.tiktok.com/@lookssalonlk",
      youtube: "https://www.youtube.com/channel/UCA0b17Hp1BRVMExoc_zZg9Q",
    },
  },
  {
    name: "Lovi Ceylon",
    file: "Lovi.webp",
    description:
      "TikTok campaign for the official ceremonial attire of Team Sri Lanka at the Commonwealth Games 2026.",
    socials: {
      facebook: "https://www.facebook.com/lovisarongs",
      instagram: "https://www.instagram.com/lovisarongs",
      tiktok: "https://www.tiktok.com/@loviceylon",
      website: "https://www.lovisarongs.com",
    },
  },
  {
    name: "Manjula Handapangoda",
    file: "Manjula Handapangoda.webp",
    socials: {
      facebook: "https://www.facebook.com/ManjulaHandapangodaBridal",
      instagram: "https://www.instagram.com/manjulahandapangodabridal",
      tiktok: "https://www.tiktok.com/@manjulahandapango",
      website: "https://www.manjulahandapangoda.com",
    },
  },
  {
    name: "Nuwan Wijethunga",
    file: "Nuwan Wijethunga.webp",
    socials: {
      facebook: "https://www.facebook.com/profile.php?id=100064645453990",
      instagram: "https://www.instagram.com/nuwanwijethunga",
      tiktok: "https://www.tiktok.com/@nuwanwijethunga3",
      website: "https://www.nuwanwijethunga.com",
    },
  },
  {
    name: "Queen of the World",
    file: "Queen of the World.webp",
    description:
      "Queen of the World Sri Lanka 2023 digital campaign across Facebook, Instagram and TikTok.",
    socials: {
      facebook: "https://www.facebook.com/QOTWSriLanka",
      instagram: "https://www.instagram.com/qotwsrilanka",
      tiktok: "https://www.tiktok.com/tag/qotwsrilanka",
      youtube: "https://www.youtube.com/@queenoftheworldsrilanka",
    },
  },
  {
    name: "Tandoor Grill",
    file: "Tandoori Grill.webp",
    socials: {
      facebook: "https://www.facebook.com/TandoorGrillNZ",
      instagram: "https://www.instagram.com/TandoorGrillNZ",
      tiktok: "https://www.tiktok.com/@TandoorGrillNZ",
      website: "https://www.tandoorgrill.co.nz/",
    },
  },
  {
    name: "Team Thilanka",
    file: "Team T.webp",
    socials: {
      facebook: "https://www.facebook.com/TeamThilanka",
      instagram: "https://www.instagram.com/teamthilanka",
      threads: "https://www.threads.com/@TeamThilanka",
      website: "https://www.iamthilanka.com",
    },
  },
];

export const CLIENTS: Client[] = CLIENT_DATA.map(
  ({ name, file, description, socials }) => ({
    name,
    file,
    title: DEFAULT_TITLE,
    description: description ?? DEFAULT_DESCRIPTION,
    socials,
  })
);
