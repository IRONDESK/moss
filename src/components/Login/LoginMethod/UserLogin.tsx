import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useMutation, { IMutation } from 'src/libs/client/useMutation';
import { LoginForm } from '../components/LoginForm';

function UserLogin({ method }: any) {
  //아이디 비번으로 로그인
  const [login, { loading, data, error: serverError }] =
    useMutation<IMutation>('/api/users/login');

  const errMsg = data?.errorMsg;
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
      <LoginForm
        method={method}
        login={login}
        loading={loading}
        errMsg={errMsg}
      />
    </>
  );
}

export default UserLogin;
