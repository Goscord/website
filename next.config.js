/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "standalone",

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