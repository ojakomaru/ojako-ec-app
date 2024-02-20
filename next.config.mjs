/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 本番環境ではReact Testing Libraryで使用するdata-testid属性を削除
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      reactRemoveProperties: {
        properties: ['^data-testid$'],
      },
    },
  }),
  compiler: {
    // styledComponentsの有効化
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        // ex. /api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        // ex. http://localhost:8000
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ];
  },
};

export default nextConfig;
