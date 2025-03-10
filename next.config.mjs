/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'img.artifacts.workers.dev',
      },
      // 允許Google圖片
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
      // 允許Bing圖片
      {
        protocol: 'https',
        hostname: 'www.bing.com',
      },
      // 允許任何URL作為圖片源
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;