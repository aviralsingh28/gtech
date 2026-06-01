import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Enterprise Software, ERP & Cloud Solutions",
  description:
    "Custom software, ERP, cybersecurity, mobile apps, cloud, IoT, and UI/UX — engineered for financial accuracy, business intelligence, and scale. Dubai-based, serving 80+ global clients.",
  path: "/",
  keywords: [
    "enterprise software development",
    "ERP solutions Dubai",
    "fintech software",
    "business intelligence platforms",
    "GTech Soft Solution",
  ],
});
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import About from "@/components/About";
import CoreSolutions from "@/components/CoreSolutions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClarissaWidget from "@/components/ClarissaWidget";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsSection />
      <Clients />
      <Services />
      <Process />
      <Work />
      <About />
      <CoreSolutions />
      <Contact />
      <Footer />
      <ClarissaWidget />
    </main>
  );
}
