// next.config.mjs

const nextConfig = {
  env: {
    API_URL_BASE: process.env.API_URL_BASE,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.nhle.com' },
    ],
  },
};

export default nextConfig;
