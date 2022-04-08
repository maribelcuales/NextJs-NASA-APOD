/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ["apod.nasa.gov", "https://apod.nasa.gov/", "https://apod.nasa.gov/apod/image/2204/M24_APOD_GabrielRodriguesSantosAPOD1100.jpg" ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
}
