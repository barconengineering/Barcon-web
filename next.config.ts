import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel expects the standard .next output folder.
  distDir: process.env.BARENG_STATIC_EXPORT === "true" ? ".next-export" : process.env.VERCEL ? ".next" : ".next-build",
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

