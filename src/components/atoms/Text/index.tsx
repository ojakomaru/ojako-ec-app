'use client';
import { styled } from 'styled-components';
import type { Responsive } from 'types/styles';
import {
  toPropValue,
  Space,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
} from 'utils/styles';

// テキストバリアント
export type TextVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge';

export type TextProps = {
  $variant?: TextVariant;
  $fontSize?: Responsive<FontSize>;
  $fontWeight?: Responsive<string>;
  $letterSpacing?: Responsive<LetterSpacing>;
  $lineHeight?: Responsive<LineHeight>;
  $textAlign?: Responsive<string>;
  $color?: Responsive<Color>;
  $backgroundColor?: Responsive<Color>;
  $width?: Responsive<string>;
  $height?: Responsive<string>;
  $minWidth?: Responsive<string>;
  $minHeight?: Responsive<string>;
  $display?: Responsive<string>;
  $border?: Responsive<string>;
  $overflow?: Responsive<string>;
  $margin?: Responsive<Space>;
  $marginTop?: Responsive<Space>;
  $marginRight?: Responsive<Space>;
  $marginBottom?: Responsive<Space>;
  $marginLeft?: Responsive<Space>;
  $padding?: Responsive<Space>;
  $paddingTop?: Responsive<Space>;
  $paddingRight?: Responsive<Space>;
  $paddingBottom?: Responsive<Space>;
  $paddingLeft?: Responsive<Space>;
};

const variants = {
  extraSmall: {
    $fontSize: 'extraSmall',
    $letterSpacing: 'extraSmall',
    $lineHeight: 'extraSmall',
  },
  small: {
    $fontSize: 'small',
    $letterSpacing: 'small',
    $lineHeight: 'small',
  },
  medium: {
    $fontSize: 'medium',
    $letterSpacing: 'medium',
    $lineHeight: 'medium',
  },
  mediumLarge: {
    $fontSize: 'mediumLarge',
    $letterSpacing: 'mediumLarge',
    $lineHeight: 'mediumLarge',
  },
  large: {
    $fontSize: 'large',
    $letterSpacing: 'large',
    $lineHeight: 'large',
  },
  extraLarge: {
    $fontSize: 'extraLarge',
    $letterSpacing: 'extraLarge',
    $lineHeight: 'extraLarge',
  },
};

/**
 * テキスト
 * バリアント、色、タイポグラフィ、レイアウト、スペース関連のPropsを追加
 */
const Text = styled.span<TextProps>`
  ${({
    $variant = 'medium',
    $fontSize,
    $letterSpacing,
    $lineHeight,
    theme,
  }) => {
    // バリアントのスタイルの適用
    if ($variant && variants[$variant]) {
      const styles = [];
      !$fontSize &&
        styles.push(
          toPropValue('font-size', variants[$variant].$fontSize, theme),
        );
      !$letterSpacing &&
        styles.push(
          toPropValue(
            'letter-spacing',
            variants[$variant].$letterSpacing,
            theme,
          ),
        );
      !$lineHeight &&
        styles.push(
          toPropValue('line-height', variants[$variant].$lineHeight, theme),
        );
      return styles.join('\n');
    }
  }}
  ${({ $fontSize, theme }) => toPropValue('font-size', $fontSize, theme)}
  ${({ $letterSpacing, theme }) =>
    toPropValue('letter-spacing', $letterSpacing, theme)}
  ${({ $lineHeight, theme }) => toPropValue('line-height', $lineHeight, theme)}
  ${({ $color = 'text', theme }) => toPropValue('color', $color, theme)}
  ${({ $backgroundColor, theme }) =>
    toPropValue('background-color', $backgroundColor, theme)}
  ${({ $width, theme }) => toPropValue('width', $width, theme)}
  ${({ $height, theme }) => toPropValue('height', $height, theme)}
  ${({ $minWidth, theme }) => toPropValue('min-width', $minWidth, theme)}
  ${({ $minHeight, theme }) => toPropValue('min-height', $minHeight, theme)}
  ${({ $display, theme }) => toPropValue('display', $display, theme)}
  ${({ $border, theme }) => toPropValue('border', $border, theme)}
  ${({ $overflow, theme }) => toPropValue('overflow', $overflow, theme)}
  ${({ $margin, theme }) => toPropValue('margin', $margin, theme)}
  ${({ $marginTop, theme }) => toPropValue('margin-top', $marginTop, theme)}
  ${({ $marginLeft, theme }) => toPropValue('margin-left', $marginLeft, theme)}
  ${({ $marginBottom, theme }) =>
    toPropValue('margin-bottom', $marginBottom, theme)}
  ${({ $marginRight, theme }) =>
    toPropValue('margin-right', $marginRight, theme)}
  ${({ $padding, theme }) => toPropValue('padding', $padding, theme)}
  ${({ $paddingTop, theme }) => toPropValue('padding-top', $paddingTop, theme)}
  ${({ $paddingLeft, theme }) =>
    toPropValue('padding-left', $paddingLeft, theme)}
  ${({ $paddingBottom, theme }) =>
    toPropValue('padding-bottom', $paddingBottom, theme)}
  ${({ $paddingRight, theme }) =>
    toPropValue('padding-right', $paddingRight, theme)}
`;

export default Text;
