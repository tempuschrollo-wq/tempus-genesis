import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// All real, resolvable routes.
const ROUTES = [
  "",
  "/games",
  "/scholarship",
  "/media-kit",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
