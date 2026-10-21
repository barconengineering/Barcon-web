import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";
import { services, projects } from "@/lib/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteOrigin) return [];
  return ["", "/about", "/services", "/projects", "/approach", "/contact", "/privacy", ...services.map(s=>"/services/"+s.slug), ...projects.map(p=>"/projects/"+p.slug)].map(path=>({url: siteOrigin + path}));
}
