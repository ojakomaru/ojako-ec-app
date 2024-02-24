import { styled } from 'styled-components';
import Box, { BoxProps } from 'components/layout/Box';
import type {
  Responsive,
  CSSPropertyAlignItems,
  CSSPropertyAlignContent,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyFlexDirection,
  CSSPropertyJustifySelf,
  CSSPropertyFlexWrap,
  CSSPropertyAlignSelf,
} from 'types/styles';
import { toPropValue } from 'utils/styles';

type FlexProps = BoxProps & {
  $alignItems?: Responsive<CSSPropertyAlignItems>;
  $alignContent?: Responsive<CSSPropertyAlignContent>;
  $justifyContent?: Responsive<CSSPropertyJustifyContent>;
  $justifyItems?: Responsive<CSSPropertyJustifyItems>;
  $flexWrap?: Responsive<CSSPropertyFlexWrap>;
  $flexBasis?: Responsive<string>;
  $flexDirection?: Responsive<CSSPropertyFlexDirection>;
  $flexGrow?: Responsive<string>;
  $flexShrink?: Responsive<string>;
  $justifySelf?: Responsive<CSSPropertyJustifySelf>;
  $alignSelf?: Responsive<CSSPropertyAlignSelf>;
  $order?: Responsive<string>;
};

/**
 * Flexコンポーネント
 * flexboxの実現に利用する
 */
const Flex = styled(Box)<FlexProps>`
  display:
    'flex',
    ${({ $alignItems, theme }) =>
        toPropValue('align-items', $alignItems, theme)}
      ${({ $alignContent, theme }) =>
        toPropValue('align-content', $alignContent, theme)}
      ${({ $justifyContent, theme }) =>
        toPropValue('justify-content', $justifyContent, theme)}
      ${({ $justifyItems, theme }) =>
        toPropValue('justify-items', $justifyItems, theme)}
      ${({ $flexWrap, theme }) => toPropValue('flex-wrap', $flexWrap, theme)}
      ${({ $flexBasis, theme }) => toPropValue('flex-basis', $flexBasis, theme)}
      ${({ $flexDirection, theme }) =>
        toPropValue('flex-direction', $flexDirection, theme)}
      ${({ $flexGrow, theme }) => toPropValue('flex-grow', $flexGrow, theme)}
      ${({ $flexShrink, theme }) =>
        toPropValue('flex-shrink', $flexShrink, theme)}
      ${({ $justifySelf, theme }) =>
        toPropValue('justify-self', $justifySelf, theme)}
      ${({ $alignSelf, theme }) => toPropValue('align-self', $alignSelf, theme)}
      ${({ $order, theme }) => toPropValue('order', $order, theme)};
`;

export default Flex;
