/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/info",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
