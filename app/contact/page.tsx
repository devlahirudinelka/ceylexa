import Navbar from "@/components/home/Navbar";
import Contact from "@/components/Contact";
import LogoMarquee from "@/components/LogoMarquee";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Ceylexa",
  description:
    "Get in touch with Ceylexa. Tell us what's eating your team's time and we'll show you what we'd automate first.",
};

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="main">
        <Contact />
        {/* <LogoMarquee /> */}
      </div>

      <Footer />
    </div>
  );
}
