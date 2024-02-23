import { Meta, StoryObj } from '@storybook/react';
import Input from './index';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      defaultValue: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    $hasBorder: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'ボーダーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    $hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Normal: Story = {
  args: {
    $hasBorder: true,
  },
};
export const Error: Story = {
  args: {
    $hasError: true,
  },
};
