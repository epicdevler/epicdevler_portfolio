import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    viewTransition: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV == "production",
  },
};

export default nextConfig;
