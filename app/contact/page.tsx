import Navbar from "@/components/home/Navbar";
import Contact from "@/components/Contact";
import LogoMarquee from "@/components/LogoMarquee";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Contact — Ceylexa",
  description:
    "Get in touch with Ceylexa Digital — offices in Wellington, New Zealand and Pannipitiya, Sri Lanka.",
};

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="main">
        <Contact />
        {/* <LogoMarquee /> */}
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
