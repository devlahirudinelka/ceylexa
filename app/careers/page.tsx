import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CTASection from "@/components/home/CTASection";
import Careers from "@/components/about/Careers";

export const metadata: Metadata = {
  title: "Careers — Ceylexa",
  description:
    "Join #TeamCeylexa. Explore open roles in digital marketing, design, content, web development and project management in Sri Lanka and New Zealand.",
};

export default function CareersPage() {
  return (
    <div className="overflow-clip">
      <Navbar />

      <div className="main">
        <section className="relative">
          <div className="pt-27 w-full max-tablet:pt-24 max-md:pt-18 max-mobile:pt-[3.6rem]" />
          <div className="mx-auto container px-6 max-tablet:px-[1.2rem] max-md:px-[1.0499rem] max-mobile:px-[0.899rem]">
            <h1 className="text-center">
              Join #TeamCeylexa
            </h1>
          </div>
          <div className="pt-30 w-full max-tablet:pt-20 max-md:pt-18 max-mobile:pt-16" />
        </section>

        <Careers />
        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
