import { useForm } from 'react-hook-form';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Text from 'components/atoms/Text';
import Box from 'components/layout/Box';

export type SigninFormData = {
  username: string;
  password: string;
};

interface SigninFormProps {
  // サインインボタンを押したときのイベントハンドラ
  onSignin?: (username: string, password: string) => void;
}
/**
 * サインインフォーム
 */
const SigninForm = ({ onSignin }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>();

  const onSubmit = (data: SigninFormData) => {
    const { username, password } = data;
    onSignin && onSignin(username, password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box $marginBottom={'small'}>
        {/* サインインユーザー名の入力 */}
        <Input
          {...register('username', { required: true })}
          name="username"
          type="text"
          placeholder="ユーザー名"
          $hasError={!!errors.username}
        />
        {errors.username && (
          <Text color="danger" $variant="small" $paddingLeft={'small'}>
            ユーザー名は必須です
          </Text>
        )}
      </Box>
      <Box $marginBottom={'medium'}>
        {/* サインインパスワードの入力 */}
        <Input
          {...register('password', { required: true })}
          name="password"
          type="password"
          placeholder="パスワード"
          $hasError={!!errors.password}
        />
        {errors.password && (
          <Text color="danger" $variant="small" $paddingLeft={'small'}>
            パスワードは必須です
          </Text>
        )}
      </Box>
      <Button $width="100%" type="submit">
        サインイン
      </Button>
    </form>
  );
};

export default SigninForm;
