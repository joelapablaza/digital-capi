/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digital-capi-production.up.railway.app",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
