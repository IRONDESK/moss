import React from 'react';
import styled from '@emotion/styled';
import { COLOR } from 'src/constants';

type Props = {
  children: React.ReactNode;
};

export default function Title({ children }: Props) {
  return <H>{children}</H>;
}

export const H = styled.h2`
  position: relative;
  padding-bottom: 20px;
  font-size: 30px;
  text-align: center;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 48px;
    height: 4px;
    transform: translateX(-50%);
    margin: 0 auto;
    background: ${COLOR.main};
  }
`;
