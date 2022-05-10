import styled from '@emotion/styled';
import { StudyCard } from '../StudyCard';
import { COLOR } from '../../constants';
import { useState } from 'react';

export const SearchList = ({ data }: any) => {
  //존재하는 모든 스터디를 화면에 표시합니다.
  const [showItem, setShowItem] = useState<number>(8);
  const [noMoreMsg, setNoMoreMsg] = useState<boolean>(false);

  const ListMore = () => {
    if (data?.length > showItem) {
      setShowItem(showItem * 2);
    } else {
      setNoMoreMsg(true);
    }
  };
  //
  return (
    <>
      <List>
        {data?.slice(0, showItem).map((studyInfo: any) => (
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
      <NoMore>{noMoreMsg ? '더 이상 불러올 스터디가 없습니다' : null}</NoMore>
      <More onClick={ListMore}>더 보기</More>
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

const NoMore = styled.p`
  margin: 18px 0;
  text-align: center;
  color: ${COLOR.grayText};
`;

const More = styled.button`
  position: relative;
  left: 50%;
  margin: 18px 0;
  width: 120px;
  height: 36px;
  font-size: 16px;
  font-weight: 700;
  color: ${COLOR.main};
  border: 2px solid ${COLOR.main};
  border-radius: 40px;
  transform: translateX(-50%);
  &:hover {
    background-color: ${COLOR.main};
    color: ${COLOR.white};
  }
`;
