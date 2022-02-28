const path = require('path');
const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  // next-optimized-images
  // jpeg: imagemin-mozjpeg
  // png: imagemin-zopfli
  // svg: imagemin-svgo
  handleImages: ['jpeg', 'png', 'svg'],
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = withOptimizedImages(nextConfig);
