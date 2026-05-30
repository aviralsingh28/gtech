import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import WhyTravelHospitality from "@/components/industries/WhyTravelHospitality";
import Solutions from "@/components/industries/Solutions";
import CaseStudies from "@/components/industries/CaseStudies";
import IndustriesApply from "@/components/industries/IndustriesApply";

export const metadata: Metadata = {
  title: "Travel & Hospitality Solutions – GTech Soft Solution LLC",
  description:
    "Innovative software solutions for travel and hospitality businesses. From PMS to revenue management, booking engines to guest experience platforms. Transform your operations today.",
};

export default function IndustriesPage() {
  return (
    <main>
      <Navbar />
      <IndustriesHero />
      <WhyTravelHospitality />
      <Solutions />
      <CaseStudies />
      <IndustriesApply />
      <Footer />
    </main>
  );
}
