import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with GTech Soft Solution LLC. Reach our team in Dubai for project enquiries, demos, and partnerships.",
  path: "/contact",
  keywords: [
    "contact GTech Soft",
    "software company Dubai contact",
    "request a demo",
  ],
});

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
