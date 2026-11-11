import type { Metadata } from "next";
const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteOrigin = configured ? new URL(configured).origin : undefined;
if (siteOrigin && !siteOrigin.startsWith("https://")) throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS");
export const allowIndexing = Boolean(siteOrigin) && process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
export const openGraphDefaults: NonNullable<Metadata["openGraph"]> = { type: "website", siteName: "Barcon Engineering", locale: "en_ET", title: "Barcon Engineering", description: "Engineering with purpose. Building for communities across Ethiopia.", images: [{ url: "/opengraph-image.jpg", width: 1280, height: 720, alt: "Solar array and pump house built by Barcon Engineering in a fenced compound on a green Ethiopian hillside" }] };
export function pageMetadata(path: string, metadata: Metadata): Metadata {
  const canonical = siteOrigin ? new URL(path, siteOrigin).href : undefined;
  return {
    ...metadata,
    alternates: canonical ? { canonical } : undefined,
    openGraph: { ...openGraphDefaults, ...(typeof metadata.title === "string" ? { title: metadata.title } : {}), ...(metadata.description ? { description: metadata.description } : {}), url: canonical },
  };
}
