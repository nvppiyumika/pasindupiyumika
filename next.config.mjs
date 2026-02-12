/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Replace 'your-repo-name' with your actual repository name
  basePath: '/pasindupiyumika',
  // Optional: Unoptimized images work better on GitHub Pages without a custom loader
  images: {
    unoptimized: true,
  },
};

// module.exports = nextConfig;
export default nextConfig;
