import type { ApiContext, User } from 'types/data';
import { fetcher } from 'utils';

export type UseUserProps = {
  /**
   * 取得するユーザーID
   */
  id: number;
  /**
   * 初期状態
   */
  initial?: User;
};

/**
 * ユーザーAPI（個別取得）のカスタムフック
 * @param context APIコンテキスト
 * @returns ユーザーとAPI呼び出しの状態
 */
const useUser = async (
  context: ApiContext,
  { id, initial }: UseUserProps,
): Promise<User> => {
  const user = await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    },
  );
  return user ?? initial ?? [];
};

export default useUser;
