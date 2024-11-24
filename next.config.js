/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'domain1.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'domain2.io',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'fast.wistia.com',
        pathname: '/embed/medias/**',
      },
    ],
  },
}

module.exports = nextConfig 