/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // this is technically deprecated but works perfectly.
    // if you'd like to see the remotePatterns version, I'm happy to merge a PR
    domains: ["localhost", "digital-capi-production.up.railway.app"],
  },
};

module.exports = nextConfig;
