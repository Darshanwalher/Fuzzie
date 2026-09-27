import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
      {
        protocol: 'https',
        hostname: '2p1vs18ahp.ucarecd.net',
      },
      {
        protocol: 'https',
        hostname: '*.ucarecd.net',
      },
    ],
  },
};

export default nextConfig;
