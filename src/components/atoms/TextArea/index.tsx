import React, { useCallback, useState } from 'react';
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * 最小行数
   */
  minRows?: number;
  /**
   * 最大行数
   */
  maxRows?: number;
  /**
   * バリデーションエラーフラグ
   */
  hasError?: boolean;
}

const StyledTextArea = styled.textarea<{ $hasError?: boolean }>`
  color: ${({ theme }) => theme.colors.inputText};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.border};
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  padding: 9px 12px 10px 12px;
  resize: none;
  overflow: auto;
  height: auto;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

/**
 * テキストエリア
 */
const TextArea = ({
  rows = 5,
  minRows = 5,
  maxRows = 10,
  children,
  hasError,
  onChange,
  ...rest
}: TextAreaProps) => {
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows));

  console.assert(
    !(rows < minRows),
    'TextArea: 行数は minRows より大きくなければならない。',
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaLineHeight = 24;
      const previousRows = e.target.rows;

      e.target.rows = minRows; // 行数のリセット

      // 現在の行数
      const currentRows = Math.floor(
        e.target.scrollHeight / textareaLineHeight,
      );

      if (currentRows === previousRows) {
        e.target.rows = currentRows;
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows;
        e.target.scrollTop = e.target.scrollHeight;
      }

      // 最大を超えないように行数をセット
      setTextareaRows(currentRows < maxRows ? currentRows : maxRows);
      onChange && onChange(e);
    },
    [onChange, minRows, maxRows],
  );

  return (
    <StyledTextArea
      $hasError={hasError}
      onChange={handleChange}
      aria-label={rest.placeholder}
      rows={textareaRows}
      {...rest}
    >
      {children}
    </StyledTextArea>
  );
};

export default TextArea;
