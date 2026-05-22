import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

const SITE = BUSINESS.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/free`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/checkout`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
