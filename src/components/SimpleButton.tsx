'use client';
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

const StyledButton = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 4px;
  padding: 8px;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

type ButtonProps = {
  label: string;
  color?: string;
  onClick?: () => void;
};

export const SimpleButton = ({
  label,
  color = '#3700ff',
  onClick = () => {},
}: ButtonProps) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
