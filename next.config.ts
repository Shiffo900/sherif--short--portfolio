import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/legacy-assets/:path*",
        destination: "https://charm-component-cloud.vercel.app/assets/:path*",
      },
    ];
  },
};

export default nextConfig;
