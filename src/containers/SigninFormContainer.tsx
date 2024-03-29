'use client';
import React from 'react';
import SigninForm from 'components/organisms/SigninForm';
import { useAuthContext } from 'contexts/AuthContext';
import { useGlobalSpinnerContext } from 'contexts/GlobalSpinnerContext';

interface SigninFormContainerProps {
  // サインイン時に呼ばれるイベントハンドラー
  onSignin: (error?: Error) => void;
}

const SigninFormContainer = ({ onSignin }: SigninFormContainerProps) => {
  const { signin } = useAuthContext();
  const { setGlobalSpinner } = useGlobalSpinnerContext();
  // サインインボタンを押された時のイベントハンドラ
  const handleSignin = async (username: string, password: string) => {
    try {
      // ローディングスピナーを表示する
      setGlobalSpinner(true);
      await signin(username, password);
      onSignin && onSignin();
    } catch (err: unknown) {
      if (err instanceof Error) {
        // エラーの内容を表示
        window.alert(err.message);
        onSignin && onSignin(err);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return <SigninForm onSignin={handleSignin} />;
};

export default SigninFormContainer;
