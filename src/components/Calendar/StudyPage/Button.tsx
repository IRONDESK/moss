import React from 'react';
import moment, { Moment as MomentTypes } from 'moment';
import styled from '@emotion/styled';
import { COLOR } from 'src/constants';

export const Button = ({ children, type }) => {
  return (
    <>
      <Btn type={type}>{children}</Btn>
    </>
  );
};

const Btn = styled.button`
  width: 100%;
  height: 48px;
  background: ${COLOR.main};
  font-size: 16px;
  color: #fff;
  &:disabled {
    color: ${COLOR.grayText};
    background: ${COLOR.gray};
  }
`;
