'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import {
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
} from 'components/atoms/IconButton';
import Text from 'components/atoms/Text';
import Flex from 'components/layout/Flex';

export interface CheckBoxProps
  // defaultValueプロパティを除いたobject型
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  /**
   * 表示ラベル
   */
  label?: string;
}

// 非表示のチェックボックス
const CheckBoxElement = styled.input`
  display: none;
`;

// チェックボックスのラベル
const Label = styled.label`
  cursor: pointer;
  margin-left: 6px;
  user-select: none;
`;

const CheckBox = ({ id, label, onChange, checked, ...rest }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const ref = useRef<HTMLInputElement>(null);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      // チェックボックスを強制的にクリック
      ref.current?.click();
      setIsChecked((isChecked) => !isChecked);
    },
    [ref, setIsChecked],
  );

  useEffect(() => {
    // パラメータからの変更を受け付ける
    setIsChecked(checked ?? false);
  }, [checked]);

  return (
    <>
      <CheckBoxElement
        {...rest}
        ref={ref}
        type="checkbox"
        checked={isChecked}
        readOnly={!onChange}
        onChange={onChange}
      />
      <Flex $alignItems={'center'}>
        {/* チェックボックスのON/OFFの描画 */}
        {checked ?? isChecked ? (
          <CheckBoxIcon size={20} onClick={onClick} />
        ) : (
          <CheckBoxOutlineBlankIcon size={20} onClick={onClick} />
        )}
        {label && label.length > 0 && (
          <Label htmlFor={id} onClick={onClick}>
            <Text>{label}</Text>
          </Label>
        )}
      </Flex>
    </>
  );
};

export default CheckBox;
