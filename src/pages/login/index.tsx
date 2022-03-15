import { useState } from 'react';
import styled from '@emotion/styled';
import MyPage from '../my-page';
import { LoginForm } from '../../components/Login/LoginForm';

interface UserInfo {
  email: string;
  password: string | number;
}

export default function LoginApp() {
  //가상유저 템플릿
  const admnUser = {
    email: 'moss@111',
    password: '111',
  };
  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState('');

  const Login = (userInfo: UserInfo) => {
    if (
      userInfo.email == admnUser.email &&
      userInfo.password == admnUser.password
    ) {
      setUser({
        email: userInfo.email,
      });
    } else {
      setError(`아이디또는 비밀번호를 잘못 입력했습니다.
      입력하신 내용을 다시 확인해주세요.`);
    }
  };
  const Logout = () => {
    console.log('logout');
    setUser({ email: '' });
  };
  return (
    <LoginCont>
      {user.email !== '' ? (
        <MyPage User={user.email} Logout={Logout} />
      ) : (
        <LoginForm Login={Login} errorMsg={error} />
      )}
    </LoginCont>
  );
}
const LoginCont = styled.section``;
