const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  webpack5: true,
  images: {
    domains: ['media.graphcms.com'],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
