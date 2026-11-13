import { qualifications, services, type Service } from "@/lib/content";

function capabilityChips(service: Service) {
  const labels = service.groups.length >= 3
    ? service.groups.map((group) => group.title)
    : service.groups.flatMap((group) => group.items);
  return labels.slice(0, 4);
}

export const serviceRows = services.map((service) => ({
  slug: service.slug,
  title: service.title,
  shortTitle: service.shortTitle,
  summary: service.summary,
  image: service.image,
  chips: capabilityChips(service),
  licence: service.qualification !== undefined ? qualifications[service.qualification] : undefined,
}));
