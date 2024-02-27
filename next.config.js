/** @type {import('next').NextConfig} */
const nextConfig = {
  runtime: 'edge', //27.02.2024
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    deviceSizes: [670, 750, 828, 1080, 1224, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
    ],
},
}