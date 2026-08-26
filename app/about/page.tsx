import Navbar from "@/components/home/Navbar";
import AboutHero from "@/components/AboutHero";
import MissionStats from "@/components/MissionStats";
import ProcessSteps from "@/components/ProcessSteps";
import Team from "@/components/Team";
import Awards from "@/components/Awards";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LineRail from "@/components/LineRail";

export const metadata: Metadata = {
  title: "About — Ceylexa",
  description:
    "Meet Ceylexa — our story, how we work, and the team building the AI agents that take busywork off operations teams.",
};

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="main">
        <div className="home-hero-area">
          <LineRail />
          <Navbar />
          <Hero />
        </div>
        <AboutHero />
        <MissionStats />
        <ProcessSteps />
        <Team />
        <Awards />
      </div>

      <Footer />
    </div>
  );
}
