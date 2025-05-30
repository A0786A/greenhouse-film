/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      // Add your WordPress domain here
      new URL(process.env.NEXT_PUBLIC_WORDPRESS_URL || '').hostname,
      'greenhousefilm.com'
    ].filter(Boolean), // Remove any undefined values
  },
  env: {
    NEXT_PUBLIC_WORDPRESS_URL: process.env.NEXT_PUBLIC_WORDPRESS_URL,
    WOOCOMMERCE_CONSUMER_KEY: process.env.WOOCOMMERCE_CONSUMER_KEY,
    WOOCOMMERCE_CONSUMER_SECRET: process.env.WOOCOMMERCE_CONSUMER_SECRET,
  },
  // Enable static exports if needed
  // output: 'export',
  // Disable image optimization if using static exports
  // images: {
  //   unoptimized: true,
  // },
};

module.exports = nextConfig; 