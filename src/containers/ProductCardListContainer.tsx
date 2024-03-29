import Link from 'next/link';
import RectLoader from 'components/atoms/RectLoader';
import Box from 'components/layout/Box';
import ProductCard from 'components/organisms/ProductCard';
import ProductCardList from 'components/organisms/ProductCardList';
import useSearchSWR from 'services/products/use-searchSWR';
import type { ApiContext, Category, Condition } from 'types/data';

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
};

interface ProductCardListContainerProps {
  /**
   * 検索クエリ - カテゴリ
   */
  category?: Category;
  /**
   * 検索クエリ - 商品の状態
   */
  conditions?: Condition[];
}

/**
 * 商品カードリストコンテナ
 */
const ProductCardListContainer = ({
  category,
  conditions,
}: ProductCardListContainerProps) => {
  const { products, isLoading } = useSearchSWR(context, {
    category,
    conditions,
  });

  return (
    <ProductCardList>
      {/* ロード中はレクトローダーを表示 */}
      {isLoading &&
        Array.from(Array(16), (_, k) => (
          <Box key={k}>
            <Box $display={{ base: 'none', md: 'block' }}>
              <RectLoader
                uniqueKey={`rectLoader${k}`}
                width={240}
                height={240}
              />
            </Box>
            <Box $display={{ base: 'block', md: 'none' }}>
              <RectLoader
                uniqueKey={`rectLoader${k}`}
                width={160}
                height={160}
              />
            </Box>
          </Box>
        ))}
      {!isLoading &&
        products.map((p) => (
          <Box key={p.id}>
            <Link href={`/products/${p.id}`} passHref>
              {/* 商品カード */}
              <ProductCard
                variant="listing"
                title={p.title}
                price={p.price}
                imageUrl={p.imageUrl}
                blurDataUrl={p.blurDataUrl}
              />
            </Link>
          </Box>
        ))}
    </ProductCardList>
  );
};

export default ProductCardListContainer;
