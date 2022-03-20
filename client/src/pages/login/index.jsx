import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import MyPage from '../my-page';
import { LoginForm } from '../../components/Login/LoginForm';

export default function LoginApp() {
  const [name, setName] = useState();

  //fakeUser
  const fakeUser = {
    email: 'moss@111',
    password: '111',
  };

  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState('');

  const Login = (userInfo) => {
    if (
      userInfo.email == fakeUser.email &&
      userInfo.password == fakeUser.password
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
    setUser({ email: '' });
  };
  return (
    <>
      {user.email !== '' ? (
        <MyPage User={userData.user.name} Logout={Logout} />
      ) : (
        <LoginForm Login={Login} errorMsg={error} />
      )}
    </>
  );
}
