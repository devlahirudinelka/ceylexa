import Navbar from "@/components/home/Navbar";
import Clients from "@/components/Clients";
import ClientsMap from "@/components/ClientsMap";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients — Ceylexa",
  description:
    "250+ brands across Sri Lanka and 11+ international markets trust Ceylexa Digital.",
};

export default function ClientsPage() {
  return (
    <div className="overflow-clip">
      <Navbar />

      <div className="main">
        <Clients />
        <ClientsMap />
      </div>

      <Footer />
    </div>
  );
}
