import styled from '@emotion/styled';
import React from 'react';
import { StudyCard } from './StudyCard';

export const StudyList = () => {
  return (
    <>
      <List>
        <StudyCard
          category="카테고리"
          title="React 강의 듣기"
          hashtag="#리액트 #프론트엔드"
          member={1}
          link="#"
          leader={true}
        />
        <StudyCard
          category="카테고리"
          title="React 강의 듣기"
          hashtag="#리액트 #프론트엔드"
          member={1}
          link="#"
          leader={false}
        />
        <StudyCard
          category="카테고리"
          title="React 강의 듣기"
          hashtag="#리액트 #프론트엔드"
          member={1}
          link="#"
          leader={false}
        />
        <StudyCard
          category="카테고리"
          title="React 강의 듣기"
          hashtag="#리액트 #프론트엔드"
          member={1}
          link="#"
          leader={false}
        />
        <StudyCard
          category="카테고리"
          title="React 강의 듣기"
          hashtag="#리액트 #프론트엔드"
          member={1}
          link="#"
          leader={false}
        />
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
