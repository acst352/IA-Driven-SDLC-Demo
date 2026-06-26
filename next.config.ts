import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gxupfakzmzaxsbsfdtdj.supabase.co",
      },
    ],
  },
  poweredByHeader: false,
};

export default nextConfig;
