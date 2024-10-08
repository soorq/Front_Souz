/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable stricter type checking in development
    swcMinify: true, // Enable swc minification in production builds
    optimizeFonts: true, // Enable optimization for fonts
    cleanDistDir: true,
};

export default nextConfig;
