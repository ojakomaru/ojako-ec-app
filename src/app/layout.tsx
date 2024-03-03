import { Noto_Sans_JP } from 'next/font/google';
import StyledProviders from 'lib/StyledProvider';
import { SWRProvider } from 'lib/swr-provider';
import { Metadata } from 'next';
import GlobalStyle from 'lib/GlobalStyle';
import GlobalSpinner from 'components/organisms/GlobalSpinner';
import { AuthContextProvider } from 'contexts/AuthContext';
import GlobalSpinnerContextProvider from 'contexts/GlobalSpinnerContext';
import { ShoppingCartContextProvider } from 'contexts/ShoppingCartContext';
import { ApiContext } from 'types/data';

const noto_sans_jp = Noto_Sans_JP({ subsets: ['latin'] });

// クライアントレンダリングによってエラーになるようなので保留
export const metadata: Metadata = {
  title: 'Ojako-EcSite-app',
  description: 'おジャコによるC2Cアプリ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const context: ApiContext = {
    apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
  };
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>
        <SWRProvider>
          <GlobalSpinnerContextProvider>
            <ShoppingCartContextProvider>
              <AuthContextProvider context={context}>
                <StyledProviders>
                <GlobalSpinner />
                  <GlobalStyle />
                  {children}
                </StyledProviders>
              </AuthContextProvider>
            </ShoppingCartContextProvider>
          </GlobalSpinnerContextProvider>
        </SWRProvider>
      </body>
    </html>
  );
}
