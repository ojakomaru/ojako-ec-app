import UserProfileContainer from 'containers/UserProfileContainer';
import Link from 'next/link';
import BreadcrumbItem from 'components/atoms/BreadcrumbItem';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import Breadcrumb from 'components/molecules/Breadcrumb';
import Layout from 'components/templates/Layout';
import getAllUsers from 'services/users/get-all-users';
import { ApiContext } from 'types/data';
import getUser from 'services/users/get-user';
import getAllProducts from 'services/products/get-all-products';
import Separator from 'components/atoms/Separator';
import UserProductCardListContainer from 'containers/UserProductCardListContainer';

const context: ApiContext = {
  apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
};
const UserPage = async ({ params }: { params: { id: string } }) => {
  // ユーザー情報と ユーザーの所持する商品を取得し、静的ページを作成
  // 10秒でrevalidateな状態にし、静的ページを更新する
  const userId = Number(params.id);
  const [user, products] = await Promise.all([
    getUser(context, { id: userId }),
    getAllProducts(context, { userId }),
  ]);

  return (
    <Layout>
      <Flex
        $paddingTop={'medium'}
        $paddingBottom={'medium'}
        $paddingLeft={{ base: 'medium', md: 'none' }}
        $paddingRight={{ base: 'medium', md: 'none' }}
        $justifyContent="center"
      >
        <Box $width="1180px">
          <Box $marginBottom={'medium'}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href="/">トップ</Link>
              </BreadcrumbItem>
              {user && <BreadcrumbItem>{user.username}</BreadcrumbItem>}
            </Breadcrumb>
          </Box>
          <Box>
            <Box $marginBottom={'small'}>
              {/* ユーザープロファイルコンテナ */}
              {/* ユーザー情報を表示する。useUserで常に最新のデータを取得する。 */}
              {/* @ts-expect-error Server Component */}
              <UserProfileContainer userId={userId} user={user} />
            </Box>
            <Box $marginBottom={'small'}>
              <Separator />
            </Box>
            {/*
              ユーザー商品カードリストコンテナ
              ユーザーが所持する商品カードリストを表示する。useSearchで常に最新のデータを取得する。
            */}
            {/* @ts-expect-error Server Component */}
            <UserProductCardListContainer userId={userId} products={products} />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

// slug] ダイナミックセグメントに入力する `params` のリストを返す。
export async function generateStaticParams() {
  const users = await getAllUsers(context);
  return users.map((u) => ({ id: u.id.toString() }));
}

export default UserPage;
