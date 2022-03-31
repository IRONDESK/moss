import styled from '@emotion/styled';
import { useState } from 'react';
import { MyPageBanner } from '../../components/MyPage/MyPageBanner';
import { MyPageContainer } from '../../components/MyPage/MyPageContainer';

export default function MyPage({ User, Logout }) {
  return (
    <Container>
      <MyPageBanner />
      <MyPageContainer />
    </Container>
  );
}
const Container = styled.div``;
