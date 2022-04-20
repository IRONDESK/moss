import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useMutation, { IMutation } from 'src/libs/client/useMutation';
import { LoginForm } from '../components/LoginForm';

export const UserLogin = ({ method }: any) => {
  const [login, { loading, data }] = useMutation<IMutation>('/api/users/login');

  console.log(data);
  const errMsg = data?.errorMsg;

  //페이지이동
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
};
