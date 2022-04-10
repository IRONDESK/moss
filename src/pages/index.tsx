import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { Banner } from '../components/Banner';
import { TitleSearch } from '../components/TitleSearch';
import { StudyCard } from '../components/StudyCard';
import { Scroll } from '../components/Scroll/Scroll';
import useLoggedIn from 'src/libs/client/useLoggedIn';

const Home: NextPage = () => {
  const data = useLoggedIn();
  console.log(data);
  return (
    <>
      <Backgroud />
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

const Backgroud = styled.div`
  background: #f0efed;
  width: 100%;
  height: 600px;
  position: absolute;
  left: 0;
  z-index: -1;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    position: absolute;
    top: -30%;
    left: 60%;
  }
`;

export default Home;
