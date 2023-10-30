/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/personal-portfolio",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
