'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

const Anchor = styled(Link)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Anchor;
