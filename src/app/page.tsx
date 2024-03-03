import Link from 'next/link';
import Text from 'components/atoms/Text';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import ProductCard from 'components/organisms/ProductCard';
import ProductCardCarousel from 'components/organisms/ProductCardCarousel';
import Layout from 'components/templates/Layout';
import getAllProducts from 'services/products/get-all-products';
import { ApiContext, Product } from 'types/data';

const HomePage = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  };
  // 各商品のトップ6個を取得し、静的ページを作成
  // 60秒でrevalidateな状態にし、静的ページを更新する
  const [clothesProducts, bookProducts, shoesProducts] = await Promise.all([
    getAllProducts(context, {
      category: 'clothes',
      limit: 6,
      page: 1,
      cache: 60,
    }),
    getAllProducts(context, { category: 'book', limit: 6, page: 1, cache: 60 }),
    getAllProducts(context, {
      category: 'shoes',
      limit: 6,
      page: 1,
      cache: 60,
    }),
  ]);

  // 商品カードカルーセルをレンダリング
  const renderProductCardCarousel = (products: Product[]) => {
    return (
      <ProductCardCarousel>
        {products.map((p: Product, i: number) => (
          <Box $paddingLeft={i === 0 ? 'none' : 'medium'} key={p.id}>
            <Link href={`/products/${p.id}`} passHref>
              <ProductCard
                variant="small"
                title={p.title}
                price={p.price}
                imageUrl={p.imageUrl}
                blurDataUrl={p.blurDataUrl}
              />
            </Link>
          </Box>
        ))}
      </ProductCardCarousel>
    );
  };

  return (
    <Layout>
      <Flex
        $padding={'medium'}
        $justifyContent="center"
        $backgroundColor="primary"
      >
        <Flex
          $width={{ base: '100%', md: '1040px' }}
          $justifyContent="space-between"
          $alignItems="center"
          $flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box $width="100%">
            <Text
              as="h1"
              $marginBottom={'none'}
              $color="white"
              $variant="extraLarge"
            >
              Gihyo C2Cで
            </Text>
            <Text
              as="h1"
              $marginBottom={'none'}
              $color="white"
              $variant="extraLarge"
            >
              お気に入りのアイテムを見つけよう
            </Text>
          </Box>
          <Box $width="100%">
            <Text as="p" $color="white" $variant="mediumLarge">
              Gihyo
              C2Cは実践的なNext.jsアプリケーション開発で使われるデモアプリです。モックサーバを使用しています。
              ソースコードは
              <Text
                as="a"
                style={{ textDecoration: 'underline' }}
                target="_blank"
                href="https://github.com/gihyo-book/ts-nextbook-app"
                $variant="mediumLarge"
                $color="white"
              >
                こちら
              </Text>
              のGithubからダウンロードできます。
            </Text>
            <Text as="p" $color="white" $variant="mediumLarge">
              このアプリはTypeScript/Next.jsで作成されており、バックエンドのモックAPIはjson-serverが使用されています。
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex $paddingBottom={'medium'} $justifyContent="center">
        <Box
          $paddingLeft={{ base: 'medium', md: 'none' }}
          $paddingRight={{ base: 'medium', md: 'none' }}
          $width={{ base: '100%', md: '1040px' }}
        >
          <Box $marginBottom={'large'}>
            <Text as="h2" $variant="large">
              トップス
            </Text>
            {renderProductCardCarousel(clothesProducts)}
          </Box>
          <Box $marginBottom={'large'}>
            <Text as="h2" $variant="large">
              本
            </Text>
            {renderProductCardCarousel(bookProducts)}
          </Box>
          <Box>
            <Text as="h2" $variant="large">
              シューズ
            </Text>
            {renderProductCardCarousel(shoesProducts)}
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default HomePage;
