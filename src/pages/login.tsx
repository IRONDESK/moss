import { Container, H1 } from 'src/styles/loginStyles';
import { LoginLink } from 'src/components/Login/components/LoginLink';
import { LoginStart } from 'src/components/Login/LoginStart';

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
