import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './index';

const meta = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: 'array' },
      description: 'ドロップダウンの選択肢',
      table: {
        type: { summary: 'array' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'ドロップダウンの値',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
  args: {
    options: [
      { value: null, label: '-' },
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' },
    ],
    placeholder: 'Please select items from the list',
  },
};

export const Many: Story = {
  args: {
    options: Array.from(Array(20), (_v, k) => {
      return { value: k.toString(), label: k.toString() };
    }),
    placeholder: 'Please select items from the list',
  },
};
