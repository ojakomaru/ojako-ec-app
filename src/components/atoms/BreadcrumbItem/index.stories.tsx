import { Meta, StoryObj } from '@storybook/react';
import BreadcrumbItem from './index';

export default {
  title: 'Atoms/BreadcrumbItem',
  component: BreadcrumbItem,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
} as Meta<typeof BreadcrumbItem>;

export const Standard: StoryObj<typeof BreadcrumbItem> = {
  render: () => {
    return (
      <div>
        <BreadcrumbItem>Item 1</BreadcrumbItem>
        <BreadcrumbItem>Item 2</BreadcrumbItem>
        <BreadcrumbItem>Item 3</BreadcrumbItem>
      </div>
    );
  },
};
