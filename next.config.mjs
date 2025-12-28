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
  async redirects() {
    return [
      {
        source: "/foods-details/:id",
        destination: "/foods/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
