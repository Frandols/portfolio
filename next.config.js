/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      '/components/**/*',
      '/styles/**/*'
    ]
  }
}

module.exports = nextConfig
