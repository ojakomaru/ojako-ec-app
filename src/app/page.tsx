'use client';
import Button from 'components/atoms/Button';
import CartProduct from 'components/organisms/CartProduct';

export default function Home() {
  return (
    <main className={'main'}>
      <h1>初めてのNextJs</h1>
      <CartProduct
        imageUrl={'/src/assets/images/1.jpg'}
        id={1}
        title="test"
        price={300}
        onBuyButtonClick={() => null}
      />
      <Button
        $fontSize={{ base: 'small', md: 'medium' }}
        $variant="secondary"
        $backgroundColor={'#3ccc'}
      >
        これが完成したボタンです。
      </Button>
    </main>
  );
}
