import { Meta, StoryObj } from '@storybook/react';
import CheckBox from './index';

const meta = {
  title: 'Molecules/CheckBox',
  // 使用するコンポーネント
  component: CheckBox,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '表示ラベル',
      table: {
        type: { summary: 'text' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: 'チェック',
      table: {
        type: { summary: 'number' },
      },
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  args: {
    label: 'Label',
  },
};
