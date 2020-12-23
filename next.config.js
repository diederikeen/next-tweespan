// next.config.js
const withImages = require("next-images");
const withGraphQL = require("next-plugin-graphql");

module.exports = withImages(withGraphQL());
