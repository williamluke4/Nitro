// next.config.js
const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const typescript = require('@zeit/next-typescript');
const offline = require('next-offline');

dotenvLoad();


const nextConfig = {
  target: 'serverless',
  generateSw: false,
  generateInDevMode: true,
  workboxOpts: {
    swSrc: 'static/sw.js',
    swDest: 'static/service-worker.js',
  },
};

module.exports = withPlugins([
  nextEnv(),
  [typescript],
  [offline]
], nextConfig);

