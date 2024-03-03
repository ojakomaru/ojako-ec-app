'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BreadcrumbItem from 'components/atoms/BreadcrumbItem';
import Separator from 'components/atoms/Separator';
import Text from 'components/atoms/Text';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import Breadcrumb from 'components/molecules/Breadcrumb';
import ProductCard from 'components/organisms/ProductCard';
import UserProfile from 'components/organisms/UserProfile';
import Layout from 'components/templates/Layout';
// import AddToCartButtonContainer from 'containers/AddToCartButtonContainer';
import getAllProducts from 'services/products/get-all-products';
import getProduct from 'services/products/get-product';
import useProduct from 'services/products/use-product';
import type { ApiContext, Category } from 'types/data';

const categoryNameDict: Record<Category, string> = {
  book: '本',
  shoes: 'シューズ',
  clothes: 'トップス',
};

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
};

const ProductPage = ({ params }: { params: { id: string } }) => {
  // 商品を取得し、静的ページを作成
  // 10秒でstaleな状態にし、静的ページを更新する
  const productId = Number(params.id);
  // 商品
  // const product = getProduct(context, { id: productId });
  const router = useRouter();
  const { product, isLoading } = useProduct(context, { id: productId });

  // カートに追加したら、自動的にカートページに遷移する
  const handleAddToCartButtonClick = () => {
    router.push('/cart');
  };

  return (
    <Layout>
      <Flex
        $paddingTop={'medium'}
        $paddingBottom={'medium'}
        $paddingLeft={{ base: 'medium', md: 'none' }}
        $paddingRight={{ base: 'medium', md: 'none' }}
        $justifyContent="center"
        $flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">トップ</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/search">検索</Link>
            </BreadcrumbItem>
            {!isLoading && (
              <>
                <BreadcrumbItem>
                  <Link href={`/search/${product!.category}`}>
                    {categoryNameDict[product!.category as Category]}
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>{product!.title}</BreadcrumbItem>
              </>
            )}
          </Breadcrumb>
          <Flex
            $paddingTop={'medium'}
            $paddingBottom={'small'}
            $justifyContent="center"
          >
            {!isLoading && (
              <ProductCard
                variant="detail"
                title={product!.title}
                price={product!.price}
                imageUrl={product!.imageUrl}
              />
            )}
          </Flex>
          <Separator />
          <Box $paddingTop={'small'}>
            <Text as="h2" $variant="large" $marginTop={'none'}>
              出品者
            </Text>
            {!isLoading && (
              <Link href={`/users/${product!.owner.id}`}>
                {/* ユーザープロファイル */}
                <UserProfile
                  variant="small"
                  username={product!.owner.username}
                  profileImageUrl={product!.owner.profileImageUrl}
                  numberOfProducts={100}
                />
              </Link>
            )}
          </Box>
        </Box>
        <Box $padding={'medium'} $width={{ base: '100%', md: '700px' }}>
          <Flex
            $justifyContent="space-between"
            $flexDirection="column"
            $height={{ base: '', md: '100%' }}
          >
            {/* 商品概要を表示、改行ごとにテキストコンポーネントでラップ */}
            {!isLoading && (
              <>
                <Box>
                  {product!.description
                    .split('\n')
                    .map((text: string, i: number) => (
                      <Text key={i} as="p">
                        {text}
                      </Text>
                    ))}
                </Box>
                {/*
              カート追加ボタンコンテナ
              ボタンを押されたらShoppingCartContextに商品を追加する
            */}
                {/* <AddToCartButtonContainer
                  product={product}
                  onAddToCartButtonClick={handleAddToCartButtonClick}
                /> */}
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

// export async function generateStaticParams() {
//   const context: ApiContext = {
//     apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
//   };
//   // 商品からパスを生成
//   const products = await getAllProducts(context);
//   const paths = products.map((p) => `/products/${p.id}`);
//   return paths;
// }

// export const getStaticProps: GetStaticProps = async ({
//   params,
// }: GetStaticPropsContext) => {
//   const context: ApiContext = {
//     apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
//   };

//   if (!params) {
//     throw new Error('params is undefined');
//   }

//   // 商品を取得し、静的ページを作成
//   // 10秒でstaleな状態にし、静的ページを更新する
//   const productId = Number(params.id);
//   const product = await getProduct(context, { id: productId });

//   return {
//     props: {
//       id: productId,
//       product,
//     },
//     revalidate: 10,
//   };
// };

export default ProductPage;
