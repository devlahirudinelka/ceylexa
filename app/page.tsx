import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroSocial from "@/components/HeroSocial";
import LineRail from "@/components/LineRail";
import LogoMarquee from "@/components/LogoMarquee";
import MissionStats from "@/components/MissionStats";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="home-hero-area">
        <LineRail />
        <Navbar />
        <Hero />
      </div>

      <HeroSocial />

      <div className="main">
        <LogoMarquee />
        <MissionStats />
        <FeaturedWork />
        <Services />
        <ProcessSteps />
        <Testimonials />
        <FAQ />
        <Blog />
      </div>

      <Footer />
    </div>
  );
}
