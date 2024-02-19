/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 本番環境ではReact Testing Libraryで使用するdata-testid属性を削除
  ...(process.env.NODE_ENV === "production" && {
    compiler: {
      reactRemoveProperties: {
        properties: ["^data-testid$"],
      },
    },
  }),
  compiler: {
    // styledComponentsの有効化
    styledComponents: true,
  },
};

export default nextConfig;
