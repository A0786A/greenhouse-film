/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you'll use
  },
  // Enable static exports if needed
  // output: 'export',
  // Disable image optimization if using static exports
  // images: {
  //   unoptimized: true,
  // },
};

module.exports = nextConfig; 