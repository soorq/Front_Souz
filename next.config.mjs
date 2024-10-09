/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable stricter type checking in development
  swcMinify: true, // Enable swc minification in production builds
  optimizeFonts: true, // Enable optimization for fonts
  cleanDistDir: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kadencewp.com",
        pathname: "/**/*",
      },
    ],
  },
};

export default nextConfig;
