// next.config.js
const withPlugins = require('next-compose-plugins');
const withImages = require("next-images");
const withGraphQL = require("next-plugin-graphql");

module.exports = withPlugins([
    withImages(),
    withGraphQL(),
  ],
  {
    target: 'serverless',
    trailingSlash: true
  }
);
