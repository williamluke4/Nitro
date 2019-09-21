// next.config.js
const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const offline = require('next-offline');

dotenvLoad();

const nextConfig = {
  target: process.env.NODE_ENV !== 'production' ? 'server' : 'serverless',
  dontAutoRegisterSw: true,
  generateSw: false,
  devSwSrc: 'static/sw.js',
  workboxOpts: {
    swSrc: 'static/sw.js',
    swDest: 'static/service-worker.js',
  },
};

module.exports = withPlugins([nextEnv(), [offline]], nextConfig);
