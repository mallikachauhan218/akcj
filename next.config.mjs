/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['xcoder.a2hosted.com'],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'akcj.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**', 
      },
    ],
  },
  compiler: {
    // Highlight-start: Enable styled-components support
    styledComponents: true,
    // Highlight-end
  },
};

export default nextConfig;