/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        turbopackFileSystemCacheForDev: false
    },
    reactCompiler: true
}

module.exports = nextConfig
