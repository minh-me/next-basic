/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.morioh.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
