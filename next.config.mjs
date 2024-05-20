/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://solar-cheat-code-db724f9c2daf.herokuapp.com/:path*"
      }
    ]
  }
};

export default nextConfig;
