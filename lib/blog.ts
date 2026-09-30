// Articles from "Ceylexa Web Document - Blog".
// The source document has no publish dates, so none are shown.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "flow"; text: string }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  href: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readingTime: string;
  blocks: Block[];
};

const p = (text: string): Block => ({ type: "p", text });
const h2 = (text: string): Block => ({ type: "h2", text });
const h3 = (text: string): Block => ({ type: "h3", text });
const ul = (...items: string[]): Block => ({ type: "ul", items });
const flow = (text: string): Block => ({ type: "flow", text });
const quote = (text: string): Block => ({ type: "quote", text });

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "new-digital-marketing-playbook-ai-driven-world",
    href: "/blog/new-digital-marketing-playbook-ai-driven-world",
    category: "Digital Marketing",
    title: "The New Digital Marketing Playbook: How Brands Can Grow in an AI-Driven World",
    excerpt:
      "Successful digital marketing is increasingly about creating a connected brand experience rather than relying on a single channel.",
    image: "/images/blog-1.webp",
    readingTime: "6 min read",
    blocks: [
      p("Digital marketing is no longer simply about posting on social media, ranking on Google, or running advertisements. The digital landscape has evolved into a connected ecosystem where customers discover brands through search engines, social media, influencers, websites, online reviews, video platforms, and increasingly, AI-powered tools."),
      p("For businesses, this creates both an opportunity and a challenge. Customers have more ways than ever to discover and compare brands, but businesses also have more opportunities to reach them at different stages of their buying journey."),
      p("In 2026, successful digital marketing is increasingly about creating a connected brand experience rather than relying on a single marketing channel. Current industry research shows marketers are adapting their SEO and content strategies for AI-powered search, while social media continues to play a central role in brand discovery and engagement."),
      h2("Digital Marketing Is No Longer One Channel"),
      p("One of the biggest mistakes businesses can make is treating digital marketing as a single activity."),
      p("Having an Instagram account does not automatically mean you have a digital marketing strategy. Running Google Ads does not automatically mean you have a successful advertising strategy. And having a website does not guarantee that customers will find or trust your business."),
      p("A strong digital marketing strategy connects multiple elements:"),
      ul("Website design and development", "Search engine optimisation", "Social media marketing", "Content creation", "Paid advertising", "Influencer marketing", "Email marketing", "Analytics and reporting", "Brand strategy", "Customer experience"),
      p("Each channel should have a purpose while supporting the wider business objective."),
      p("For example, social media can introduce your brand to new audiences, content can build trust, paid advertising can generate targeted traffic, and your website can turn that traffic into enquiries, bookings, or sales."),
      h2("The Rise of AI-Powered Search"),
      p("Search behavior is changing rapidly. People are increasingly using AI-powered tools alongside traditional search engines to research businesses, products, services, destinations, and solutions. This means businesses need to think beyond traditional keyword rankings and focus on becoming a useful, credible, and recognizable source of information."),
      p("This does not mean traditional SEO is disappearing. Instead, SEO is becoming part of a broader search visibility strategy. Businesses should focus on creating genuinely useful content, answering customer questions clearly, maintaining technically sound websites, building authority, and ensuring their brand information is consistent across the digital ecosystem. The goal is simple: when customers are looking for a solution that your business provides, your brand should have a strong opportunity to be discovered."),
      h2("Content Is Still at the Centre"),
      p("Technology changes quickly, but one thing remains consistent: brands need good content."),
      p("Content gives businesses an opportunity to explain what they do, demonstrate expertise, answer questions, communicate their personality, and build relationships with potential customers."),
      p("Effective content can take many forms:"),
      ul("Educational blog articles", "Social media posts", "Short-form videos", "Reels and TikToks", "Product photography", "Case studies", "Customer stories", "Guides and resources", "Website content", "Email campaigns", "Influencer content"),
      p("The most successful brands do not simply create more content. They create content with a purpose."),
      p("Every piece should have a reason for existing — whether that is building awareness, generating engagement, answering a customer question, driving website traffic, generating leads, or supporting a conversion."),
      h2("Social Media Has Become a Discovery Platform"),
      p("Social media is increasingly functioning as more than a place where people connect with friends and follow brands. Platforms are becoming important discovery, search, shopping, entertainment, and customer-service environments. HubSpot's 2026 research identifies social media as one of the leading marketing channels, with short-form video, social search, social commerce, and influencer marketing playing important roles. For brands, this means social content needs to be created for discovery as well as engagement."),
      p("A strong social media strategy should consider:"),
      ul("What will stop someone from scrolling?", "What will make them watch?", "What will make them engage?", "What will make them visit the website?", "What will make them remember the brand?"),
      p("These questions help transform social media from a posting schedule into a genuine marketing channel."),
      h2("Paid Advertising Needs Strategy"),
      p("Paid media can deliver significant reach, but simply putting money behind an advertisement is not a strategy. Successful paid campaigns depend on the relationship between audience, creative, offer, targeting, landing page, tracking, and optimisation. A campaign can have excellent targeting but poor creative. It can have an attractive advertisement but a weak landing page. It can generate plenty of clicks without producing meaningful conversions."),
      p("That is why paid media should be treated as a complete customer journey."),
      p("The process should begin with understanding the objective and audience, followed by creative development, campaign setup, tracking, testing, optimisation, and analysis."),
      h2("Your Website Is the Foundation"),
      p("Even with strong social media and advertising, your website remains one of the most important digital assets your business owns. Your website is where customers can learn about your business in greater depth, explore your products or services, establish trust, and take action."),
      p("A modern business website should be:"),
      ul("Easy to navigate", "Mobile responsive", "Fast and reliable", "Visually aligned with the brand", "Search-friendly", "Easy to understand", "Designed around the customer journey", "Built around clear calls to action"),
      p("Your digital marketing efforts should ultimately lead customers to a digital experience that reflects the quality of your business."),
      h2("Measure What Matters"),
      p("Digital marketing provides access to an enormous amount of data, but more data does not automatically mean better decisions. Businesses need to focus on meaningful metrics."),
      p("Depending on the campaign, these may include:"),
      ul("Website traffic", "Engagement", "Reach", "Leads", "Conversion rate", "Cost per lead", "Customer acquisition cost", "Return on advertising spend", "Sales", "Bookings", "Email sign-ups"),
      p("The important question is not simply, “How many people saw our content?” It is:"),
      quote("“Did our marketing help us achieve our business objective?”"),
      p("This shift from vanity metrics to meaningful business outcomes allows brands to make smarter marketing decisions."),
      h2("Building a Connected Digital Strategy"),
      p("The future of digital marketing belongs to brands that connect their channels rather than treating each one separately."),
      ul("Your branding should influence your content.", "Your content should support your SEO strategy.", "Your social media should drive discovery and engagement.", "Your paid media should reach relevant audiences.", "Your website should convert interest into action.", "Your analytics should show what is working.", "And your strategy should continuously evolve based on what the data tells you."),
      h2("Final Thoughts"),
      p("Digital marketing will continue to change. New platforms will appear, customer behaviours will evolve, and technologies such as artificial intelligence will continue to influence how people discover and interact with businesses. But the fundamentals remain powerful: understand your audience, communicate clearly, create valuable experiences, build trust, and measure your results."),
      p("At Ceylexa Digital, we bring these elements together through strategy, branding, content creation, web design and development, social media, paid media, SEO, and influencer marketing. Helping businesses build a stronger digital presence and create meaningful opportunities for growth."),
    ],
  },
  {
    slug: "from-scrolling-to-selling-short-form-video",
    href: "/blog/from-scrolling-to-selling-short-form-video",
    category: "Content Creation",
    title: "From Scrolling to Selling: How Short-Form Video Can Transform Your Brand",
    excerpt:
      "Your brand may have only a few seconds to capture attention. Here is how to make short-form video stop the scroll and drive real results.",
    image: "/images/blog-2.webp",
    readingTime: "5 min read",
    blocks: [
      p("People scroll quickly."),
      p("Your brand may have only a few seconds to capture someone's attention before they move on to the next piece of content. This has made short-form video one of the most important formats in modern digital marketing. From Instagram Reels and TikTok videos to YouTube Shorts and short-form advertising, video has become a powerful way for businesses to introduce their products, explain their services, demonstrate expertise, and create memorable brand experiences."),
      p("But creating a short video is not the same as creating effective short-form content. The real opportunity lies in understanding what makes people stop, watch, engage, remember, and eventually take action."),
      h2("Why Short-Form Video Matters"),
      p("Digital audiences are consuming content at an incredible pace. Short-form video fits naturally into this behaviour because it is easy to consume, visually engaging, and capable of communicating a message quickly. Current industry research continues to identify short-form video as one of the leading formats for marketers, while social platforms are increasingly functioning as discovery engines rather than simply social networks. For businesses, this creates an opportunity to communicate their value without requiring customers to read a long page or understand a complicated advertisement."),
      p("A well-made 20-second video can demonstrate a product, showcase a service, introduce a team member, answer a question, or tell a brand story."),
      h2("The First Few Seconds Matter"),
      p("The opening of a video is critical. If the viewer does not immediately understand why they should continue watching, they may scroll away."),
      p("This is why strong short-form videos often begin with:"),
      ul("A question", "A surprising statement", "A problem", "A visual transformation", "A bold statement", "A useful tip", "A customer pain point", "An intriguing visual"),
      p("Instead of starting with a long introduction about your company, start with something your audience cares about. For example, instead of:"),
      quote("“Welcome to our business. We have been providing services for many years…”"),
      p("Consider:"),
      quote("“Still struggling to turn your social media followers into customers?”"),
      p("The second approach immediately identifies a problem and gives the viewer a reason to continue."),
      h2("Create Content for People, Not Algorithms"),
      p("Algorithms are important, but your audience should always come first. People share content because it is useful, entertaining, emotional, inspiring, relatable, or interesting."),
      p("Businesses should therefore ask:"),
      ul("Would someone genuinely want to watch this?", "Would they send it to a friend?", "Would they save it for later?", "Does it answer a question?", "Does it make them feel something?"),
      p("These questions are often more useful than simply trying to follow every platform trend."),
      h2("Different Types of Video Content"),
      p("There is no single formula for short-form video. Different businesses can use different formats depending on their objectives."),
      h3("Educational Content"),
      p("Teach your audience something useful. For example:"),
      ul("Marketing tips", "Beauty advice", "Travel recommendations", "Fitness tips", "Product education", "Industry insights"),
      p("Educational content can help position your business as knowledgeable and trustworthy."),
      h3("Behind-the-Scenes Content"),
      p("Show people what happens behind the brand. This could include:"),
      ul("Team members", "Production", "Packaging", "Events", "Office life", "Creative processes", "Client projects"),
      p("Behind-the-scenes content can make a brand feel more human."),
      h3("Product Demonstrations"),
      p("Show your product in action instead of simply describing it. Demonstrations can help customers understand how something works and why it may be useful."),
      h3("Customer Stories"),
      p("Customer experiences can provide social proof and help potential customers understand the real-world value of your product or service."),
      h3("Before-and-After Content"),
      p("Transformation-based content can be particularly powerful for industries such as beauty, fitness, interiors, fashion, automotive, and creative services."),
      h2("Trends Can Help — But Your Brand Should Come First"),
      p("Trends can provide opportunities for visibility, but brands should avoid creating content simply because something is trending. A trend should make sense for your audience and brand. The strongest approach is often to take a popular format and adapt it to your own message. This allows your brand to participate in cultural conversations while maintaining its own identity."),
      h2("Short-Form Video and Paid Advertising"),
      p("Short-form video is not limited to organic social media. It can also become a powerful advertising asset. A successful paid video may introduce a problem, demonstrate a solution, show a product, provide social proof, and finish with a clear call to action. Multiple creative variations can then be tested to understand which messages and formats resonate with different audiences."),
      p("Paid media performance can provide valuable feedback that also informs organic content strategy."),
      h2("Turning Views Into Business Results"),
      p("Views are valuable, but views alone are not the final objective for most businesses. The bigger question is what happens after someone watches."),
      p("A strong customer journey might look like:"),
      flow("Video → Profile → Website → Product/Service → Enquiry → Conversion"),
      p("This is why short-form video should be connected to the wider digital marketing strategy. Your profile should clearly communicate who you are. Your website should provide more information. Your landing pages should make the next step easy. Your calls to action should be clear. And your analytics should help you understand what happens after the view."),
      h2("Consistency Builds Recognition"),
      p("One viral video can create a spike in attention, but long-term brand growth requires consistency. Consistent content helps audiences recognise:"),
      ul("Your visual identity", "Your tone of voice", "Your values", "Your products", "Your expertise", "Your personality"),
      p("Instead of trying to create one perfect video, businesses should develop a sustainable content system."),
      ul("Create several content pillars.", "Plan your ideas.", "Batch-produce where possible.", "Repurpose successful concepts.", "Test different hooks.", "Review performance.", "Then create more of what works."),
      h2("Final Thoughts"),
      p("Short-form video gives businesses a powerful opportunity to communicate with audiences in a fast-moving digital environment. But success is not simply about following trends or chasing views."),
      p("The strongest video strategies combine creativity with strategy. They understand the audience, communicate a clear message, maintain brand consistency, and connect content to measurable business objectives."),
      p("At Ceylexa Digital, we help brands develop creative content strategies, social media content, short-form videos, paid advertising creatives, and digital campaigns designed to capture attention and turn that attention into meaningful brand growth."),
    ],
  },
  {
    slug: "your-website-is-more-than-a-website",
    href: "/blog/your-website-is-more-than-a-website",
    category: "Web Design",
    title: "Your Website Is More Than a Website: Building a Digital Experience That Converts",
    excerpt:
      "Effective website design and development is not simply about making a site look good. It is about creating a digital experience that works for your customers and your business.",
    image: "/images/blog-3.webp",
    readingTime: "8 min read",
    blocks: [
      p("In today's digital world, your website is more than just an online presence. It is often the first place potential customers go to learn about your business, explore your services, understand your brand, and decide whether they want to work with you. Before making a purchase, booking a service, sending an enquiry, or contacting your team, customers are likely to interact with your digital presence in some way. Your website plays a central role in that journey."),
      p("A well-designed website can build trust, communicate your value, showcase your expertise, support your marketing campaigns, and guide visitors towards taking action. A poorly planned website, on the other hand, can create confusion and make it difficult for customers to understand what your business offers. That is why effective website design and development is not simply about making a website look good. It is about creating a digital experience that works for your customers and your business."),
      h2("Your Website Is Your Digital First Impression"),
      p("Your website can shape how people perceive your business. When someone discovers your brand through Google, social media, an advertisement, an influencer, or a referral, your website may be the next place they visit."),
      p("Within a short amount of time, visitors are looking for answers:"),
      ul("What does this business do?", "Can they solve my problem?", "Do they look professional?", "Can I trust them?", "What makes them different?", "How can I get started?"),
      p("A strong website should make these answers easy to find. Your homepage should communicate your value clearly, your services should be easy to understand, and your contact or conversion process should be straightforward. The objective is not to overwhelm visitors with information. It is to give them the right information at the right stage of their journey."),
      h2("Great Website Design Goes Beyond Appearance"),
      p("Visual design is an important part of a website, but it is only one part of the overall experience. A website can have beautiful imagery, modern typography, and an attractive layout, but if visitors cannot find what they need, the design is not doing its job."),
      p("Effective website design considers both appearance and usability. This includes:"),
      ul("Clear navigation", "Logical page structures", "Strong visual hierarchy", "Readable typography", "Consistent branding", "Effective use of imagery", "Clear calls to action", "Accessible content", "Mobile-friendly layouts", "Fast and smooth interactions"),
      p("Every element should have a purpose. The design should help visitors understand the brand and move naturally from discovering information to taking action."),
      h2("User Experience Can Make or Break a Website"),
      p("User experience, often referred to as UX, focuses on how people interact with your website. Imagine a customer visiting your website because they are interested in your services. If they have to search through several pages to find pricing, contact information, or details about your services, they may become frustrated."),
      p("A good UX removes unnecessary friction. Visitors should be able to understand where they are, where they can go next, and what action they can take."),
      p("Good UX can involve simple decisions such as:"),
      ul("Placing important information where visitors expect it", "Keeping navigation consistent", "Making forms easy to complete", "Reducing unnecessary steps", "Creating clear buttons", "Organising information into logical sections", "Making important actions easy to find"),
      p("When a website feels simple and intuitive, customers can focus on your business rather than figuring out how the website works."),
      h2("Mobile-First Thinking Is Essential"),
      p("The way people browse the internet has changed significantly. Customers can discover and interact with brands from smartphones, tablets, laptops, and desktop computers. This means your website needs to provide a consistent experience across different devices. A responsive website automatically adapts its layout and content to different screen sizes."),
      p("On mobile devices, this means:"),
      ul("Text should remain easy to read", "Buttons should be easy to tap", "Navigation should be simple", "Images should display correctly", "Forms should be easy to complete", "Pages should load efficiently", "Important information should remain accessible"),
      p("A website that looks great on a desktop but becomes difficult to use on a smartphone can create a poor customer experience. Responsive development helps ensure that your brand is presented professionally wherever your audience discovers you."),
      h2("Your Website Should Support Your Brand"),
      p("Your website should feel like a natural extension of your brand. Your logo, colours, typography, imagery, tone of voice, messaging, and overall visual style should work together to create a consistent identity."),
      p("Brand consistency can help customers recognise your business across different touchpoints. For example, a customer may first see your Instagram page, then encounter one of your advertisements, and later visit your website. If the branding feels completely different at each stage, the experience can feel disconnected. A consistent digital identity creates a stronger connection between your website, social media, advertising, content, and wider marketing activities."),
      h2("Content Is a Key Part of Website Development"),
      p("A website is not only about design and technology. The words on your website matter just as much. Your content should explain your products or services in a way that your target audience understands."),
      p("Instead of simply listing what you offer, your website content should communicate:"),
      ul("What do you provide?", "Who is it for?", "What problem does it solve?", "Why does it matter?", "Why should customers choose you?"),
      p("Clear and useful content can help visitors make decisions with greater confidence. This could include service descriptions, case studies, testimonials, FAQs, blog articles, product information, guides, and other resources."),
      h2("SEO Starts With a Strong Website Foundation"),
      p("Search engine optimisation should be considered from the beginning of website planning and development. SEO helps search engines understand your website and can improve the opportunity for relevant audiences to discover your business through search."),
      p("Important foundations include:"),
      ul("Well-structured pages", "Relevant and useful content", "Clear headings", "Descriptive page titles", "Strong internal linking", "Mobile responsiveness", "Good technical performance", "Search-friendly URLs", "Image optimisation", "Clear website architecture"),
      p("As search behaviour continues to evolve, businesses also need to think about how their content can provide genuinely useful answers to customers. A website should be created for people first, while also giving search engines clear signals about the content and purpose of each page."),
      h2("Your Website Should Work With Your Digital Marketing"),
      p("Your website should not operate separately from your marketing strategy. Think about a typical customer journey. A potential customer may discover your brand through an Instagram post. They may then see a paid advertisement, watch a video, search for your business on Google, and eventually visit your website. Each interaction contributes to their decision-making process."),
      p("This means your website needs to support the marketing channels sending visitors to it. For example:"),
      flow("Social Media → Website → Service Page → Enquiry"),
      p("or:"),
      flow("Google Search → Blog Article → Product Page → Purchase"),
      p("or:"),
      flow("Paid Advertisement → Landing Page → Lead Form → Follow-Up"),
      p("A well-planned digital ecosystem allows each channel to support the next stage of the customer journey."),
      h2("Landing Pages Can Improve Campaign Performance"),
      p("When running paid advertising campaigns, sending every visitor to your homepage may not always be the most effective approach. A dedicated landing page can be designed around a specific campaign, product, service, or offer."),
      p("A strong landing page can include:"),
      ul("A clear headline", "A focused value proposition", "Supporting visuals", "Benefits", "Social proof", "Relevant information", "A strong call to action", "A simple enquiry or purchase process"),
      p("By removing unnecessary distractions and focusing on one objective, landing pages can create a more relevant experience for campaign visitors."),
      h2("Calls to Action Guide Your Visitors"),
      p("A website should not leave visitors wondering what to do next. Clear calls to action help guide people through the customer journey."),
      p("Depending on your business, these could include:"),
      ul("Get in Touch", "Request a Quote", "Book a Consultation", "Shop Now", "Make a Booking", "Learn More", "Download Now", "Get Started", "Contact Our Team"),
      p("The right call to action depends on your audience and the purpose of each page. A service page might encourage visitors to request a quote, while a product page may encourage them to purchase. The important thing is to make the next step clear and easy."),
      h2("Trust Is One of the Most Important Conversion Factors"),
      p("People want to know that they are making the right decision. Your website can help build trust through:"),
      ul("Customer testimonials", "Reviews", "Case studies", "Client logos", "Industry experience", "Certifications", "Awards", "Portfolio examples", "Team information", "Clear contact details", "Transparent service information"),
      p("Trust elements should be integrated naturally throughout the website. For example, testimonials can appear alongside relevant services, while case studies can demonstrate how your business has helped previous customers."),
      h2("E-Commerce Requires an Even Stronger Experience"),
      p("For businesses selling online, the website becomes even more important because the entire customer journey may happen digitally."),
      p("An effective e-commerce experience should make it easy for customers to:"),
      ul("Discover products", "Understand product features", "View high-quality images", "Compare options", "Add products to their cart", "Complete checkout", "Understand delivery information", "Access customer support"),
      p("Small points of friction can affect the shopping experience. That is why e-commerce website development needs to consider both visual presentation and functionality."),
      h2("Analytics Turn Your Website Into a Learning Tool"),
      p("Launching your website is not the end of the process. It is the beginning of learning about your audience."),
      p("Website analytics can help businesses understand:"),
      ul("Where visitors are coming from", "Which pages receive the most traffic", "Which content attracts attention", "How visitors navigate the website", "Which pages lead to enquiries", "Which campaigns generate traffic", "Where visitors leave", "Which devices people use", "Which actions contribute to conversions"),
      p("These insights can help businesses make informed improvements over time. Instead of relying entirely on assumptions, businesses can use real user behaviour to identify opportunities."),
      h2("Website Performance Matters"),
      p("A website needs to provide a smooth experience. Slow-loading pages, broken links, confusing navigation, or technical issues can negatively affect the user experience. Website development should therefore consider technical performance alongside design."),
      p("This includes areas such as:"),
      ul("Page speed", "Image optimisation", "Responsive development", "Technical SEO", "Security", "Website accessibility", "Browser compatibility", "Hosting performance", "Regular maintenance"),
      p("A website should be monitored and maintained after launch to ensure it continues to perform effectively."),
      h2("Your Website Should Grow With Your Business"),
      p("Your business will change. You may introduce new services, launch products, enter new markets, create campaigns, add new team members, or introduce new technologies. Your website should have the flexibility to evolve with those changes."),
      p("A scalable website can make it easier to add:"),
      ul("New service pages", "Blog content", "Landing pages", "E-commerce functionality", "Booking systems", "Payment solutions", "Customer forms", "Marketing integrations", "Analytics tools", "Third-party platforms"),
      p("This makes your website a long-term digital asset rather than a one-time project."),
      h2("The Website and Marketing Connection"),
      p("The strongest digital strategies bring everything together."),
      ul("Your branding establishes who you are.", "Your content tells your story.", "Your social media creates awareness and engagement.", "Your paid media reaches targeted audiences.", "Your SEO helps people discover you through search.", "Your website brings these experiences together and gives customers a place to learn, trust, and take action."),
      p("When these elements work together, your digital presence becomes more than a collection of separate marketing activities. It becomes a connected customer experience."),
      h2("Final Thoughts"),
      p("A website should not simply be something your business has because every business is expected to have one. It should be a valuable part of your overall digital strategy."),
      p("The best websites combine creative design, intuitive user experience, strong development, compelling content, SEO, clear calls to action, and data-driven improvement. They communicate your brand clearly, make information easy to find, build trust, and guide visitors towards meaningful actions."),
      p("At Ceylexa Digital, we approach website design and development with both creativity and strategy. We create digital experiences designed around your brand, your audience, and your business goals — from the first idea and visual concept through to development, launch, optimisation, and ongoing growth."),
      p("Your website is more than a website. It is your brand's digital home, your marketing foundation, and an opportunity to turn online attention into real business growth."),
    ],
  },
];

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getOtherPosts(slug: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== slug);
}
