import { StoryObj, Meta } from '@storybook/react';
import { SimpleButton } from 'components/SimpleButton';

const meta: Meta<typeof SimpleButton> = {
  component: SimpleButton,
  args: {
    label: 'Simple Button',
    color: '#3700ff',
    onClick: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof SimpleButton>;

export const Default: Story = {
  argTypes: {
    onClick: { action: true },
  },
};
