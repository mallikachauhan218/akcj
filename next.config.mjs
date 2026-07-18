/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'akcj.vercel.app',
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