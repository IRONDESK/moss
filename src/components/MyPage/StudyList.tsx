import styled from '@emotion/styled';
import { useState } from 'react';
import { StudyCard } from '../StudyCard';
import { StudyButton } from './StudyButton';

export const StudyList = () => {
  const [modal, setModal] = useState(false);
  return (
    <MyPageStudy>
      <Title className="title">참여 중인 스터디</Title>
      <StudyLists>
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
          leader={true}
        />
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
          leader={true}
        />{' '}
      </StudyLists>
      <StudyButton modal={modal} setModal={setModal} />
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
