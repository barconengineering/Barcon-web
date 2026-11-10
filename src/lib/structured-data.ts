import { siteOrigin } from "./site";

export type Crumb = { name: string; href: string };

export function breadcrumbJsonLd(items: Crumb[]) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: siteOrigin ? new URL(item.href, siteOrigin).href : item.href,
    })),
  };
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function breadcrumbTrail(items: Crumb[]) {
  return {
    links: items.slice(0, -1),
    current: items[items.length - 1],
    parent: items[items.length - 2],
  };
}
