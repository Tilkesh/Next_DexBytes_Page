/** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     reactStrictMode: true
// }

// module.exports = nextConfig


const nextConfig = {
    output: 'export',
    assetPrefix: process.env.ASSET_PREFIX,
    basePath: process.env.BASE_PATH,
  };
  
  module.exports = nextConfig;