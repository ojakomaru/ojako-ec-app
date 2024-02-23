'use client';
import { Noto_Sans_JP } from 'next/font/google';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from 'lib/registry';
import { theme } from 'themes';

const noto_sans_jp = Noto_Sans_JP({ subsets: ['latin'] });

// グローバルのスタイル
const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  cursor: pointer;
  text-decoration: none;
  transition: .25s;
  color: ${theme.colors.black};
}

ol, ul {
  list-style: none;
}
`;
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
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
