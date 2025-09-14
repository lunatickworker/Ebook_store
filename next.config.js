const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: require.resolve('process/browser'),
    };
    return config;
  },
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
    localeDetection: true,
  },
};
