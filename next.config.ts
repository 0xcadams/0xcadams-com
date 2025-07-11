import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/images/:name*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, immutable, max-age=31536000",
          },
        ],
      },
    ];
  },

  rewrites: async () => {
    return [
      {
        source: "/api/data/:match*",
        destination: "https://cadams.io/_vercel/insights/:match*",
      },
    ];
  },
};

export default nextConfig;
