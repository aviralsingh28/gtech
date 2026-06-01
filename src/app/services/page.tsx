import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import { Roadmap } from "@/components/services/Roadmap";
import CoreSolutions from "@/components/services/CoreSolutions";
import Industries from "@/components/services/Industries";
import TechStack from "@/components/services/TechStack";
import ProjectTimeline from "@/components/services/ProjectTimeline";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Custom software, ERP solutions, mobile and web apps, cloud, IoT and UI/UX design — engineered for financial accuracy, business intelligence, and scalable operations.",
  path: "/services",
  keywords: [
    "software development services",
    "ERP implementation",
    "cloud migration",
    "UI UX design agency",
    "IoT solutions",
  ],
});

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <Roadmap />
      <CoreSolutions />
      <Industries />
      <TechStack />
      <ProjectTimeline />
      <Footer />
    </main>
  );
}
