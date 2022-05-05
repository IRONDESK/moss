import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { COLOR } from '../../constants';
import { SpanProps } from 'src/types/Login';

export const StayBtn = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const onClick = () => {
    setLoggedIn(!loggedIn);
  };
  return (
    <Container>
      <button type="button" onClick={onClick}>
        {loggedIn ? (
          <img src="/images/checked.svg" alt="로그인 상태유지" />
        ) : (
          <img src="/images/check.svg" alt="로그인 상태 X" />
        )}
      </button>
      {loggedIn ? (
        <Span txtColor={COLOR.main}>로그인 상태유지</Span>
      ) : (
        <Span txtColor={COLOR.grayText}>로그인 상태유지</Span>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-right: 5px;
  }
`;
const Span = styled.div<SpanProps>`
  transition: color 0.3s ease-in-out;
  font-size: 13px;
  line-height: 15px;
  color: ${(props) => props.txtColor};
`;
