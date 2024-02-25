import { Meta, StoryObj } from '@storybook/react';
import RectLoader from './index';

export default {
  title: 'Atoms/RectLoader',
  component: RectLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
} satisfies Meta<typeof RectLoader>;

export const Normal: StoryObj<typeof RectLoader> = {
  render: (args) => <RectLoader {...args} />,
};
