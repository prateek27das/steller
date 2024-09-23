/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true, 
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Referrer-Policy', // Correct header key format (capitalization)
                        value: 'no-referrer'
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
