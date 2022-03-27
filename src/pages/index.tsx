import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { Banner } from '../components/Banner';
import { TitleSearch } from '../components/TitleSearch';
import { StudyCard } from '../components/StudyCard';
import { Scroll } from '../components/Scroll/Scroll';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <TitleSearch />
      <StudyList>
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
      </StudyList>
      <Scroll />
    </>
  );
};

const StudyList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 440px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 0 20px;
  }
`;

export default Home;
