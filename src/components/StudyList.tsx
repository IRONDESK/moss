import styled from '@emotion/styled';
import { StudyCard } from './StudyCard';
import useSWR from 'swr';
import { IStudyResponse } from 'src/types/study';

export const StudyList = () => {
  const { data } = useSWR<IStudyResponse>(`/api/study/total_study`);
  //존재하는 모든 스터디를 화면에 표시합니다.
  //
  return (
    <>
      <List>
        {data?.totalStudies?.map((studyInfo) => (
          <StudyCard
            bgImg={`https://imagedelivery.net/akzZnR6sxZ1bwXZp9XYgsg/${studyInfo?.image}/public`}
            key={studyInfo.id}
            studyId={studyInfo.id}
            category={studyInfo.category}
            title={studyInfo.studyName}
            hashtag={studyInfo.tag}
            members={studyInfo.membersLimit}
            membersLimit={studyInfo.membersLimit}
            link={studyInfo.chatLink}
            leader={Boolean(data?.ok)}
          />
        ))}
      </List>
    </>
  );
};

const List = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 0 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 0 20px;
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 0 20px;
  }
`;
