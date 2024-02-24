import { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect, ComponentProps } from 'react';
import Dropzone from './index';
import Button from 'components/atoms/Button';
import Box from 'components/layout/Box';

const meta = {
  title: 'Molecules/Dropzone',
  component: Dropzone,
  parameters: {
    // キャンバスのコンポーネントを中央に配置するためのオプション
    layout: 'centered',
  },
  // ドックを自動生成
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    acceptedFileTypes: {
      options: {
        control: { type: 'array' },
        description: '受け付けるファイルタイプ',
        table: {
          type: { summary: 'array' },
        },
      },
    },
    onDrop: {
      description: 'ファイルがドロップ入力された時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
    onChange: {
      description: 'ファイルが入力された時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof Dropzone>;

const DropzoneHooks = (args: ComponentProps<typeof Dropzone>) => {
  const [files, setFiles] = useState<File[]>([]);
  const handleDrop = (files: File[]) => {
    setFiles(files);
    args && args.onDrop && args.onDrop(files);
  };
  const fetchData = async () => {
    const res = await fetch('/images/1.jpg');
    const blob = await res.blob();
    const file = new File([blob], '1.png', blob);

    setFiles([...files, file]);
  };

  const clearImages = () => {
    setFiles([]);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Box $marginBottom={'small'}>
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </Box>
      <Box $marginBottom={'small'}>
        <Button onClick={fetchData}>画像を追加</Button>
      </Box>
      <Box $marginBottom={'medium'}>
        <Button onClick={clearImages}>全ての画像をクリア</Button>
      </Box>
      <Box>
        {files.map((f, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={URL.createObjectURL(f)}
            width="100px"
            key={i}
            alt="sample"
          />
        ))}
      </Box>
    </>
  );
};

export const Template: Story = {
  args: {
    height: 200,
    width: '100%',
    acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
    hasError: false,
  },
  render: (args) => <DropzoneHooks {...args} />,
};
