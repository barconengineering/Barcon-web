import type { BrandVariant } from "./brand";

export const headerLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Expertise", "/services"],
  ["Projects", "/projects"],
  ["Our Approach", "/approach"],
  ["Contact Us", "/contact"],
] as const;

const ctaHref = "/contact";

export function isCurrentPath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function isHeaderCta(href: string) {
  return href === ctaHref;
}

export function headerState(pathname: string, atTop: boolean, open: boolean) {
  const home = pathname === "/";
  const light = home && atTop && !open;
  const logo: BrandVariant = light ? "horizontal-color" : "horizontal-white";
  return {
    className: `site-header ${light ? "header-light" : "header-dark"}${home ? " header-home" : ""}`,
    logo,
  };
}
