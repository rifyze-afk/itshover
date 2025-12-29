import { type MetadataRoute } from "next";
import { LINKS } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${LINKS.SITE_URL}/sitemap.xml`,
  };
}
