// Case studies from "Ceylexa Web Document - Projects".
//
// NOTE: the source document has no images, so every case study reuses one
// of the three template project images (see `image`). Swap in real
// campaign artwork per project in /public/images before launch.

export type ApproachStep = {
  title: string;
  description: string;
};

export type ResultStat = {
  value: string;
  label: string;
  description: string;
};

export type Project = {
  slug: string;
  href: string;
  /** Campaign year, shown on cards. */
  date: string;
  /** Campaign type, e.g. "Digital Marketing Campaign". */
  category: string;
  title: string;
  /** Comma-separated tags used on the card and detail page. */
  tags: string;
  /** Platforms the campaign ran on. */
  platforms: string;
  image: string;
  client: string;
  summary: string;
  overview: string[];
  challengeIntro?: string;
  challenges: string[];
  solutionIntro: string;
  approach: ApproachStep[];
  resultsIntro: string;
  results: ResultStat[];
  impact: string[];
  tagline: string;
};

const IMG = ["/images/project-1.webp", "/images/project-2.webp", "/images/project-3.webp"];

export const PROJECTS_INTRO = {
  eyebrow: "Projects & Campaigns",
  heading: "Ideas That Turn Into",
  headingAccent: "Impact",
  paragraphs: [
    "At Ceylexa, every campaign and project is an opportunity to create something meaningful. From brand launches and digital marketing campaigns to social media activations, creative productions, events, and large-scale collaborations, we bring strategy and creativity together to deliver work that makes an impact. Explore some of the campaigns and projects we’ve worked on across different industries and markets. Each project reflects our approach to understanding the brand, finding the right creative direction, and turning ideas into engaging digital experiences.",
    "Our experience extends across a wide range of industries, giving us the opportunity to work with different audiences, business models, and brand personalities. Whether it’s a growing startup looking to establish itself, an established business launching a new product, a personal brand building its audience, or a major event looking to strengthen its digital presence, we approach every project with the same commitment to quality and creativity.",
    "We understand that different industries require different approaches. A campaign for fashion may need a strong visual story, while a technology brand may require clear communication and education. A hospitality campaign may focus on experiences and engagement, while a corporate project may require a more structured and professional approach. We adapt our thinking and creative execution to suit the brand and the people it wants to reach.",
  ],
  closing:
    "Explore our campaigns and projects to see how Ceylexa turns ideas into creative digital experiences and helps brands make their mark.",
};

