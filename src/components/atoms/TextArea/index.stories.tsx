import { Meta, StoryObj } from '@storybook/react';
import TextArea from './index';

const meta = {
  title: 'Atoms/TextArea',
  component: TextArea,
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
      table: {
        type: { summary: 'string' },
      },
    },
    rows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: '行数',
      table: {
        type: { summary: 'number' },
      },
    },
    minRows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: '最小行数',
      table: {
        type: { summary: 'number' },
      },
    },
    maxRows: {
      control: { type: 'number' },
      defaultValue: 10,
      description: '最大行数',
      table: {
        type: { summary: 'number' },
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
    onChange: {
      description: 'onChangeイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Normal: Story = {
  args: {
    placeholder: 'TextBox',
  },
};
export const Error: Story = {
  args: {
    placeholder: 'Error',
    hasError: true,
  },
};
