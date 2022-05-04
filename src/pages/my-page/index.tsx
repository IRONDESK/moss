import styled from '@emotion/styled';
import { MyPageBanner } from '../../components/MyPage/MyPageBanner';
import { StudyList } from '../../components/MyPage/StudyList';
import { MyPageContainer } from '../../components/MyPage/MyPageContainer';

export default function MyPage() {
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
  padding: 24px;
  display: flex;
  flex-direction: row-reverse;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const TopWrap = styled.section`
  position: relative;
  flex-basis: 472px;
  flex-shrink: 0;
`;
const BottomWrap = styled.section`
  flex-grow: 1;
  margin-top: 320px;

  @media (max-width: 1024px) {
    margin-top: 0px;
  }
`;
