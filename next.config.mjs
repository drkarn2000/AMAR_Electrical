/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd()
  },
  images: {
    localPatterns: [{ pathname: '/**' }],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'havells.com' },
      { protocol: 'https', hostname: 'www.legrand.co.in' },
      { protocol: 'https', hostname: 'cdn.legrand.co.in' },
      { protocol: 'https', hostname: 'finolex.com' },
      { protocol: 'https', hostname: 'www.finolex.com' },
      { protocol: 'https', hostname: 'rrkabel.com' },
      { protocol: 'https', hostname: 'www.rrkabel.com' },
      { protocol: 'https', hostname: 'images.philips.com' },
      { protocol: 'https', hostname: 'philips.com' },
      { protocol: 'https', hostname: 'www.philips.com' },
      { protocol: 'https', hostname: 'crompton.co.in' },
      { protocol: 'https', hostname: 'www.crompton.co.in' },
      { protocol: 'https', hostname: 'syska.com' },
      { protocol: 'https', hostname: 'www.syska.com' },
      { protocol: 'https', hostname: 'polycab.com' },
      { protocol: 'https', hostname: 'www.polycab.com' },
      { protocol: 'https', hostname: 'anchorbypanasonic.com' },
      { protocol: 'https', hostname: 'www.anchorbypanasonic.com' },
      { protocol: 'https', hostname: 'panasonic.com' },
      { protocol: 'https', hostname: 'www.panasonic.com' },
      { protocol: 'https', hostname: 'se.com' },
      { protocol: 'https', hostname: 'www.se.com' },
      { protocol: 'https', hostname: 'cdn.shopify.com' }
    ],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;
