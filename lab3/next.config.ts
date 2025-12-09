/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
    // hoặc cách cũ (vẫn dùng được):
    // domains: ['images.pexels.com'],
  },
};

module.exports = nextConfig;