export const PROJECTS: Project[] = [
  {
    slug: "queen-of-the-world-sri-lanka-2023",
    href: "/project/queen-of-the-world-sri-lanka-2023",
    date: "2023",
    category: "Digital Marketing Campaign",
    title: "Queen of the World Sri Lanka 2023",
    tags: "Social Media Management, Campaign Content, Influencer Reach",
    platforms: "Facebook | Instagram | TikTok",
    image: IMG[0],
    client: "Queen of the World Sri Lanka",
    summary:
      "A social media and digital campaign built around content, consistency, engagement and audience connection — creating conversations around women’s empowerment and community participation.",
    overview: [
      "Ceylexa Digital was proud to be involved in Queen of the World Sri Lanka 2023, managing its digital presence across Facebook, Instagram, and TikTok and developing campaigns designed to increase visibility, audience engagement, and community participation.",
      "Our role focused on creating and managing engaging digital content, developing campaign concepts, coordinating platform-specific communication, and building meaningful connections with the target audience. Through consistent content, strategic campaign execution, and an audience-focused approach, we successfully helped the campaign reach its target audience and create a strong presence across social media. The campaign was designed to go beyond traditional event promotion. It created conversations around women's empowerment, community engagement, and social impact while giving audiences opportunities to actively participate and connect with the initiative.",
    ],
    challengeIntro:
      "The campaign needed to reach a diverse digital audience while maintaining strong engagement across multiple social media platforms. With audiences consuming content differently across Facebook, Instagram, and TikTok, the challenge was to create communication that felt relevant, engaging, and consistent across each platform. The campaign also aimed to generate meaningful conversations around an important social cause while reaching a significant number of people organically and through campaign activity.",
    challenges: [
      "Building awareness and visibility across multiple social platforms",
      "Reaching the intended target audience effectively",
      "Creating content that encouraged meaningful engagement and participation",
      "Maintaining consistent communication across Facebook, Instagram, and TikTok",
      "Turning social media attention into community participation",
      "Supporting the campaign's wider social impact objectives",
      "Creating content that could connect with audiences across different demographics",
    ],
    solutionIntro:
      "Team Ceylexa developed a comprehensive social media and digital campaign strategy focused on content, consistency, engagement, and audience connection. We managed the campaign across Facebook, Instagram, and TikTok, adapting content and communication to suit the unique behaviour of audiences on each platform.",
    approach: [
      { title: "Social Media Management", description: "We managed the day-to-day digital presence across Facebook, Instagram, and TikTok, ensuring that the campaign maintained a consistent and recognizable identity across all platforms." },
      { title: "Campaign Content", description: "Our team developed engaging campaign content designed to capture attention, communicate the campaign message clearly, and encourage audiences to interact and participate." },
      { title: "Platform-Specific Strategy", description: "Rather than using the same content everywhere, we adapted creative formats, messaging, and publishing approaches according to each platform's audience and content environment." },
      { title: "Audience Engagement", description: "We focused on creating content that encouraged conversations, interactions, shares, and participation, helping the campaign build a stronger relationship with its audience." },
      { title: "Community-Focused Communication", description: "The campaign's social impact message was integrated into the digital strategy, helping audiences understand the wider purpose behind the initiative and encouraging meaningful community involvement." },
      { title: "Influencer & Digital Reach", description: "The campaign also benefited from extended digital reach through influencer and creator engagement, helping introduce the campaign to new audiences and generate additional awareness." },
    ],
    resultsIntro:
      "The campaign delivered strong digital engagement and meaningful community outcomes, exceeding its initial expectations across several key areas.",
    results: [
      { value: "5.8M+", label: "Impressions", description: "The campaign generated over 5.8 million impressions, significantly expanding its digital visibility and helping the initiative reach a much wider audience." },
      { value: "400K+", label: "Engagements", description: "More than 400,000 engagements were generated across the campaign, demonstrating strong audience interaction and interest in the content." },
      { value: "7,000+", label: "Video Shares", description: "The campaign generated 7,000+ personalised video shares, helping audiences actively participate in spreading the campaign message through their own networks." },
      { value: "11,550+", label: "Applications", description: "The campaign attracted 11,550+ applications from female contestants eager to participate in and compete at the event, demonstrating significant interest and engagement while contributing to the initiative’s broader community impact." },
      { value: "25%", label: "Increase in Positive Sentiment", description: "The campaign contributed to a 25% increase in positive brand sentiment, strengthening Queen of the World association." },
      { value: "6,000+", label: "Influencer Watch Hours", description: "Influencer and creator activity generated more than 6,000 watch hours, extending the campaign's reach and helping the message connect with additional audiences." },
    ],
    impact: [
      "The Queen of the World Sri Lanka 2023 campaign demonstrated how strategic digital marketing can combine audience engagement with meaningful social impact. By bringing together strong social media management, creative content, platform-specific campaigns, influencer reach, and community-focused storytelling, Team Ceylexa helped create a campaign that was not only highly visible but also encouraged people to engage with a meaningful cause.",
      "The results demonstrated the power of creating digital campaigns that give audiences more than something to watch — they give them a reason to participate, share, and become part of the story.",
    ],
    tagline: "A campaign built for visibility. A strategy built for engagement. An impact that reached beyond social media.",
  },
  {
    slug: "mrs-sri-lanka-2023",
    href: "/project/mrs-sri-lanka-2023",
    date: "2023",
    category: "Digital Marketing Campaign",
    title: "Mrs Sri Lanka 2023",
    tags: "Social Media Management, Creative Content Strategy, Reach & Traffic",
    platforms: "Facebook | Instagram | TikTok",
    image: IMG[1],
    client: "Mrs Sri Lanka",
    summary:
      "A strategy designed to maximise reach, traffic, engagement, and online visibility — turning social platforms into an active space where audiences could follow the competition.",
    overview: [
      "Ceylexa Digital was proud to be the Digital Marketing Partner for Mrs Sri Lanka 2023, managing the event's digital presence across Facebook, Instagram, and TikTok.",
      "The campaign focused on building a strong and highly visible online presence for Mrs Sri Lanka 2023, reaching a wider audience, increasing social media engagement, and generating greater interest around the competition. Our team managed the campaign's social media communication, developed engaging content, and created platform-specific campaigns designed to capture attention and drive audience interaction. With a combination of creative content, strategic social media management, targeted campaigns, and consistent digital communication, we helped bring the Mrs Sri Lanka 2023 experience to a much larger online audience.",
      "The campaign was not simply about promoting an event. It was about creating excitement, building anticipation, celebrating the contestants, and keeping audiences connected throughout the Mrs Sri Lanka 2023 journey.",
    ],
    challengeIntro:
      "Mrs Sri Lanka 2023 required a strong digital presence capable of reaching a broad audience while maintaining consistent engagement throughout the competition. With Facebook, Instagram, and TikTok attracting audiences with different content preferences and behaviours, the challenge was to create a digital strategy that could deliver strong visibility across multiple platforms while keeping the campaign fresh, engaging, and relevant. The campaign also needed to generate greater traffic and interest around the event, encourage audiences to follow the journey, and turn social media attention into meaningful participation.",
    challenges: [
      "Increasing awareness and visibility for Mrs Sri Lanka 2023",
      "Reaching a larger and more relevant social media audience",
      "Driving traffic to the event's digital platforms",
      "Creating consistent engagement across Facebook, Instagram, and TikTok",
      "Building excitement and anticipation around the competition",
      "Creating engaging content around contestants, events, and campaign moments",
      "Increasing audience interaction through shares, comments, reactions, and video views",
      "Maintaining a strong and recognisable digital identity throughout the campaign",
      "Extending the campaign's reach beyond the existing audience",
    ],
    solutionIntro:
      "Team Ceylexa developed and executed a comprehensive digital marketing strategy designed to maximise reach, traffic, engagement, and online visibility for Mrs Sri Lanka 2023. Our strategy combined creative content production, social media management, campaign planning, audience engagement, and digital promotion to create a consistent online experience across Facebook, Instagram, and TikTok. Rather than treating each platform the same, we adapted the content and communication approach according to the audience behaviour and content formats of each channel.",
    approach: [
      { title: "Social Media Management", description: "We managed the official digital presence across Facebook, Instagram, and TikTok, maintaining consistent communication and keeping audiences connected throughout the campaign." },
      { title: "Creative Content Strategy", description: "Our team developed a wide range of engaging content designed to showcase the contestants, competition highlights, event moments, personalities, and key campaign messages." },
      { title: "Platform-Specific Content", description: "Content was adapted for each platform to maximise visibility and engagement, including short-form videos, reels, photographs, promotional posts, stories, and other interactive formats." },
      { title: "Reach & Traffic Campaigns", description: "We focused on increasing the campaign's overall visibility and driving audiences towards the event's digital platforms and content, helping generate greater interest and traffic throughout the campaign." },
      { title: "Audience Engagement", description: "Interactive and engaging content encouraged audiences to react, comment, share, watch, and follow the Mrs Sri Lanka journey, helping build an active online community around the competition." },
      { title: "Campaign Promotion", description: "Strategic promotional activity helped extend the campaign beyond the existing follower base and introduce Mrs Sri Lanka 2023 to new audiences." },
      { title: "Contestant & Event Promotion", description: "We created opportunities to highlight contestants and important moments throughout the competition, giving audiences more reasons to follow, engage with, and share the campaign." },
      { title: "Continuous Optimisation", description: "We monitored content performance and audience response throughout the campaign, allowing the team to identify strong-performing content and optimise the digital approach accordingly." },
    ],
    resultsIntro:
      "The Mrs Sri Lanka 2023 digital campaign generated significant online visibility and audience activity across multiple social media platforms.",
    results: [
      { value: "7.1M+", label: "Social Media Impressions", description: "The campaign generated 7.1 million impressions, giving Mrs Sri Lanka 2023 extensive visibility across Facebook, Instagram, and TikTok and significantly increasing the number of people exposed to the campaign." },
      { value: "8M+", label: "People Reached", description: "More than 8 million people were reached through the campaign, expanding the competition's digital audience and introducing Mrs Sri Lanka 2023 to new communities." },
      { value: "547K", label: "Engagements", description: "The campaign generated 547K engagements, including reactions, comments, shares, and other audience interactions, demonstrating strong interest in the content." },
      { value: "2M", label: "Video Views", description: "Campaign videos and short-form content generated 2 million views, helping increase awareness and keeping audiences connected to the Mrs Sri Lanka 2023 journey." },
      { value: "1.2M", label: "Website / Profile Visits", description: "The campaign drove 1.2 million visits to relevant digital platforms, helping convert social media attention into measurable traffic and interest." },
      { value: "400K", label: "Content Shares", description: "Highly engaging campaign content generated 400K shares, allowing audiences to become active participants in spreading the Mrs Sri Lanka 2023 story." },
      { value: "Growth", label: "Strong Audience Growth", description: "The campaign contributed to significant growth across the official social media platforms, helping establish a stronger and more active digital community around Mrs Sri Lanka." },
    ],
    impact: [
      "The Mrs Sri Lanka 2023 campaign demonstrated the value of combining creative storytelling with strategic digital marketing to build visibility around a major event. Through consistent social media management, engaging content, targeted promotion, and platform-specific strategies, Team Ceylexa helped expand the campaign's digital reach and connect Mrs Sri Lanka 2023 with a significantly wider online audience.",
      "The campaign transformed social media platforms into an active space where audiences could discover contestants, follow the competition, engage with content, and experience the journey beyond the physical event.",
      "Most importantly, the campaign created measurable digital momentum, increasing reach, traffic, engagement, video consumption, and overall online visibility while strengthening the digital presence of Mrs Sri Lanka 2023. This campaign became another example of how strategy, creativity, and effective digital execution can turn an event into a powerful online experience.",
    ],
    tagline: "Strategy. Creativity. Effective digital execution.",
  },
  {
    slug: "seed-movie-2022",
    href: "/project/seed-movie-2022",
    date: "2022",
    category: "Digital Marketing Launch Campaign",
    title: "Seed Movie 2022",
    tags: "Trilingual Content Strategy, Launch Campaign, Social Media Management",
    platforms: "Facebook | Instagram | TikTok",
    image: IMG[2],
    client: "Seed Movie",
    summary:
      "A trilingual digital marketing strategy in Sinhala, English, and Tamil to launch a landmark Sri Lankan cinematic project.",
    overview: [
      "Ceylexa Digital was proud to be part of the digital marketing launch campaign for Seed Movie 2022, a landmark Sri Lankan cinematic project presented in three languages - Sinhala, English, and Tamil.",
      "The film tells a story inspired by historical events surrounding the 1544 massacre of nearly 700 Christians in Mannar and related events in 1560 during the rule of King Sangiliyan of Jaffna. Bringing this historical story to audiences through three languages created a unique opportunity to connect with Sri Lankan audiences across different linguistic communities. As the digital marketing team, our focus was to build awareness around the film, create anticipation ahead of its release, generate conversations across social media, and introduce the movie to a broad digital audience.",
      "The campaign centred on creating a strong online presence for the movie through engaging content, strategic social media communication, launch promotions, and platform-specific campaigns across Facebook, Instagram, and TikTok.",
    ],
    challengeIntro:
      "Launching a major film across three languages presented a unique digital marketing challenge. The campaign needed to communicate the story, identity, and significance of the movie while reaching audiences from different linguistic and cultural backgrounds. At the same time, the digital campaign needed to create enough awareness and anticipation to encourage audiences to discover the movie, engage with its content, and follow its journey from promotion through launch.",
    challenges: [
      "Building awareness for a new cinematic release",
      "Promoting a historically inspired story to a broad audience",
      "Reaching Sinhala, Tamil, and English-speaking audiences",
      "Maintaining a consistent brand identity across three languages",
      "Creating content that worked across different social media platforms",
      "Generating anticipation and interest ahead of the movie launch",
      "Driving strong social media reach and audience engagement",
      "Introducing the film to audiences beyond its existing community",
      "Creating a digital presence capable of supporting the movie beyond traditional promotion",
    ],
    solutionIntro:
      "Team Ceylexa developed a trilingual digital marketing strategy designed to maximise the movie's online visibility and connect the campaign with audiences across different platforms and communities. Our approach combined social media management, creative content, campaign planning, multilingual communication, audience engagement, and digital promotion. The strategy focused on presenting the movie in a way that made the story accessible and engaging while maintaining a strong and consistent digital identity throughout the campaign.",
    approach: [
      { title: "Trilingual Content Strategy", description: "We developed and managed digital communication across Sinhala, English, and Tamil, allowing the campaign to connect with a wider cross-section of Sri Lankan audiences." },
      { title: "Social Media Management", description: "We managed the movie's digital presence across Facebook, Instagram, and TikTok, creating a consistent flow of content throughout the campaign." },
      { title: "Launch Campaign Strategy", description: "Our team planned the digital rollout around the movie launch, building awareness and anticipation through a structured sequence of promotional content." },
      { title: "Creative Content Development", description: "We created engaging social media content designed to introduce the movie, highlight its story, showcase key elements of the production, and encourage audiences to discover more." },
      { title: "Platform-Specific Campaigns", description: "Content was adapted to suit the different formats and audience behaviours of Facebook, Instagram, and TikTok, helping maximise reach and engagement across each platform." },
      { title: "Audience Engagement", description: "We focused on content that encouraged audiences to react, comment, share, watch, and participate in conversations around the movie." },
      { title: "Historical Storytelling", description: "The digital campaign helped communicate the historical foundation of the film in an accessible way, giving audiences greater context and encouraging interest in the story behind the production." },
      { title: "Digital Reach & Awareness", description: "Through consistent campaign activity and targeted digital promotion, we worked to extend the movie's visibility beyond its existing audience and introduce it to new viewers." },
    ],
    resultsIntro:
      "The Seed Movie 2022 digital launch campaign helped establish a strong online presence for the film and generated significant awareness across social media.",
    results: [
      { value: "6M", label: "Social Media Impressions", description: "The campaign generated 6 million impressions, providing extensive visibility for the movie across Facebook, Instagram, and TikTok." },
      { value: "5.5M", label: "People Reached", description: "More than 5.5 million people were reached through the campaign, helping introduce Seed Movie 2022 to a broad and diverse digital audience." },
      { value: "4M", label: "Engagements", description: "The campaign generated 4 million engagements, including reactions, comments, shares, and other interactions, demonstrating strong audience interest in the movie." },
      { value: "5M", label: "Video Views", description: "Promotional videos and short-form content generated 5 million views, helping audiences discover the film and its story through engaging digital content." },
      { value: "3", label: "Languages — Trilingual Audience Reach", description: "By communicating across Sinhala, English, and Tamil, the campaign created opportunities to reach audiences from different linguistic communities and build broader awareness around the movie." },
      { value: "Launch", label: "Strong Launch Visibility", description: "The digital campaign helped create significant online visibility around the movie's launch, giving Seed Movie 2022 a strong presence across multiple social media platforms." },
    ],
    impact: [
      "The Seed Movie 2022 campaign demonstrated how digital marketing can help bring a culturally and historically significant film to a wider modern audience. The film's unique trilingual release in Sinhala, English, and Tamil created an opportunity to communicate its story across different linguistic communities. Through strategic social media management, multilingual content, creative storytelling, and launch-focused digital campaigns, Team Ceylexa helped build awareness and engagement around the movie. The campaign transformed social media into an important platform for introducing audiences to the film, its historical inspiration, and its wider story, creating conversations and interest well beyond traditional movie promotion.",
      "For Ceylexa, the project represented an opportunity to combine storytelling, creativity, digital strategy, and cultural relevance to support the launch of a unique Sri Lankan cinematic project.",
    ],
    tagline: "Three Languages. One Story. A Digital Campaign Built to Reach Sri Lanka.",
  },
  {
    slug: "darling-music-video-doctor-band",
    href: "/project/darling-music-video-doctor-band",
    date: "Music Launch",
    category: "Social Media Launch Campaign",
    title: "Darling Music Video – DOCTOR Band",
    tags: "Social Media Campaign, Influencer Marketing, Video Promotion",
    platforms: "YouTube | Facebook | TikTok",
    image: IMG[0],
    client: "DOCTOR Band",
    summary:
      "A social media launch strategy focused on reach, video consumption, audience engagement, and influencer amplification for the Doctor Darling music video.",
    overview: [
      "Ceylexa was proud to be part of the Doctor Darling music video launch campaign by DOCTOR Band, developing and executing a social media strategy designed to build awareness, generate excitement, and drive strong audience engagement across major digital platforms.",
      "The campaign focused on creating visibility around the music video through engaging social media content, platform-specific promotion, and influencer collaboration. By combining organic content with influencer-driven reach, the campaign successfully connected the music video with a wider digital audience and generated significant video views across YouTube, Facebook, and TikTok.",
    ],
    challengeIntro:
      "Launching a music video in a highly competitive digital environment requires more than simply publishing the video. The campaign needed to capture attention quickly, encourage audiences to watch and share the content, and create momentum across multiple social media platforms.",
    challenges: [
      "Building awareness for the music video launch",
      "Reaching a wider and relevant music audience",
      "Creating excitement around the release",
      "Driving video views across multiple platforms",
      "Maintaining consistent communication across social media",
      "Encouraging audience interaction and content sharing",
      "Extending the campaign’s reach through influencer marketing",
      "Creating strong digital momentum around the DOCTOR Band brand",
    ],
    solutionIntro:
      "Team Ceylexa developed a social media launch strategy focused on reach, video consumption, audience engagement, and influencer amplification.",
    approach: [
      { title: "Social Media Campaign Management", description: "We managed the digital campaign across Facebook, TikTok, and YouTube, creating consistent communication around the music video and helping maintain momentum throughout the launch." },
      { title: "Creative Content Strategy", description: "Our team developed promotional content designed to capture attention, create curiosity, and encourage audiences to watch the full music video." },
      { title: "Platform-Specific Promotion", description: "Content and promotional approaches were adapted to suit the different behaviours and formats of YouTube, Facebook, and TikTok audiences." },
      { title: "Influencer Campaign", description: "The campaign was supported by an influencer collaboration with Denethi Pussegoda, helping introduce the music video to a broader audience and generate additional awareness and engagement." },
      { title: "Audience Engagement", description: "The campaign focused on encouraging viewers to interact with, share, and discover the music video, helping turn social media attention into measurable video consumption." },
      { title: "Digital Reach & Visibility", description: "Through coordinated social media activity and influencer amplification, the campaign created strong visibility for the release across multiple digital platforms." },
    ],
    resultsIntro: "The Doctor Darling launch delivered millions of views across three platforms.",
    results: [
      { value: "362K+", label: "YouTube Views", description: "The Doctor Darling music video generated more than 362,000 views on YouTube, demonstrating strong audience interest in the release." },
      { value: "1M+", label: "Facebook Views", description: "The campaign achieved more than 1 million views on Facebook, significantly expanding the music video's visibility among social media audiences." },
      { value: "1M+", label: "TikTok Views", description: "TikTok generated more than 1 million views, helping the campaign reach a highly engaged short-form video audience." },
      { value: "Denethi Pussegoda", label: "Influencer Campaign", description: "The collaboration with Denethi Pussegoda extended the campaign's reach beyond the band's existing audience and created an additional channel for discovering and engaging with the music video." },
    ],
    impact: [
      "The Doctor Darling campaign demonstrated the power of combining social media strategy, creative content, platform-specific promotion, and influencer marketing to launch music content successfully in the digital space. With more than 2.3 million views across YouTube, Facebook, and TikTok, the campaign created significant online visibility for the music video and helped DOCTOR Band connect with audiences across multiple digital platforms.",
      "The campaign brought together content, social media, video, and influencer marketing to create momentum around the release and turn a music video launch into a wider digital experience.",
    ],
    tagline: "One Music Video. Multiple Platforms. Millions of Views. A Digital Campaign Built for Reach.",
  },
  {
    slug: "ayale-music-video-tehan-perera",
    href: "/project/ayale-music-video-tehan-perera",
    date: "Music Launch",
    category: "Social Media Launch & Content Creation",
    title: "Ayale Music Video – Tehan Perera",
    tags: "Social Media Launch, Content Creation, Video Promotion",
    platforms: "YouTube | Facebook | TikTok",
    image: IMG[1],
    client: "Tehan Perera",
    summary:
      "A coordinated launch strategy and creative content production that generated more than 7 million video views across YouTube, Facebook, and TikTok.",
    overview: [
      "Ceylexa Digital was proud to be part of the Ayale music video campaign by Tehan Perera, supporting the release through a strategic social media launch and creative content production designed to build awareness, generate excitement, and drive strong audience engagement across major digital platforms.",
      "The campaign focused on creating engaging promotional content around the music video, maintaining momentum across social media, and reaching audiences through platform-specific content strategies. By combining creative content with coordinated social media promotion, the campaign generated millions of views across YouTube, Facebook, and TikTok.",
    ],
    challengeIntro:
      "Launching a music video requires strong visibility, engaging content, and consistent digital communication to capture audience attention and encourage viewers to discover and share the release.",
    challenges: [
      "Building awareness around the music video launch",
      "Reaching a broad and relevant music audience",
      "Creating engaging content to support the release",
      "Driving video views across multiple platforms",
      "Maintaining launch momentum across social media",
      "Adapting content for different platform formats and audiences",
      "Encouraging audience engagement and content sharing",
      "Creating a strong digital presence for the release",
    ],
    solutionIntro:
      "Team Ceylexa developed a social media launch and content creation strategy focused on visibility, audience engagement, and video consumption. We developed and managed a coordinated digital launch strategy designed to create awareness and build momentum around the release of Ayale.",
    approach: [
      { title: "Creative Content Creation", description: "Our team created engaging promotional content designed to capture attention, communicate the music video's identity, and encourage audiences to watch and interact with the release." },
      { title: "Platform-Specific Content", description: "Content was adapted for YouTube, Facebook, and TikTok to suit the different formats, viewing behaviours, and audiences across each platform." },
      { title: "Video Promotion", description: "The campaign focused on driving awareness and video consumption through consistent social media activity and strategically planned promotional content." },
      { title: "Audience Engagement", description: "We created content designed to encourage viewers to engage with the music video, interact with posts, and share the release with their own networks." },
      { title: "Digital Campaign Management", description: "The campaign was managed with a focus on maintaining consistent visibility throughout the launch and maximising opportunities for reach, engagement, and video views." },
    ],
    resultsIntro: "Across three platforms, the Ayale campaign generated more than 7 million video views.",
    results: [
      { value: "3.1M+", label: "YouTube Views", description: "The Ayale music video generated more than 3.1 million views on YouTube, demonstrating strong audience interest and significant video consumption." },
      { value: "2.2M+", label: "Facebook Views", description: "The campaign generated more than 2.2 million views on Facebook, expanding the music video's reach and visibility across social media." },
      { value: "1.7M+", label: "TikTok Views", description: "TikTok generated more than 1.7 million views, helping the release connect with a highly active short-form video audience." },
      { value: "7M+", label: "Combined Views", description: "Across YouTube, Facebook, and TikTok, the campaign generated more than 7 million video views, creating substantial digital visibility for the Ayale release." },
    ],
    impact: [
      "The Ayale campaign demonstrated how creative content and a well-coordinated social media launch can generate significant visibility for a music release. Through strategic content creation, platform-specific communication, and consistent digital promotion, Ceylexa Digital helped Tehan Perera's Ayale connect with audiences across multiple major platforms and generate millions of video views.",
      "The campaign successfully brought together social media, creative content, video promotion, and digital strategy to create strong momentum around the music video launch.",
    ],
    tagline: "One Release. Three Platforms. 7M+ Views. A Digital Campaign Built for Reach.",
  },
  {
    slug: "gajaman-nona-music-video-tehan-perera",
    href: "/project/gajaman-nona-music-video-tehan-perera",
    date: "Music Launch",
    category: "Social Media Launch & Content Creation",
    title: "Gajaman Nona Music Video – Tehan Perera",
    tags: "Social Media Launch, Content Creation, Collaboration Promotion",
    platforms: "YouTube | Facebook | TikTok",
    image: IMG[2],
    client: "Tehan Perera & Yohani Perera",
    summary:
      "A collaboration-focused launch strategy that brought two artists' audiences together and delivered 8.8M+ combined views.",
    overview: [
      "Ceylexa Digital was proud to be part of the Gajaman Nona music video campaign by Tehan Perera, a special musical collaboration with Yohani Perera. The campaign focused on creating strong digital visibility for the release through strategic social media promotion, creative content, and platform-specific communication.",
      "With the collaboration bringing together two artists and their audiences, the campaign provided an opportunity to create wider awareness, generate excitement around the release, and connect with music audiences across multiple digital platforms.",
    ],
    challengeIntro:
      "The launch of a collaborative music video requires a digital strategy capable of bringing together different audiences while creating strong momentum around the release.",
    challenges: [
      "Building awareness around the music video launch",
      "Promoting the collaboration between Tehan Perera and Yohani Perera",
      "Reaching audiences from both artists' digital communities",
      "Creating engaging content around the release",
      "Driving video views across multiple platforms",
      "Maintaining consistent communication throughout the campaign",
      "Adapting promotional content for different social media platforms",
      "Encouraging audiences to discover, watch, and share the music video",
    ],
    solutionIntro:
      "Team Ceylexa developed a social media launch and content creation strategy designed to maximise awareness, audience engagement, and video consumption.",
    approach: [
      { title: "Social Media Launch Strategy", description: "We planned and executed a coordinated social media launch to build anticipation around the release and maintain strong visibility across the campaign." },
      { title: "Creative Content Creation", description: "Our team developed promotional content designed to highlight the collaboration, capture audience attention, and encourage viewers to discover the music video." },
      { title: "Collaboration-Focused Promotion", description: "The digital strategy placed the collaboration between Tehan Perera and Yohani Perera at the centre of the campaign, helping connect audiences from both artists." },
      { title: "Platform-Specific Content", description: "Content was tailored for YouTube, Facebook, and TikTok to suit the unique formats, viewing behaviours, and audiences of each platform." },
      { title: "Video Promotion", description: "Strategic social media promotion was used to drive traffic towards the music video and encourage continued video consumption across platforms." },
      { title: "Audience Engagement", description: "The campaign focused on creating content that encouraged viewers to interact with, share, and participate in the release, helping extend its digital reach." },
    ],
    resultsIntro: "The collaboration generated more than 8.8 million combined video views.",
    results: [
      { value: "3.7M+", label: "YouTube Views", description: "The Gajaman Nona music video generated more than 3.7 million views on YouTube, demonstrating significant audience interest in the release." },
      { value: "1.7M+", label: "Facebook Views", description: "The campaign achieved more than 1.7 million views on Facebook, expanding the music video's visibility across the platform." },
      { value: "3.4M+", label: "TikTok Views", description: "TikTok generated more than 3.4 million views, helping the collaboration reach a large short-form video audience." },
      { value: "8.8M+", label: "Combined Views", description: "Across YouTube, Facebook, and TikTok, the campaign generated more than 8.8 million video views, creating substantial digital visibility for the music video." },
    ],
    impact: [
      "The Gajaman Nona campaign demonstrated the potential of combining creative content, social media strategy, and collaborative artist promotion to generate significant digital reach. By placing the collaboration between Tehan Perera and Yohani Perera at the heart of the campaign, Ceylexa helped create awareness and engagement around the release while connecting with audiences across multiple platforms.",
      "With 8.8M+ combined views, the campaign achieved strong visibility across YouTube, Facebook, and TikTok and created significant digital momentum for the music video.",
    ],
    tagline: "Two Artists. One Collaboration. 8.8M+ Views. A Digital Campaign Built for Impact.",
  },
  {
    slug: "natural-affection-brand-launch",
    href: "/project/natural-affection-brand-launch",
    date: "Brand Launch",
    category: "Social Media Launch & Content Creation",
    title: "Natural Affection – Brand Launch & Content Creation",
    tags: "Brand Launch Strategy, Content Creation, Social Media Management",
    platforms: "YouTube | Facebook | TikTok",
    image: IMG[0],
    client: "Natural Affection",
    summary:
      "The launch of a premium flower shop in Colombo 7 — establishing a digital presence and a strong visual identity across social media.",
    overview: [
      "Ceylexa Digital was proud to be part of the Natural Affection brand launch, supporting the introduction of this premium flower shop in Colombo 7 through strategic social media marketing, creative content creation, and digital brand communication. The campaign was designed to establish Natural Affection's digital presence, introduce the brand to its target audience, create awareness, and build a strong visual identity across social media. Through carefully planned content and consistent platform-specific communication, the campaign helped position Natural Affection as a premium destination for flowers and gifting.",
    ],
    challengeIntro:
      "As a new premium flower brand entering a competitive market, Natural Affection needed to establish a strong digital identity and create awareness among the right audience.",
    challenges: [
      "Launching the Natural Affection brand in the digital space",
      "Building awareness for a new premium flower shop",
      "Establishing a distinctive and recognisable visual identity",
      "Reaching the right audience across social media",
      "Creating premium and engaging content",
      "Building interest around the brand and its products",
      "Driving video views and social media engagement",
      "Encouraging audiences to share and discover the brand",
    ],
    solutionIntro:
      "Team Ceylexa developed a brand launch and content creation strategy focused on awareness, reach, engagement, and establishing a strong digital identity for Natural Affection.",
    approach: [
      { title: "Brand Launch Strategy", description: "We developed a structured social media launch strategy designed to introduce Natural Affection to the market and create strong initial awareness around the brand." },
      { title: "Creative Content Creation", description: "Our team developed visually appealing and engaging content that reflected the premium positioning of Natural Affection while showcasing its flowers, arrangements, gifting experiences, and brand personality." },
      { title: "Social Media Management", description: "We managed the brand's social media presence across Facebook, Instagram, TikTok, and YouTube, maintaining consistent communication and building a recognisable digital identity." },
      { title: "Premium Visual Storytelling", description: "Content was created to communicate the elegance, beauty, and emotional value associated with flowers and gifting, helping Natural Affection establish a distinctive presence online." },
      { title: "Platform-Specific Content", description: "Creative assets were adapted to suit different platforms and audience behaviours, allowing the brand to maximise visibility across social media." },
      { title: "Audience Engagement", description: "The campaign focused on creating shareable and engaging content that encouraged audiences to interact with the brand, discover its products, and share content with their own networks." },
    ],
    resultsIntro: "The Natural Affection launch generated substantial digital visibility for the new brand.",
    results: [
      { value: "6M+", label: "Social Media Impressions", description: "The Natural Affection launch generated more than 6 million social media impressions, creating significant visibility for the new brand." },
      { value: "5.5M+", label: "People Reached", description: "The campaign reached more than 5.5 million people, helping introduce Natural Affection to a broad digital audience." },
      { value: "5M+", label: "Video Views", description: "Campaign content generated more than 5 million video views, demonstrating strong audience interest in the brand's visual content." },
      { value: "20K+", label: "Shares", description: "More than 20,000 content shares helped extend the campaign's organic reach and introduced Natural Affection to additional audiences through social sharing." },
    ],
    impact: [
      "The Natural Affection brand launch demonstrated how strategic digital marketing and high-quality content creation can help establish a new premium brand and generate significant awareness from the beginning. Through a combination of brand strategy, creative content, social media management, visual storytelling, and platform-specific campaigns, Ceylexa helped Natural Affection build a strong digital foundation and connect with a large online audience.",
      "The campaign generated 6M+ impressions, reached 5.5M+ people, delivered 5M+ video views, and achieved 20K+ shares, creating substantial digital visibility for the Natural Affection brand.",
    ],
    tagline: "A New Brand. A Premium Identity. Millions Reached. A Digital Launch Built for Growth.",
  },
  {
    slug: "db-ceylon-branch-launch",
    href: "/project/db-ceylon-branch-launch",
    date: "Branch Launch",
    category: "Social Media Campaign, Content Creation & Influencer Marketing",
    title: "DB Ceylon – Branch Launch",
    tags: "Influencer Marketing, Paid Media, Content Creation",
    platforms: "Facebook | Instagram | TikTok",
    image: IMG[1],
    client: "DB Ceylon",
    summary:
      "An integrated social media, content, influencer, and paid media launch with 100+ influencers, 9.3M+ views and 12M+ people reached.",
    overview: [
      "Ceylexa Digital was proud to lead the digital launch campaign for DB Ceylon, a brand created as a tribute to Sri Lanka's rich cultural heritage while bringing timeless traditions into a bold new era of style and sophistication.",
      "Rooted in the island's artistry and inspired by the creative vision of Dhananjaya Bandara Stylist Hair and Makeup Studio, DB Ceylon brings together creativity, elegance, and expertise to reimagine Sri Lankan customs through a contemporary lens. The brand represents more than style — it represents a story of legacy, culture, and modern expression. Ceylexa Digital developed a comprehensive launch strategy designed to introduce DB Ceylon to a wide audience, build brand awareness, create conversations, and establish a strong digital presence from the beginning.",
    ],
    challengeIntro:
      "Launching a culturally inspired premium brand requires a strategy that can communicate its story while reaching a large and relevant audience. DB Ceylon needed to create significant awareness around the launch while introducing its unique identity to audiences across multiple digital platforms.",
    challenges: [
      "Creating strong awareness for the DB Ceylon branch launch",
      "Introducing the brand's cultural story and identity",
      "Reaching a large and relevant digital audience",
      "Creating premium and engaging launch content",
      "Generating conversations and interactions around the brand",
      "Building visibility across multiple social media platforms",
      "Creating significant reach within a short campaign period",
      "Leveraging influencer marketing at scale",
      "Combining influencer activity with paid media to maximise campaign visibility",
    ],
    solutionIntro:
      "Team Ceylexa developed an integrated social media, content, influencer, and paid media strategy designed to maximise reach, engagement, brand awareness, and launch visibility.",
    approach: [
      { title: "Social Media Launch Campaign", description: "We planned and executed a coordinated social media campaign to introduce DB Ceylon, communicate its brand story, and build excitement around the branch launch." },
      { title: "Premium Content Creation", description: "Our team created visually engaging content that reflected DB Ceylon's premium positioning while highlighting its connection to Sri Lankan culture, artistry, heritage, and contemporary style." },
      { title: "100+ Influencer Campaign", description: "A major component of the launch was an extensive influencer marketing campaign involving 100+ influencers. The campaign was designed to bring DB Ceylon directly into different influencer communities and extend the brand's visibility across a diverse range of audiences." },
      { title: "Paid Media Campaigns", description: "Alongside influencer marketing, we focused on strategic organic content distribution to amplify key launch content, extend audience reach, and increase visibility across relevant digital platforms." },
      { title: "Influencer & Paid Media Integration", description: "Rather than treating influencer marketing and paid advertising as separate activities, the campaign brought both together as part of one wider digital strategy - using multiple channels to build awareness, generate interactions, and maintain launch momentum." },
      { title: "Brand Storytelling", description: "Content and campaign communication focused on DB Ceylon's unique story, connecting Sri Lankan heritage and traditional artistry with modern style, creativity, and sophistication." },
      { title: "Audience Engagement", description: "The campaign was designed to encourage audiences to interact with, share, and discover the new brand, helping transform launch visibility into meaningful digital engagement." },
    ],
    resultsIntro: "The DB Ceylon launch delivered large-scale reach and interaction in a short campaign period.",
    results: [
      { value: "9.3M+", label: "Views", description: "The campaign generated more than 9.3 million views, creating substantial visibility for the DB Ceylon launch across digital platforms." },
      { value: "7.7M+", label: "Interactions", description: "More than 7.7 million interactions were generated throughout the campaign, demonstrating significant audience activity around the brand and its content." },
      { value: "500K+", label: "Shares", description: "The campaign achieved more than 500,000 shares, helping audiences actively distribute DB Ceylon content across their own networks." },
      { value: "12M+", label: "People Reached", description: "The campaign reached more than 12 million people, significantly expanding DB Ceylon's digital visibility during the launch." },
      { value: "8M+", label: "Brand Awareness", description: "The campaign generated more than 8 million brand-awareness outcomes, supporting DB Ceylon's introduction to a large digital audience and strengthening recognition around the new brand." },
    ],
    impact: [
      "The DB Ceylon Branch Launch demonstrated the impact of combining large-scale influencer marketing, creative content, social media strategy, and paid media into one integrated launch campaign. With 100+ influencers participating alongside targeted paid media activity, Ceylexa created multiple pathways for audiences to discover and engage with DB Ceylon. The campaign successfully translated the brand's story of Sri Lankan heritage, legacy, artistry, and modern sophistication into a strong digital presence.",
      "The campaign delivered 9.3M+ views, 7.7M+ interactions, 500K+ shares, and 12M+ reach, creating significant awareness and digital momentum around the DB Ceylon launch.",
    ],
    tagline: "100+ Influencers. 12M+ Reach. One Powerful Brand Story. A Launch Built to Create Impact.",
  },
  {
    slug: "lovi-ceylon-commonwealth-games-2026",
    href: "/project/lovi-ceylon-commonwealth-games-2026",
    date: "2026",
    category: "TikTok Campaign & Social Media Marketing",
    title: "LOVI Ceylon – Official Ceremonial Attire for Team Sri Lanka at the Commonwealth Games 2026",
    tags: "TikTok Campaign, Social Media Marketing, Cultural Storytelling",
    platforms: "TikTok",
    image: IMG[2],
    client: "LOVI Ceylon",
    summary:
      "A dedicated TikTok campaign celebrating the launch of the official ceremonial attire for Team Sri Lanka, telling the story of heritage, symbolism, craftsmanship and contemporary design.",
    overview: [
      "Ceylexa Digital was proud to support LOVI Ceylon with a dedicated TikTok campaign celebrating the launch of the Official Ceremonial Attire for Team Sri Lanka at the Commonwealth Games 2026.",
      "The campaign introduced the story behind the ceremonial attire and showcased how Sri Lankan heritage, symbolism, craftsmanship, and contemporary design came together to represent the nation on an international stage.",
      "The design draws inspiration from Sri Lanka's natural beauty and cultural identity. A rising sun represents hope, friendship, and the strength of a nation, while native flowers and trees surround the Salalihiniya bird, symbolising the homeland where every journey begins. The design continues onto the sarong, where the birds take flight towards the stars — representing the aspirations and journeys of Sri Lankan athletes carrying their nation's spirit to the world.",
    ],
    challengeIntro:
      "The campaign needed to introduce the ceremonial attire to a wide digital audience while communicating the cultural story and meaning behind the design in a format that would capture attention on TikTok.",
    challenges: [
      "Creating awareness around the official Team Sri Lanka ceremonial attire",
      "Introducing LOVI Ceylon's design story to a wider audience",
      "Communicating Sri Lankan heritage through short-form video",
      "Creating engaging TikTok content around the Commonwealth Games 2026",
      "Reaching audiences beyond LOVI Ceylon's existing community",
      "Generating strong video views, engagement, and content sharing",
      "Growing the brand's TikTok community",
      "Connecting traditional Sri Lankan identity with contemporary fashion",
    ],
    solutionIntro:
      "Team Ceylexa developed a TikTok-focused social media campaign designed to maximise reach, engagement, video consumption, and awareness around the ceremonial attire.",
    approach: [
      { title: "TikTok Campaign Strategy", description: "We developed and executed a TikTok campaign centred around the launch of the official ceremonial attire, creating content designed to capture attention and encourage audiences to discover the story behind the design." },
      { title: "Cultural Storytelling", description: "The campaign highlighted the symbolism behind the attire, bringing elements of Sri Lankan nature, heritage, identity, and national pride into engaging digital content." },
      { title: "Creative Content", description: "Our team created short-form content designed specifically for TikTok, presenting the ceremonial attire in an engaging and visually compelling format." },
      { title: "Brand Awareness", description: "The campaign helped introduce LOVI Ceylon's role in creating the official ceremonial attire to a wider audience while strengthening visibility around the brand." },
      { title: "Audience Engagement", description: "Content was designed to encourage viewers to like, share, follow, and engage with the campaign, helping build an active digital community around the launch." },
      { title: "Community Growth", description: "The campaign also focused on converting campaign visibility into long-term audience growth, resulting in significant new followers for LOVI Ceylon's TikTok presence." },
    ],
    resultsIntro: "The TikTok campaign created strong digital momentum around one of the brand's significant national collaborations.",
    results: [
      { value: "327.8K+", label: "Views", description: "The TikTok campaign generated more than 327,800 views, creating strong visibility for the ceremonial attire launch." },
      { value: "800K+", label: "Impressions", description: "The campaign generated more than 800,000 impressions, extending the visibility of LOVI Ceylon and the Team Sri Lanka ceremonial attire." },
      { value: "1M+", label: "Reach", description: "The campaign reached more than 1 million people, introducing the design and its story to a broad digital audience." },
      { value: "100K+", label: "Likes", description: "The content generated more than 100,000 likes, reflecting strong audience interaction with the campaign." },
      { value: "1.2K+", label: "Shares", description: "More than 1,200 shares helped audiences distribute the campaign content across their own networks." },
      { value: "5K+", label: "New Followers", description: "The campaign contributed more than 5,000 new followers, supporting continued audience growth for LOVI Ceylon on TikTok." },
    ],
    impact: [
      "The LOVI Ceylon Commonwealth Games 2026 TikTok Campaign demonstrated how fashion, cultural storytelling, and short-form digital content can come together to create meaningful online engagement. By showcasing the story and symbolism behind the official ceremonial attire, the campaign helped communicate Sri Lankan identity through a contemporary digital format while creating significant visibility for LOVI Ceylon.",
      "The campaign achieved 327.8K+ views, 800K+ impressions, 1M+ reach, 100K+ likes, 1.2K+ shares, and 5K+ new followers, creating strong digital momentum around one of the brand's significant national collaborations.",
    ],
    tagline: "Sri Lankan Heritage. Contemporary Design. One Nation's Story. Shared With the World.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getOtherProjects(slug: string): Project[] {
  return PROJECTS.filter((project) => project.slug !== slug);
}
