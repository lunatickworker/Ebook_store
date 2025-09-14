const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: 'process/browser',
    };
    return config;
  },
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
    localeDetection: false,
  },
};

module.exports = nextConfig;
