import { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'バッジのテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'バッジの色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Orange: Story = {
  args: {
    content: '2',
    backgroundColor: '#ed9f28',
  },
};
export const Red: Story = {
  args: {
    content: '6',
    backgroundColor: '#d4001a',
  },
};
export const Theme: Story = {
  args: {
    content: '12',
  },
};
