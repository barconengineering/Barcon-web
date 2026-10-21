import { pageMetadata } from "@/lib/site";
import type { Metadata } from "next";
import { PageIntro, ProjectCTA } from "@/components/shared";
import { ProjectBrowser } from "@/components/project-browser";
export const metadata: Metadata = pageMetadata("/projects", { title: "Project experience" });
export default function ProjectsPage() {
  return <><PageIntro label="Project experience" title="Built around real needs.">Selected engineering and construction experience across water, sanitation, solar energy, irrigation, and roads.</PageIntro><section className="section container projects-section"><ProjectBrowser /></section><ProjectCTA /></>;
}
