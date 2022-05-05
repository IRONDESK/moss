import { Container, H1 } from 'src/styles/components';
import { LoginStart } from 'src/components/Login/LoginStart';
import { LoginLink } from 'src/components/Login/LoginLink';

export default function Login() {
  return (
    <Container>
      <H1>
        <span>로그인</span>
      </H1>
      <LoginStart />
      <LoginLink />
    </Container>
  );
}
