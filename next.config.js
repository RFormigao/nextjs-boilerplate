/* eslint-disable @typescript-eslint/no-var-requires */
const isProd = process.env.NODE_ENV === 'production'

// const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
  // runtimeCaching
})

const nextConfig = withPWA({
  // next config
})

module.exports = nextConfig
