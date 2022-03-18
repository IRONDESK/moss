import styled from '@emotion/styled';
import { useState } from 'react';
import { Title } from '../../components/layouts';
import { JoinStudyModal } from '../../components/JoinStudy/JoinStudyModal';

export default function MyPage({ User, Logout }) {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal((prev) => !prev);
  return (
    <Container>
      <Title title="마이페이지" />
      <h1>Welcome to My Page</h1>
      <h1>할수있다! {User}</h1>
      <button>로그아웃</button>
      <button onClick={openModal}>스터디 신청</button>
      <JoinStudyModal modal={modal} setModal={setModal} />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 20px;
  }
  button {
    border: 1px solid #e7e6e2;
    padding: 9px 20px;
    font-size: 14px;
    line-height: 14px;
  }
`;
