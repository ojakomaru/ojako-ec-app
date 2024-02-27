import { Meta, StoryObj } from '@storybook/react';
import SigninForm from './index';

export default {
  title: 'Organisms/SigninForm',
  component: SigninForm,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    onSignin: {
      description: 'サインインボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof SigninForm>;

export const Form: StoryObj<typeof SigninForm> = {
  render: (args) => <SigninForm {...args} />,
};
