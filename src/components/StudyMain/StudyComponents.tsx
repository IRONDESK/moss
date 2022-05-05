import styled from '@emotion/styled';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TodoList } from './Todo';
import { Notice } from './Notice';
import { Member } from './Member';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import useUser from 'src/libs/client/useUser';
import { IStudyResponse } from 'src/types/study';
import { StudyCalendarWrap } from '../Calendar/StudyPage/StudyCalendarWrap';

export const StudyComponents = () => {
  const router = useRouter();
  const { studyId } = router.query;
  const { data } = useSWR<IStudyResponse>(`/api/study/${studyId}`);

  //내가 만든 스터디 이거나 (===loggedInUser의 고유id와 study안의 user의 고유id가 일치!)
  // 또는 신청한 스터디이면 UI표시 (joinMember는 후작업)

  //1. 내가 만든 스터디인 경우
  const [myStudy, setMyStudy] = useState(false);
  const { loggedInUser } = useUser();
  useEffect(() => {
    if (loggedInUser?.id === data?.study?.user?.id) {
      setMyStudy(true);
    }
  }, [data]);

  //
  return (
    <>
      {myStudy ? (
        <Container>
          <TodoList studyId={data?.study?.id} />
          <Notice studyId={data?.study?.id} />
          <Member
              leader={data?.study?.user}
              memberlist={data?.study?.joinMember}
              memberslimit={data?.study?.membersLimit}
          />
          <StudyCalendarWrap />
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
              <TodoList studyId={data?.study?.id} />
              <Notice studyId={data?.study?.id}/>
              <Member
                leader={data?.study?.user}
                memberlist={data?.study?.joinMember}
                memberslimit={data?.study?.membersLimit}
              />
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
