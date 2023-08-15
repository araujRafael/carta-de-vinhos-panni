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
        NEXT_URL: process.env.NEXT_URL,
        AIRTABLE_SECRET_API_TOKEN: process.env.AIRTABLE_SECRET_API_TOKEN,
        AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    },
    experimental:{
        serverActions:true
    }
}

module.exports = nextConfig
