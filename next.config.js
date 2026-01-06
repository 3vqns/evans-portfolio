/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/evans-portfolio",
  assetPrefix: "/evans-portfolio/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig


