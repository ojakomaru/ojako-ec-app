"use client";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import StyledComponentsRegistry from "lib/registry";
import GlobalStyles from "themes/GlobalStyles";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

// クライアントレンダリングによってエラーになるようなので保留
// export const metadata: Metadata = {
//   title: "Ojako-EcSite-app",
//   description: "おジャコによるC2Cアプリ",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
