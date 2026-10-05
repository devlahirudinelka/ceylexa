import Navbar from "@/components/home/Navbar";
import Contact from "@/components/Contact";
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
    <div className="overflow-clip">
      <Navbar />

      <div className="main">
        <Contact />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}
