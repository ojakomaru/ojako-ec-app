import useSWR from 'swr';
import type { ApiContext, Category, Condition, Product } from 'types/data';
import { fetcher } from 'utils';

export type UseSearchProps = {
  /**
   * 商品カテゴリ
   */
  category?: Category;
  /**
   * 商品状態
   */
  conditions?: Condition[];
  /**
   * 所有するユーザーID
   */
  userId?: number;
  /**
   * ソートするキー
   */
  sort?: keyof Omit<Product, 'owner'>;
  /**
   * 昇順or降順
   */
  order?: 'asc' | 'desc';
  /**
   * 初期状態
   */
  initial?: Product[];
};

export type UseSearch = {
  /**
   * 検索にヒットした商品リスト
   */
  products: Product[];
  /**
   * ロードフラグ
   */
  isLoading: boolean;
  /**
   * エラーフラグ
   */
  isError: boolean;
};

/**
 * プロダクトAPI（一覧取得）のカスタムフック
 * @param context APIコンテキスト
 * @param params 検索条件
 * @returns 商品一覧とAPI呼び出しの状態
 */
const useSearchSWR = (
  context: ApiContext,
  {
    category,
    userId,
    conditions,
    initial,
    sort = 'id',
    order = 'desc',
  }: UseSearchProps = {},
): UseSearch => {
  // 末尾のスラッシュを削除してエンドポイントの設定
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/products`;
  const params = new URLSearchParams();

  // クエリストリングの設定
  category && params.append('category', category);
  userId && params.append('owner.id', `${userId}`);
  conditions &&
    conditions.forEach((condition) => params.append('condition', condition));
  sort && params.append('_sort', sort);
  order && params.append('_order', order);
  const query = params.toString();
  // データを取得して返す
  const { data, error } = useSWR<Product[]>(
    query.length > 0 ? `${path}?${query}` : path,
    fetcher,
  );

  return {
    products: data ?? initial ?? [],
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useSearchSWR;