import { styled } from 'styled-components';
import type { Responsive } from 'types/styles';
import { toPropValue, Color, Space } from 'utils/styles';

export type BoxProps = {
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

/**
 * Boxコンポーネント
 * レイアウトの調整に利用する
 */
const Box = styled.div<BoxProps>`
  ${({ $color, theme }) => toPropValue('color', $color, theme)}
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

export default Box;
