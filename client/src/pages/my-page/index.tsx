import styled from '@emotion/styled';
import { Title } from '../../components/layouts';

export default function MyPage({ User, Logout }) {
  return (
    <Container>
      <Title title="마이페이지" />
      <h1>Welcome to My Page</h1>
      <h1>할수있다! {User}</h1>
      <button onClick={Logout}>로그아웃</button>
    </Container>
  );
}
const Container = styled.div`
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
    width: 100px;
    font-size: 14px;
    line-height: 14px;
  }
`;
