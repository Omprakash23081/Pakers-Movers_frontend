/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
