/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      //'/about': { page: '/about' },
      //'/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
    };
  },
};

module.exports = nextConfig;
