import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net', // Domínio das imagens do MAL
      },
    ],
  },
};



export default nextConfig;
