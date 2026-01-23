import type { MetadataRoute } from "next";
import { getProductions } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/projects",
    "/products",
    "/productions"
  ];

  const productionRoutes = getProductions().map(
    (item) => `/productions/${item.slug}`
  );

  return [...staticRoutes, ...productionRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
}
