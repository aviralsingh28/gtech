import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import VisionMission from "@/components/about/VisionMission";
import GlobalImpact from "@/components/about/GlobalImpact";
import Beliefs from "@/components/about/Beliefs";
import WhyPartner from "@/components/about/WhyPartner";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "GTech Soft Solution LLC is a global technology company with 8+ years of expertise, 100+ developers, and 80+ international clients delivering enterprise-grade software.",
  path: "/about",
  keywords: [
    "about GTech Soft",
    "software company Dubai",
    "enterprise technology partner",
  ],
});

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <VisionMission />
      <GlobalImpact />
      <Beliefs />
      <WhyPartner />
      <Footer />
    </main>
  );
}
