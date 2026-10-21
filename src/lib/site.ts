import type { Metadata } from "next";
const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
// Domain is supplied at build time only after ownership and DNS are confirmed.
export const siteOrigin = configured ? new URL(configured).origin : undefined;
if (siteOrigin && !siteOrigin.startsWith("https://")) throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS");
export const allowIndexing = Boolean(siteOrigin) && process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
export function pageMetadata(path: string, metadata: Metadata): Metadata {
  return { ...metadata, alternates: siteOrigin ? { canonical: new URL(path, siteOrigin).href } : undefined };
}
