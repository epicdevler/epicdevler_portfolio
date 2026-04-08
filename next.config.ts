import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV != "production",
  },
};

module.exports = nextConfig;
