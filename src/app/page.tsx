'use client';
import image1 from '../assets/images/1.jpg';
import Badge from 'components/atoms/Badge';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import ShapeImage from 'components/atoms/ShapeImage';
import Text from 'components/atoms/Text';
import TextArea from 'components/atoms/TextArea';
import CheckBox from 'components/molecules/CheckBox';
import Dropdown from 'components/molecules/Dropdown';

export default function Home() {
  return (
    <main className={'main'}>
      <h1>初めてのNextJs</h1>
      <Dropdown
        name="Dropdown"
        options={[
          { value: null, label: '-' },
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'Three' },
        ]}
        placeholder="Dropdownです"
      />
      <CheckBox name="checkbox" label="CheckBoxテストです" />
      <Badge content="1" />
      <TextArea />
      <Button $variant="secondary" $backgroundColor={'#3ccc'}>
        これが完成したボタンです。
      </Button>
      <Text>テキストも作成してみた</Text>
      <ShapeImage
        shape="circle"
        src={image1}
        alt={'サンプル画像でっす。'}
        priority={true}
      />
      <Input />
    </main>
  );
}
