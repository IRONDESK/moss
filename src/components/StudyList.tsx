import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { StudyCard } from './StudyCard';
import getInfo from 'src/pages/api/study/getInfo';

interface DataProps {
  studyId: number;
  studyName: string;
  leader?: number;
  category?: string;
  tag?: string;
  membersLimit?: number;
}

export const StudyList = () => {
  const [data, setData] = useState<any>();
  const res = getInfo("many");
  useEffect(() => {
      setData(res);
      console.log(data);
  }, [res]);

  return (
    <>
      <List>
        { data?.map( (value: DataProps) => { return (
        <StudyCard
          category={value.category}
          title={value.studyName}
          hashtag={value.tag}
          members={2}
          membersLimit={value.membersLimit}
          link={`/study/` + value.studyId}
          leader={true}
        />
        )}) }
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
