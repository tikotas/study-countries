/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // required for GitHub Pages
    },
    basePath: process.env.NODE_ENV === 'production'
        ? '/study-countries'
        : '',
    assetPrefix: process.env.NODE_ENV === 'production'
        ? '/study-countries'
        : '',
};

module.exports = nextConfig;
