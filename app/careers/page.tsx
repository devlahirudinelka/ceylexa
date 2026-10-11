import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import Careers from "@/components/about/Careers";
import CareersHero from "@/components/about/CareersHero";

export const metadata: Metadata = {
  title: "Careers — Ceylexa",
  description:
    "Join #TeamCeylexa. Explore open roles in digital marketing, design, content, web development and project management in Sri Lanka and New Zealand.",
};

export default function CareersPage() {
  return (
    <div className="overflow-clip">
      <Navbar />

      <main className="main">
        <CareersHero />
        <Careers />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
