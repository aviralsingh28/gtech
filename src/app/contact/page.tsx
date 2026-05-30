import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us – GTech Soft Solution LLC",
  description:
    "Get in touch with GTech Soft Solution LLC. Reach our team in Dubai for project enquiries, demos, and partnerships.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
