import { Meta, StoryObj } from '@storybook/react';
import AppLogo from './index';

export default {
  title: 'Atoms/AppLogo',
  component: AppLogo,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
} satisfies Meta<typeof AppLogo>;

export const Logo: StoryObj<typeof AppLogo> = {};
