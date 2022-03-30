import styled from '@emotion/styled';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { Member } from './Member';
import { Notice } from './Notice';
import { Record } from './Record';
import { TodoList } from './Todo';

export const StudyComponents = () => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    const Token = localStorage.getItem('Token');
    if (Token) {
      getToken(`${Token}`);
    }
  });
  const getToken = (Token: string) => {
    setToken(true);
    console.log(Token);
  };
  return (
    <>
      {token ? (
        <Container>
          <Record />
          <TodoList />
          <Notice />
          <Member />
        </Container>
      ) : (
        <>
          <Link href="/login" passHref>
            <Button>
              <Img src="/images/header_logo.svg" alt="로고" />
              <p>스터디원이 되어야 상세 정보를 볼 수 있어요!</p>
            </Button>
          </Link>
          <Blur>
            <Container>
              <Record />
              <TodoList />
              <Notice />
              <Member />
            </Container>
          </Blur>
        </>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Blur = styled.div`
  filter: blur(8px);
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  bottom: 100px;
  right: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 290px;
  height: 290px;
  padding: 44px;
  box-sizing: border-box;
  z-index: 10;
  background: #ffffff;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.08);
  border-radius: 100%;
  font-size: 18px;
`;

const Img = styled.img``;
