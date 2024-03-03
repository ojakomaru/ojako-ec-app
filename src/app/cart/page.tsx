import Link from 'next/link';
import BreadcrumbItem from 'components/atoms/BreadcrumbItem';
import Text from 'components/atoms/Text';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import Breadcrumb from 'components/molecules/Breadcrumb';
import Layout from 'components/templates/Layout';
import CartContainer from 'containers/CartContainer';
// import { useAuthGuard } from 'utils/hooks'

const CartPage = () => {
  // 認証ガード
  // useAuthGuard();

  return (
    <Layout>
      <Flex
        $paddingTop={'medium'}
        $paddingBottom={'medium'}
        $paddingLeft={{ base: 'medium', md: 'none' }}
        $paddingRight={{ base: 'medium', md: 'none' }}
        $justifyContent="center"
      >
        <Box $width="1240px">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link href="/">トップ</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>カート</BreadcrumbItem>
          </Breadcrumb>
          <Box>
            <Text $display="block" $variant="large" as="h1">
              カート
            </Text>
            {/*
              カートコンテナ
              カートの中にある商品を表示、購入、削除
            */}
            <CartContainer />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default CartPage;
