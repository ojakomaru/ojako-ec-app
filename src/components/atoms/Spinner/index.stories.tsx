import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';
import Spinner from './index';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number' },
      defaultValue: 50,
      description: 'サイズ',
      table: {
        type: { summary: 'number' },
      },
    },
    strokeWidth: {
      control: { type: 'number' },
      description: '先の太さ',
      defaultValue: 4,
      table: {
        type: { summary: 'number' },
      },
    },
    isAutoCentering: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'センタリングフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Spinner>;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1199;
`;

export const Template: StoryObj<typeof Spinner> = {
  render: (args) => {
    return (
      <SpinnerWrapper>
        <Spinner {...args} />
      </SpinnerWrapper>
    );
  },
};
