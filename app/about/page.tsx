import Navbar from "@/components/home/Navbar";
import AboutHero from "@/components/AboutHero";
import MissionStats from "@/components/MissionStats";
import ProcessSteps from "@/components/ProcessSteps";
import Team from "@/components/Team";
import Awards from "@/components/Awards";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import AboutStory from "@/components/about/AboutStory";
import WhyChoose from "@/components/about/WhyChoose";
import CoreValues from "@/components/about/CoreValues";
import NewsEvents from "@/components/about/NewsEvents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ceylexa",
  description:
    "About Ceylexa Digital — our story, values, team, awards, careers, and latest news.",
};

export default function AboutPage() {
  return (
    <div className="overflow-clip">
      <Navbar />

      <div className="main">
        <AboutHero />
        <AboutStory />
        <WhyChoose />
        <CoreValues />
        <MissionStats />
        <ProcessSteps />
        <Team />
        <Awards />
        <NewsEvents />
        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
