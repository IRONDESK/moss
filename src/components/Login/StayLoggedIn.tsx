import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';

function StayLoggedIn() {
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
        <Span txtColor="#34C88A">로그인 상태유지</Span>
      ) : (
        <Span txtColor="#767676">로그인 상태유지</Span>
      )}
    </Container>
  );
}
export default StayLoggedIn;
const Container = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  button {
    margin-right: 5px;
  }
`;
const Span = styled.div`
  transition: color 0.3s ease-in-out;
  font-size: 13px;
  line-height: 15px;
  color: ${(props) => props.txtColor};
`;
