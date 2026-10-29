/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Consolidate duplicate pages: /analyze and /privacy were byte-identical
      // copies of /game-analysis and /privacy-policy and split ranking signals.
      { source: "/analyze", destination: "/game-analysis", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
    ];
  },
};

export default nextConfig;
