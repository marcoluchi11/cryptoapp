/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.coingecko.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
