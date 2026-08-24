import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import LogoStrip from "@/components/home/LogoStrip";
import Features from "@/components/home/Features";
import WorkflowShowcase from "@/components/home/WorkflowShowcase";
import Integrations from "@/components/home/Integrations";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import FeaturedWork from "@/components/FeaturedWork";
import HeroSocial from "@/components/HeroSocial";
import LineRail from "@/components/LineRail";
import LogoMarquee from "@/components/LogoMarquee";
import MissionStats from "@/components/MissionStats";
import ProcessSteps from "@/components/ProcessSteps";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Ceylexa — Automate busywork with AI agents",
  description:
    "Ceylexa is an AI agency for operations teams. We design, build, and operate the workflows and AI agents that take repetitive work off your team's plate.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="page-wrapper">
        {/* <HeroSocial /> */}

        <div className="main">
          <MissionStats />
          <FeaturedWork />
          <Services />
          <ProcessSteps />
          <LogoMarquee />
          <Testimonials />
          <FAQ />
          <Blog />
        </div>

        {/* <Footer /> */}
      </div>
      {/* <About />
      <LogoStrip />
      <Features />
      <WorkflowShowcase />
      <Integrations />
      <Testimonials />
      <CTASection /> */}
      <Footer />
    </>
  );
}
