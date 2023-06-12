/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "~/styles/variables";`,
    },
    experimental: {
        appDir: true
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/homepage',
            },
        ];
    },
};

module.exports = nextConfig;