import { Meta, StoryObj } from '@storybook/react';
import Separator from './index';

export default {
  title: 'Atoms/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export const Standard: StoryObj<typeof Separator> = {
  render: () => {
    return (
      <>
        <Separator>or</Separator>
        <Separator>and</Separator>
        <Separator />
      </>
    );
  },
};
