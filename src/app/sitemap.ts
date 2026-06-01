import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";
import { servicesData } from "@/data/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/industries",
    "/career",
    "/contact",
  ].map((path) => ({
    url: path ? `${base}${path}` : `${base}/`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
