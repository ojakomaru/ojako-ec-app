import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta = {
  title: 'Atoms/Button',
  // 使用するコンポーネント
  component: Button,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
  argTypes: {
    $variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: 'ボタンバリアント',
      table: {
        type: { summary: 'primary | secondary' },
        defalutValue: { summary: 'primary' },
      },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'ボタンテキスト',
      table: {
        type: { summary: 'primary' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Disabledフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    $width: {
      control: { type: 'number' },
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    $height: {
      control: { type: 'number' },
      description: '縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    $variant: 'primary',
    children: 'Primary',
  },
};
export const Secondary: Story = {
  args: {
    $variant: 'secondary',
    children: 'Secondary',
  },
};
