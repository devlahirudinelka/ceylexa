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
import Careers from "@/components/about/Careers";
import NewsEvents from "@/components/about/NewsEvents";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LineRail from "@/components/LineRail";

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
        <div className="flex relative flex-col justify-center items-center">
    
          <Navbar />
          <Hero />
        </div>
        <AboutHero />
        <AboutStory />
        <MissionStats />
        <div className="pt-27 w-full max-tablet:pt-24 max-md:pt-18 max-mobile:pt-[3.6rem]" />
        <WhyChoose />
        <ProcessSteps />
        <Team />
        <Awards />
        <CoreValues />
        <Careers />
        <NewsEvents />
        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
