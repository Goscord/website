/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/6Np8sbyHXt",
        permanent: true
      },
      {
        source: "/docs",
        destination: "https://pkg.go.dev/github.com/Goscord/goscord#section-documentation",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
