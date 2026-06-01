import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerHero from "@/components/career/CareerHero";
import WhyJoinUs from "@/components/career/WhyJoinUs";
import JobOpenings from "@/components/career/JobOpenings";
import CareersApply from "@/components/career/CareersApply";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Careers",
  description:
    "Join our team at GTech Soft Solution LLC. We're hiring talented developers, designers, and tech professionals. Build your career with us.",
  path: "/career",
  keywords: [
    "GTech Soft careers",
    "software jobs Dubai",
    "developer jobs UAE",
  ],
});

export default function CareerPage() {
  return (
    <main>
      <Navbar />
      <CareerHero />
      <WhyJoinUs />
      <JobOpenings />
      <CareersApply />
      <Footer />
    </main>
  );
}
