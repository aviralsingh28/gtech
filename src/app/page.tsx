import Navbar from "@/components/Navbar";
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
