import styled from '@emotion/styled';
import { useState } from 'react';
import { MyPageBanner } from '../../components/MyPage/MyPageBanner';
import { StudyList } from '../../components/MyPage/StudyList';
import { MyPageContainer } from '../../components/MyPage/MyPageContainer';

export default function MyPage({ User, Logout }) {
  return (
    <Container>
      <MyPageBanner />
      <TopWrap>
        <MyPageContainer />
      </TopWrap>
      <BottomWrap>
        <StudyList />
      </BottomWrap>
    </Container>
  );
}
const Container = styled.main`
  position: relative;
`;
const TopWrap = styled.section`
  position: absolute;
  padding: 23px;
  top: 0;
  right: 0;
  width: 43%;
`;
const BottomWrap = styled.section`
  width: 50%;
`;
