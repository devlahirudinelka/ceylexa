import Navbar from "@/components/home/Navbar";
import Clients from "@/components/Clients";
import ClientsMap from "@/components/ClientsMap";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients — Ceylexa",
  description:
    "Brands Ceylexa has partnered with — from Sri Lankan food, beauty, and events businesses to clients further afield.",
};

export default function ClientsPage() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="main">
        <Clients />
        <ClientsMap />
      </div>

      <Footer />
    </div>
  );
}
