import { Container, H1 } from 'src/styles/loginStyles';
import { LoginLink } from 'src/components/Login/components/LoginLink';
import { AuthLogin } from 'src/components/Login/LoginMethod/AuthLogin';

export default function Login() {
  return (
    <Container>
      <H1>
        <span>로그인</span>
      </H1>
      <AuthLogin />
      <LoginLink />
    </Container>
  );
}
