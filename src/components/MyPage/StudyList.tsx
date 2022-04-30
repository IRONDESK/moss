import styled from '@emotion/styled';
import { Study } from '@prisma/client';
import { useState } from 'react';
import useSWR from 'swr';
import { StudyCard } from '../StudyCard';
import { CreateStudy } from './CreateStudy';

interface IStudyResponse {
  ok: boolean;
  createdStudy: Study[];
}

export const StudyList = () => {
  const [modal, setModal] = useState(false);

  //GET
  const { data } = useSWR<IStudyResponse>(`api/study/created_study`);
  //
  return (
    <MyPageStudy>
      <Title className="title">참여 중인 스터디</Title>
      <StudyLists>
        {data?.createdStudy.map((studyInfo) => (
          <StudyCard
            bgImg={`https://imagedelivery.net/akzZnR6sxZ1bwXZp9XYgsg/${studyInfo?.image}/avatar`}
            key={studyInfo.id}
            category={studyInfo.category}
            title={studyInfo.studyName}
            hashtag={studyInfo.tag}
            members={studyInfo.membersLimit}
            membersLimit={studyInfo.membersLimit}
            link={studyInfo.chatLink}
            leader={true}
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
