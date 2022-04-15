import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useMutation, { IMutation } from 'src/libs/client/useMutation';
import { LoginForm } from '../Forms';

function UserLogin() {
  //아이디 비번으로 로그인
  const [login, { loading, data, error }] =
    useMutation<IMutation>('/api/users/login');

  //
  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push('/my-page');
    }
  }, [data, router]);
  //
  return (
    <>
      <LoginForm login={login} loading={loading} />
    </>
  );
}

export default UserLogin;
