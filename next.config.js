/** @type {import('next').NextConfig} */
const nextConfig = {    
    images:{
        domains: ['cdn.sanity.io']
    },
    experimental:{
        turbopackFileSystemCacheForDev: false
    }
}

module.exports = nextConfig
