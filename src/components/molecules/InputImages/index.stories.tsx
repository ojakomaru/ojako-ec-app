import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import InputImages, { FileData } from './';

export default {
  title: 'Molecules/InputImages',
  component: InputImages,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof InputImages>;

const Container = styled.div`
  width: 288px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`;

const InputImagesHooks = () => {
  const [images, setImages] = useState<FileData[]>([]);

  const handleChange = (images: FileData[]) => {
    setImages(images);
  };

  return (
    <Container>
      <InputImages images={images} onChange={handleChange} maximumNumber={2} />
    </Container>
  );
};

export const Standard: StoryObj<typeof InputImagesHooks> = {
  render: () => <InputImagesHooks />,
};
