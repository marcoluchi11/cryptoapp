/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.coingecko.com", "lh3.googleusercontent.com"],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
