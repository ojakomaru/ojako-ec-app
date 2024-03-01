'use client';
import { styled } from 'styled-components';
import ScaleImage from 'components/atoms/ScaleImage';
import Text from 'components/atoms/Text';
import Box from 'components/layout/Box';

interface ProductCardProps {
  /**
   * 商品タイトル
   */
  title: string;
  /**
   * 商品価格
   */
  price: number;
  /**
   * 商品画像URL
   */
  imageUrl: string;
  /**
   * 商品のぼかし画像のデータURIスキーム
   */
  blurDataUrl?: string;
  /**
   * バリアント（表示スタイル）
   */
  variant?: 'listing' | 'small' | 'detail';
}

// 商品カードのコンテナ
const ProductCardContainer = styled.div`
  position: relative;
`;

// 商品カード画像のコンテナ
const ProductCardImageContainer = styled.div`
  z-index: 99;
`;

// 商品カードの情報
const ProductCardInfo = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
`;

/**
 * 商品カード
 */
const ProductCard = ({
  title,
  price,
  imageUrl,
  blurDataUrl,
  variant = 'listing',
}: ProductCardProps) => {
  const { size, imgSize } = (() => {
    switch (variant) {
      case 'detail':
        return { size: { base: '320px', md: '540px' }, imgSize: 540 };
      case 'listing':
        return { size: { base: '160px', md: '240px' }, imgSize: 240 };
      default:
        return { size: { base: '160px' }, imgSize: 160 };
    }
  })();

  return (
    <ProductCardContainer>
      {variant !== 'small' && (
        <ProductCardInfo>
          <Box>
            <Text
              as="h2"
              $fontSize={{ base: 'small', md: 'mediumLarge' }}
              $letterSpacing={{ base: 'medium', md: 'large' }}
              $lineHeight={{ base: '32px', md: '48px' }}
              $backgroundColor="white"
              $margin={'none'}
              $paddingRight={'medium'}
              $paddingLeft={'medium'}
              $paddingTop={'none'}
              $paddingBottom={'none'}
            >
              {title}
            </Text>
            <Text
              as="span"
              $fontWeight="bold"
              $display="inline-block"
              $backgroundColor="white"
              $fontSize={{ base: 'extraSmall', md: 'medium' }}
              $lineHeight={{ base: '8px', md: '12px' }}
              $letterSpacing={{ base: 'medium', md: 'extraLarge' }}
              $margin={'none'}
              $padding={{ base: 'small', md: 'medium' }}
            >
              {price}円
            </Text>
          </Box>
        </ProductCardInfo>
      )}
      <ProductCardImageContainer>
        {blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            alt={'ProductCardImage'}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        )}
        {!blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            alt={'ProductCardImage'}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            style={{ objectFit: 'cover' }}
          />
        )}
      </ProductCardImageContainer>
      {variant === 'small' && (
        <Box $marginTop={'small'}>
          <Text as="h2" $variant="medium" $margin={'none'} $padding={'none'}>
            {title}
          </Text>
          <Text as="span" $variant="medium">
            {price}円
          </Text>
        </Box>
      )}
    </ProductCardContainer>
  );
};

export default ProductCard;
