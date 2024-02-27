import { Meta, StoryObj } from '@storybook/react';
import ProductForm from './index';

export default {
  title: 'Organisms/ProductForm',
  component: ProductForm,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
  argTypes: {
    onProductSave: {
      description: '出品ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof ProductForm>;

export const Template: StoryObj<typeof ProductForm> = {
  render: (args) => <ProductForm {...args} />,
};
