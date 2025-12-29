import { MetadataRoute } from "next";
import { ICON_NAMES } from "@/lib/icon-names";
import { LINKS } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = LINKS.SITE_URL;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/icons`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sponsor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic icon pages
  const iconPages: MetadataRoute.Sitemap = ICON_NAMES.map((name) => ({
    url: `${baseUrl}/icons/${name}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...iconPages];
}
