import styled from '@emotion/styled';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Record } from './Record';
import { TodoList } from './Todo';
import { Notice } from './Notice';
import { Member } from './Member';
import useSWR from 'swr';

export const StudyComponents = ({ studyinfo }: any) => {
  const { data } = useSWR(`/api/study/{}`);
  //
  const [token, setToken] = useState(true);
  useEffect(() => {
    const Token = localStorage.getItem('Token');
    if (Token) {
      getToken(`${Token}`);
    }
  });
  const getToken = (Token: string) => {
    setToken(true);
  };
  //
  return (
    <>
      {token ? (
        <Container>
          <Record />
          <TodoList studyId={studyinfo?.id} />
          <Notice studyId={studyinfo?.id} />
          <Member
            memberslimit={studyinfo?.membersLimit}
            memberlist={studyinfo?.joinMember}
          />
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
              <TodoList studyId={studyinfo?.id} />
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
  margin: 16px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  } ;
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
