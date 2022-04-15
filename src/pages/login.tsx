import styled from '@emotion/styled';
import { COLOR } from '../constants';
import AuthLogin from 'src/components/LoginComponent/loginType/AuthLogin';
import { Container, H1 } from 'src/components/LoginComponent/loginStyles';

export default function Login() {
  return (
    <Container>
      <H1>
        <span>로그인</span>
      </H1>
      <AuthLogin />
    </Container>
  );
}
