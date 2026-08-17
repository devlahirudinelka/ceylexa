import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import Features from "@/components/home/Features";
import WorkflowShowcase from "@/components/home/WorkflowShowcase";
import Integrations from "@/components/home/Integrations";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

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
      <LogoStrip />
      <Features />
      <WorkflowShowcase />
      <Integrations />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
