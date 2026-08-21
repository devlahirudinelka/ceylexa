import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroSocial from "@/components/HeroSocial";
import LineRail from "@/components/LineRail";
import LogoMarquee from "@/components/LogoMarquee";
import MissionStats from "@/components/MissionStats";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ceylexa",
  description:
    "Meet Ceylexa — our story, our work, and the team building it.",
};

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <div className="home-hero-area">
        <LineRail />
        <Navbar />
        <Hero />
      </div>

      <HeroSocial />

      <div className="main">
        <MissionStats />
        <FeaturedWork />
        <Services />
        <LogoMarquee />
        <ProcessSteps />
        <Testimonials />
        <FAQ />
        <Blog />
      </div>

      <Footer />
    </div>
  );
}
// git commit -m 'Changes on the home up to the clients'