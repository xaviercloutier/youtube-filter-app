import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  env: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  },
  eslint: {
    // This will completely disable ESLint during the build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
