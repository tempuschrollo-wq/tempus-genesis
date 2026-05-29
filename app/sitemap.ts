import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Only real, resolvable routes are listed (no /privacy or /terms yet —
// they aren't real pages, so listing them would create 404s in the sitemap).
const ROUTES = ["", "/games", "/scholarship", "/media-kit"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
