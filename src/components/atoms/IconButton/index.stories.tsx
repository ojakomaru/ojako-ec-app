import type { Meta, StoryObj } from '@storybook/react';
import { SearchIcon, CloudUploadIcon, PersonOutlineIcon } from './';

const meta = {
  title: 'Atoms/IconButton',
  component: SearchIcon,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'string' },
      description: 'アイコン色',
      table: {
        type: { summary: 'ThemeColors' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '背景色',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: 'アイコンのサイズ',
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
} satisfies Meta<typeof SearchIcon>;

export default meta;

type Template = StoryObj<typeof SearchIcon>;
export const Template: Template = {
  render: (args) => {
    return (
      <>
        <SearchIcon {...args} />
        <CloudUploadIcon {...args} />
        <PersonOutlineIcon {...args} />
      </>
    );
  },
};
