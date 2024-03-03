'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import BreadcrumbItem from 'components/atoms/BreadcrumbItem';
import Text from 'components/atoms/Text';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import Breadcrumb from 'components/molecules/Breadcrumb';
import FilterGroup from 'components/molecules/FilterGroup';
import Layout from 'components/templates/Layout';
import ProductCardListContainer from 'containers/ProductCardListContainer';
import type { Category, Condition } from 'types/data';
import Anchor from 'components/atoms/Anchor';

const categoryNameDict: Record<Category, string> = {
  book: '本',
  shoes: 'シューズ',
  clothes: 'トップス',
};

/**
 * 検索ページ
 * @param param0 URLの末尾のパラメータ
 */
const SearchPage = ({ params }: { params: { slug?: string[] } }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  // 商品のカテゴリーをクエリから取得
  const slug: Category[] = Object.prototype.hasOwnProperty.call(params, 'slug')
    ? (params.slug as Category[])
    : [];
  // 商品の状態をクエリから取得
  const conditions = (() => {
    const params = new URLSearchParams(searchParams.toString()).getAll(
      'condition',
    );
    return params.length > 0 ? (params as Condition[]) : [];
  })();

  // checkboxの配列からクエリパラメータを生成する
  const handleChange = (selected: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('condition'); // 現在のパラメータを削除する
    selected.forEach((condition) => params.append('condition', condition));
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Layout>
      <Box
        $paddingLeft={{
          base: 'medium',
          md: 'large',
        }}
        $paddingRight={{
          base: 'medium',
          md: 'large',
        }}
        $paddingTop={'medium'}
        $paddingBottom={'medium'}
      >
        <Box $marginBottom={'small'}>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">トップ</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/search">検索</Link>
            </BreadcrumbItem>
            {/* パンくずリストを選択したカテゴリから生成 */}
            {slug.slice(0, slug.length - 1).map((category, i) => (
              <BreadcrumbItem key={i}>
                <Link href={`/search/${slug.slice(0, i + 1).join('/')}`}>
                  {categoryNameDict[category] ?? 'Unknown'}
                </Link>
              </BreadcrumbItem>
            ))}
            {slug.length == 0 && <BreadcrumbItem>すべて</BreadcrumbItem>}
            {slug.length > 0 && (
              <BreadcrumbItem>
                {categoryNameDict[slug[slug.length - 1]] ?? 'Unknown'}
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>
        <Flex>
          <Flex $flexDirection={{ base: 'column', md: 'row' }}>
            <Box
              as="aside"
              $minWidth="200px"
              $marginBottom={{ base: 'medium', md: 'none' }}
            >
              {/* 商品の状態のフィルタ */}
              <FilterGroup
                title="商品の状態"
                items={[
                  { label: '新品', name: 'new' },
                  { label: '中古', name: 'used' },
                ]}
                value={conditions}
                onChange={handleChange}
              />
              <Box $paddingTop={'small'}>
                <Text as="h2" $fontWeight="bold" $variant="mediumLarge">
                  カテゴリ
                </Text>
                <Box>
                  <Anchor href="/search/" passHref>
                    すべて
                  </Anchor>
                </Box>
                {/* カテゴリのリンク */}
                {Object.keys(categoryNameDict).map(
                  (category: string, i: number) => (
                    <Box key={i} $marginTop={'small'}>
                      <Anchor href={`/search/${category}`} passHref>
                        {categoryNameDict[category as Category]}
                      </Anchor>
                    </Box>
                  ),
                )}
              </Box>
            </Box>
            <Box>
              <Text
                as="h2"
                $display={{ base: 'block', md: 'none' }}
                $fontWeight="bold"
                $variant="mediumLarge"
              >
                商品一覧
              </Text>
              {/*
                商品カードリストコンテナ
                検索クエリから商品カードリストを表示
               */}
              <ProductCardListContainer
                category={slug.length > 0 ? slug[slug.length - 1] : undefined}
                conditions={conditions}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default SearchPage;
