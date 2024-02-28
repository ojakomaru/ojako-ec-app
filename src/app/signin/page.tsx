import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import AppLogo from 'components/atoms/AppLogo';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import Layout from 'components/templates/Layout';
import SigninFormContainer from 'containers/SigninFormContainer';

const SigninPage: NextPage = () => {
  const router = useRouter();
  // 認証後のイベントハンドラ
  const handleSignin = async (err?: Error) => {
    if (!err) {
      // サインインに成功しクエリが指定されている場合はそのURLに移動
      // デフォルトはトップページに遷移
      const redirectTo = (router.query['redirect_to'] as string) ?? '/';
      console.log('Redirecting', redirectTo);
      await router.push(redirectTo);
    }
  };
  return (
    <Layout>
      <Flex
        $paddingTop={'medium'}
        $paddingBottom={'medium'}
        $paddingLeft={{ base: 'medium', md: 'none' }}
        $paddingRight={{ base: 'medium', md: 'none' }}
        $justifyContent="center"
      >
        <Flex
          $width="400px"
          $flexDirection={'column'}
          $justifyContent="center"
          $alignItems={'center'}
        >
          <Box $marginBottom={'medium'}>
            <AppLogo />
          </Box>
          <Box $width={'100%'}>
            {/*
            サインインフォームコンテナー
            SigninFormのユーザー名・パスワードから認証APIを呼び出し
            onSigninコールバックが呼び出される
             */}
            <SigninFormContainer onSignin={handleSignin} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SigninPage;
