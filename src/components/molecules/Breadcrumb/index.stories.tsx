import { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './index';
import BreadcrumbItem from 'components/atoms/BreadcrumbItem';

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export const Standard: StoryObj<typeof Breadcrumb> = {
  render: () => {
    return (
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">Top</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Clothes</a>
        </BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
      </Breadcrumb>
    );
  },
};
