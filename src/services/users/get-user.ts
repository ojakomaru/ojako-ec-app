import { ApiContext, User } from 'types/data';
import { fetcher } from 'utils';

export type GetUserParams = {
  /**
   * ユーザーID
   */
  id: number;
};

/**
 * ユーザーAPI
 * @param context APIコンテキスト
 * @param param1 パラメータ
 * @returns ユーザー
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    },
  );
};

export default getUser;
