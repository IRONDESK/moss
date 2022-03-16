import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { Title } from '../../../components/layouts';

function foundId() {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  return (
    <>
      <Title title="아이디 찾기" />
      <Container>
        <h1>찾은 아이디: {id}</h1>
      </Container>
    </>
  );
}
export default foundId;

const Container = styled.div`
  padding: 20px;
  text-align: center;
  h1 {
    font-size: 22px;
  }
`;
