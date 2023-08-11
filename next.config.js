/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'v5.airtableusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    env:{
        NEXT_URL: process.env.NEXT_URL
    },
    experimental:{
        serverActions:true
    }
}

module.exports = nextConfig
