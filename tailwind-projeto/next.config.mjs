/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shoemix.fbitsstatic.net',
            },
        ],
    },
}

export default nextConfig
