// next.config.mjs

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

require('dotenv').config();

const nextConfig = {
  env: {
    API_URL_BASE: process.env.API_URL_BASE,
  },
};

export default nextConfig;
