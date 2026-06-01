import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import WhyTravelHospitality from "@/components/industries/WhyTravelHospitality";
import Solutions from "@/components/industries/Solutions";
import CaseStudies from "@/components/industries/CaseStudies";
import IndustriesApply from "@/components/industries/IndustriesApply";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Travel & Hospitality Solutions",
  description:
    "Innovative software solutions for travel and hospitality businesses. From PMS to revenue management, booking engines to guest experience platforms.",
  path: "/industries",
  keywords: [
    "travel hospitality software",
    "hotel management system",
    "booking engine development",
    "PMS software",
  ],
});

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
