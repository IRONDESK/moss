import styled from '@emotion/styled';
import { useState } from 'react';
import { IStudyResponse } from 'src/types/study';
import useSWR from 'swr';
import { StudyCard } from '../StudyCard';
import { CreateStudy } from './CreateStudy';

export const StudyList = () => {
  const [modal, setModal] = useState(false);
  const { data } = useSWR<IStudyResponse>(`api/study/my_study`);
  //내가 만든 스터디를 화면에 표시합니다.
  //
  return (
    <MyPageStudy>
      <Title className="title">참여 중인 스터디</Title>
      <StudyLists>
        {data?.myStudy?.map((studyInfo) => (
          <StudyCard
            bgImg={`https://imagedelivery.net/akzZnR6sxZ1bwXZp9XYgsg/${studyInfo?.image}/public`}
            key={studyInfo.id}
            category={studyInfo.category}
            title={studyInfo.studyName}
            hashtag={studyInfo.tag}
            members={studyInfo.membersLimit}
            membersLimit={studyInfo.membersLimit}
            link={studyInfo.chatLink}
            studyId={studyInfo.id}
            leader={Boolean(data?.ok)}
          />
        ))}
      </StudyLists>
      <CreateStudy modal={modal} setModal={setModal} />
    </MyPageStudy>
  );
};
const MyPageStudy = styled.section``;

const Title = styled.h2`
  display: flex;
  margin: 67px 0 25px 0;
  font-size: 24px;
  &:before {
    content: '';
    display: block;
    margin-right: 11px;
    width: 5px;
    height: 28px;
    background: url('./images/icons/titleBar.png');
  }
`;

const StudyLists = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 260px);
  gap: 24px;
`;
