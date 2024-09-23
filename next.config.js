/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true, 
    },
    async headers() {
        return[
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'referrer-policy', value: 'no-referrer'
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
