import UserProfile from 'components/organisms/UserProfile';
import useUser from 'services/users/use-user';
import type { ApiContext, User } from 'types/data';

const context: ApiContext = {
  apiRootUrl: process.env.API_BASE_URL || '/api/proxy',
};

interface UserProfileContainerProps {
  /**
   * ユーザーID
   */
  userId: number;
  /**
   * 初期で表示するユーザー
   */
  user?: User;
}

/**
 * ユーザープロフィールコンテナ
 */
const UserProfileContainer = async ({
  userId,
  user,
}: UserProfileContainerProps) => {
  // 最新のユーザー情報を取得し、更新があった場合には
  // initialで指定されているデータを上書きする
  const u = await useUser(context, { id: userId, initial: user });
  // console.log('useUser',u);
  if (!u) return <div>Loading...</div>;

  return (
    <UserProfile
      username={`${u.username} (${u.displayName})`}
      profileImageUrl={u.profileImageUrl}
      numberOfProducts={100}
      description={u.description}
    />
  );
};

export default UserProfileContainer;
