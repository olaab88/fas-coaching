import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.fas-coaching.no";
  const lastModified = new Date("2025-04-10");

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/om`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/timeplan`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/referanser`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontakt`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
