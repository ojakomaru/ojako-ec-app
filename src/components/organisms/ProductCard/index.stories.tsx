import { Meta, StoryObj } from '@storybook/react';
import ProductCard from './index';

export default {
  title: 'Organisms/ProductCard',
  component: ProductCard,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '商品名',
      table: {
        type: { summary: 'string' },
      },
    },
    price: {
      control: { type: 'number' },
      description: '商品価格',
      table: {
        type: { summary: 'number' },
      },
    },
    imageUrl: {
      control: { type: 'text' },
      description: '商品画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    blurDataUrl: {
      control: { type: 'text' },
      description: '商品のぼかし画像のデータURIスキーム',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      options: ['listing', 'small', 'detail'],
      control: { type: 'radio' },
      defaultValue: 'listing',
      description: 'バリアント（表示スタイル）',
      table: {
        type: { summary: 'listing | small | detail' },
        defaultValue: { summary: 'listing' },
      },
    },
  },
} satisfies Meta<typeof ProductCard>;

type Template = StoryObj<typeof ProductCard>;

// Listingカード
export const Listing: Template = {
  args: {
    variant: 'listing',
    title: 'ナイスシューズ',
    imageUrl: '/images/1.jpg',
    price: 2000,
  },
};

// Smallカード
export const Small: Template = {
  args: {
    variant: 'small',
    title: 'ナイスシューズ',
    imageUrl: '/images/1.jpg',
    price: 2000,
  },
};

// Detailカード
export const Detail: Template = {
  args: {
    variant: 'detail',
    title: 'ナイスシューズ',
    imageUrl: '/images/1.jpg',
    price: 2000,
  },
};
