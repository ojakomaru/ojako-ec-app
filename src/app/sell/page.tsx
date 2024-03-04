'use client';
import { useRouter } from 'next/navigation';
import AppLogo from 'components/atoms/AppLogo';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import Layout from 'components/templates/Layout';
import ProductFormContainer from 'containers/ProductFormContainer';
import { useAuthContext } from 'contexts/AuthContext';
import { useAuthGuard } from 'utils/hooks';

const SellPage = () => {
  const router = useRouter();
  const { authUser } = useAuthContext();

  const handleSave = (err?: Error) => {
    if (authUser && !err) {
      // 成功したら、ユーザーページに移動
      router.push(`/users/${authUser.id}`);
    }
  };

  // 認証ガード
  useAuthGuard();

  return (
    <Layout>
      <Flex
        $paddingTop={{
          base: 'medium',
          md: 'large',
        }}
        $paddingBottom={{
          base: 'medium',
          md: 'large',
        }}
        $paddingLeft={{ base: 'medium', md: 'none' }}
        $paddingRight={{ base: 'medium', md: 'none' }}
        $justifyContent="center"
      >
        <Flex
          $width="800px"
          $flexDirection="column"
          $justifyContent="center"
          $alignItems="center"
        >
          <Box
            $display={{ base: 'none', md: 'block' }}
            $marginBottom={'medium'}
          >
            <AppLogo />
          </Box>
          <Box $width="100%">
            {/*
              商品投稿フォームコンテナ
              商品情報を入力し、プロダクトAPIを通じて商品を保存
            */}
            <ProductFormContainer onSave={handleSave} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SellPage;
