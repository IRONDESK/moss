import AuthLogin from 'src/components/LoginComponent/loginType/AuthLogin';
import { Container, H1 } from 'src/components/LoginComponent/loginStyles';
import { LoginLink } from 'src/components/LoginComponent/LoginLink';

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
