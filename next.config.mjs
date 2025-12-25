/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      
        pathname: "/images/media/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
