import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for GitHub Pages.
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path to match the GitHub repository slug.
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/saisign-website",

  /**
   * Disable server-based image optimization — not supported in static exports.
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },

  // cacheComponents and partialPrefetching are incompatible with static export (output: "export")
  // They require a Node.js server and cannot be used with GitHub Pages.
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
