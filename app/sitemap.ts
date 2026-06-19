import type { MetadataRoute } from "next";
import { SITE, INSIGHTS, TEAM } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/codex-triage",
    "/knowledge",
    "/case-studies",
    "/team",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const insights = INSIGHTS.map((i) => ({
    url: `${SITE.url}/insights/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const team = TEAM.map((m) => ({
    url: `${SITE.url}/team/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...routes, ...insights, ...team];
}
