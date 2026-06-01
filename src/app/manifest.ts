import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_SHORT_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description:
      "Enterprise software, ERP, cloud, mobile, IoT, and UI/UX solutions from Dubai.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f5a623",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  };
}
