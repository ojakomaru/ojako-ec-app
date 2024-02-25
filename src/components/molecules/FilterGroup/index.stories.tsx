import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';
import FilterGroup from './index';

export default {
  title: 'Molecules/FilterGroup',
  component: FilterGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'タイトル',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: { type: 'array' },
      description: 'オプション',
      table: {
        type: { summary: 'array' },
      },
    },
    onChange: {
      description: 'onChangeイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof FilterGroup>;

const FilterGroupHooks = (args: ComponentProps<typeof FilterGroup>) => {
  const [value, setValue] = useState<string[]>([]);
  const handleChange = (value: string[]) => {
    setValue(value);
    args && args.onChange && args.onChange(value);
  };

  return <FilterGroup value={value} onChange={handleChange} {...args} />;
};

export const Standard: StoryObj<typeof FilterGroup> = {
  args: {
    title: 'All categories',
    items: [
      { label: 'Clothes', name: 'clothes' },
      { label: 'Books', name: 'books' },
      { label: 'Shoes', name: 'shoes' },
    ],
  },
  render: (args) => <FilterGroupHooks {...args} />,
};
