module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/my-api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
};
