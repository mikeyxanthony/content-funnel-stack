"use client";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Story from "@/components/Story";
import Offer from "@/components/Offer";
import Testimonials from "@/components/Testimonials";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Results from "@/components/Results";
import Process from "@/components/Process";
import AboutFounder from "@/components/AboutFounder";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import AffiliateProgram from "@/components/AffiliateProgram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // No bg-[#0A0A0A] here — body CSS provides the dark base, keeping main
    // transparent so the fixed AsciiBackground layer shows through.
    <main className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TrustBar />
      <Story />
      <Offer />
      <Testimonials />
      <WhoIsThisFor />
      <Results />
      <Process />
      <AboutFounder />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
      <AffiliateProgram />
      <Footer />
    </main>
  );
}
