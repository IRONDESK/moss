import Link from 'next/link';
import styled from '@emotion/styled';

const Container = styled.ul`
  padding: 6px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li > a {
    font-size: 12px;
    color: #767676;
    opacity: 0.8;
    display: flex;
    align-items: center;
    transition: color 0.5s ease-in-out;
    &:hover {
      color: #34c88a;
    }
  }
`;
const Slash = styled.div`
  border-left: 1px solid #c4c4c4;
  height: 8px;
`;
function LoginLink() {
  return (
    <div>
      <Container>
        <li>
          <Link href="/login/find_id">아이디 찾기</Link>
        </li>
        <Slash />
        <li>
          <Link href="/login/find_pw">비밀번호 찾기</Link>
        </li>
        <Slash />
        <li>
          <Link href="/join">회원가입</Link>
        </li>
      </Container>
    </div>
  );
}

export default LoginLink;
