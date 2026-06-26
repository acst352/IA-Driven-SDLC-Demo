import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gxupfakzmzaxsbsfdtdj.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
};

export default withSentryConfig(nextConfig, {
  org: "icy-but-not-too-much",
  project: "javascript-nextjs",
  silent: true,
});
