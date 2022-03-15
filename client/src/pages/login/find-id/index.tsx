import styled from '@emotion/styled';
import { Title } from '../../../components/layouts';

export default function findPw() {
  return (
    <>
      <Title title="아이디 찾기" />
      <Container>
        <h1>아이디 찾기</h1>
      </Container>
    </>
  );
}
const Container = styled.div`
  padding: 20px;
  text-align: center;
  h1 {
    font-size: 22px;
  }
`;
