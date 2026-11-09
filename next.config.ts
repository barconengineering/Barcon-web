import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/roads-bridges",
        destination: "/services/road-construction-maintenance",
        permanent: true,
      },
      {
        source: "/services/import-export",
        destination: "/services/engineering-equipment-materials",
        permanent: true,
      },
    ];
  },
  // Vercel expects the standard .next output folder.
  distDir:
    process.env.BARENG_STATIC_EXPORT === "true"
      ? ".next-export"
      : process.env.VERCEL
        ? ".next"
        : ".next-build",
  output: process.env.BARENG_STATIC_EXPORT === "true" ? "export" : undefined,
  images: { unoptimized: process.env.BARENG_STATIC_EXPORT === "true" },
  // Static company pages do not need partial prerendering.
  cacheComponents: false,
  partialPrefetching: false,
  experimental: {
    cpus: 1,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
