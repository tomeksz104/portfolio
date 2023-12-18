/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./ImageLoader.js",
  },
  experimental: { optimizeCss: true },
};

module.exports = nextConfig;
