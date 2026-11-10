import { projects, type SitePhoto } from "./content";

const equipmentPhoto =
  /surface-pump|submersible-pump|reservoir-chlorination|generator.jpg$/;

export function serviceEquipment(slug: string): SitePhoto[] {
  if (slug !== "electromechanical") return [];
  return (
    projects
      .find((p) => p.slug === "kelle-water-sanitation")
      ?.gallery?.filter((p) => equipmentPhoto.test(p.src)) ?? []
  );
}
