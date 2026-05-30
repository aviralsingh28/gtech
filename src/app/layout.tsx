import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "GTechSoft – Transform Your Digital Vision Into Impact",
  description:
    "GTechSoft is a premier digital agency offering UI/UX Design, Website Development, Branding, Build Product MVP, and Marketing services that transform your business.",
  keywords: "UI/UX Design, Website Development, Branding, MVP, Digital Agency",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "GTechSoft – Transform Your Digital Vision Into Impact",
    description:
      "Premier digital agency specializing in design, development, branding & marketing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
