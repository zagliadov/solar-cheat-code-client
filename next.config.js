/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://solar-cheat-code-db724f9c2daf.herokuapp.com/:path*',
        // destination: 'http://localhost:3000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
