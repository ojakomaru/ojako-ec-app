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
              <UserProfileContainer userId={userId} user={user} />
            </Box>
            <Box $marginBottom={'small'}>
              <Separator />
            </Box>
            {/*
              ユーザー商品カードリストコンテナ
              ユーザーが所持する商品カードリストを表示する。useSearchで常に最新のデータを取得する。
            */}
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
  return users.map((u) => ({ id: u.id }));
}

// このページの複数のバージョンが静的に生成される。
// generateStaticParams` によって返される `params` を使用する。
// export default function Page({ params }) {
//   const { slug } = params;
//   // ...
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const context: ApiContext = {
//     apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
//   }
//   const users = await getAllUsers(context)
//   const paths = users.map((u) => `/users/${u.id}`)

//   return { paths, fallback: true }
// }

// export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
//   const context: ApiContext = {
//     apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
//   }

//   if (!params) {
//     throw new Error('params is undefined')
//   }

//   // ユーザー情報と ユーザーの所持する商品を取得し、静的ページを作成
//   // 10秒でrevalidateな状態にし、静的ページを更新する
//   const userId = Number(params.id)
//   const [user, products] = await Promise.all([
//     getUser(context, { id: userId }),
//     getAllProducts(context, { userId }),
//   ])

//   return {
//     props: {
//       id: userId,
//       user,
//       products: products ?? [],
//     },
//     revalidate: 10,
//   }
// }

export default UserPage;
