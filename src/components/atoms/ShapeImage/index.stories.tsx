import type { Meta, StoryObj } from '@storybook/react';
import ShapeImage from './index';

const meta = {
  title: 'Atoms/ShapeImage',
  component: ShapeImage,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '画像の形',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
} satisfies Meta<typeof ShapeImage>;

export default meta;

type Story = StoryObj<typeof ShapeImage>;

export const Circle: Story = {
  args: {
    src: '/images/1.jpg',
    shape: 'circle',
    width: 200,
    height: 200,
  },
};

export const Square: Story = {
  args: {
    src: '/images/2.jpg',
    shape: 'square',
    width: 200,
    height: 200,
  },
};
