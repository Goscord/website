/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },

  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/6Np8sbyHXt",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;