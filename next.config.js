const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: { mode: "auto" },
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withVanillaExtract(nextConfig);
