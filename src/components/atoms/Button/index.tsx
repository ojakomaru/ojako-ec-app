'use client';
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';
import { Responsive } from 'types/styles';
import {
  toPropValue,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Space,
} from 'utils/styles';

// ボタンのバリアント
export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  $variant?: ButtonVariant;
  $fontSize?: Responsive<FontSize>;
  $fontWeight?: Responsive<string>;
  $letterSpacing?: Responsive<LetterSpacing>;
  $lineheight?: Responsive<LineHeight>;
  $textalign?: Responsive<string>;
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
  $paddingtop?: Responsive<Space>;
  $paddingright?: Responsive<Space>;
  $paddingbottom?: Responsive<Space>;
  $paddingleft?: Responsive<Space>;
  // 擬似クラス
  $pseudoClass?: {
    hover?: {
      backgroundColor?: Responsive<Color>;
    };
    disabled?: {
      backgroundColor?: Responsive<Color>;
    };
  };
};

const variants = {
  // プライマリ
  primary: {
    color: 'white',
    backgroundColor: 'primary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'primaryDark',
      },
      disabled: {
        backgroundColor: 'primary',
      },
    },
  },
  // セカンダリ
  secondary: {
    color: 'white',
    backgroundColor: 'secondary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'secondaryDark',
      },
      disabled: {
        backgroundColor: 'secondary',
      },
    },
  },
  // デンジャー
  danger: {
    color: 'white',
    backgroundColor: 'danger',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'dangerDark',
      },
      disabled: {
        backgroundColor: 'danger',
      },
    },
  },
};

/**
 * ボタン
 * バリアント、色、タイポグラフィ、レイアウト、スペース関連のPropsを追加
 */
const Button = styled.button<ButtonProps>`
  ${({
    $variant = 'primary',
    $color = 'white',
    $backgroundColor,
    $pseudoClass,
    theme,
  }) => {
    // バリアントのスタイルの適用
    if ($variant && variants[$variant]) {
      const styles = [];
      !$color &&
        styles.push(toPropValue('color', variants[$variant].color, theme));
      !$backgroundColor &&
        styles.push(
          toPropValue(
            'background-color',
            variants[$variant].backgroundColor,
            theme,
          ),
        );
      !$pseudoClass &&
        styles.push(
          `&:hover {
            ${toPropValue(
              'background-color',
              variants[$variant].pseudoClass.hover.backgroundColor,
              theme,
            )}
          }`.replaceAll('\n', ''),
        );
      !$pseudoClass &&
        styles.push(
          `&:disabled {
            ${toPropValue(
              'background-color',
              variants[$variant].pseudoClass.disabled.backgroundColor,
              theme,
            )}
          }`.replaceAll('\n', ''),
        );
      return styles.join('\n');
    }
  }}
  ${({ $fontSize, theme }) => toPropValue('font-size', $fontSize, theme)}
  ${({ $textalign = 'center', theme }) =>
    toPropValue('text-align', $textalign, theme)}
  ${({ $letterSpacing, theme }) =>
    toPropValue('letter-spacing', $letterSpacing, theme)}
  ${({ $lineheight, theme }) => toPropValue('line-height', $lineheight, theme)}
  ${({ $color, theme }) => toPropValue('color', $color, theme)}
  ${({ $backgroundColor, theme }) =>
    toPropValue('background-color', $backgroundColor, theme)}
  ${({ $width, theme }) => toPropValue('width', $width, theme)}
  ${({ $height, theme }) => toPropValue('height', $height, theme)}
  ${({ $minWidth, theme }) => toPropValue('min-width', $minWidth, theme)}
  ${({ $minHeight, theme }) => toPropValue('min-height', $minHeight, theme)}
  ${({ $display = 'inline-block', theme }) =>
    toPropValue('display', $display, theme)}
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
  ${({ $paddingtop = 'small', ...props }) =>
    toPropValue('padding-top', $paddingtop, props.theme)}
  ${({ $paddingleft = 'small', ...props }) =>
    toPropValue('padding-left', $paddingleft, props.theme)}
  ${({ $paddingbottom = '', theme }) =>
    toPropValue('padding-bottom', $paddingbottom, theme)}
  ${({ $paddingright = 'small', ...props }) =>
    toPropValue('padding-right', $paddingright, props.theme)}
  &:hover {
    ${(props) =>
      toPropValue(
        'background-color',
        props?.$pseudoClass?.hover?.backgroundColor,
      )}
  }
  &:disabled {
    ${(props) =>
      toPropValue(
        'background-color',
        props?.$pseudoClass?.disabled?.backgroundColor,
      )}
  }
  cursor: pointer;
  outline: 0;
  text-decoration: 'none';
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-radius: 4px;
  border: none;
`;

export default Button;
