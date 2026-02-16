/** @type {import('next').NextConfig} */

// Determine if we're building for production (GitHub Pages) or development (local)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',

  // Only use basePath for production builds (GitHub Pages)
  // For local development, basePath will be undefined (no prefix)
  basePath: isProd ? '/pasindupiyumika' : '',

  // Asset prefix for GitHub Pages
  assetPrefix: isProd ? '/pasindupiyumika' : '',

  // Unoptimized images work better on GitHub Pages without a custom loader
  images: {
    unoptimized: true,
  },

  // Trailing slash for better GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
