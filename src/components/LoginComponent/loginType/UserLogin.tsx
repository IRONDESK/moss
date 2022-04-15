import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import { ILoginForm, MutationResult } from 'src/pages/login';
import { LoginForm } from '../Forms';

function UserLogin() {
  //아이디 비번으로 로그인
  const [login, { loading, data, error }] =
    useMutation<MutationResult>('/api/users/login');

  //로그인 useForm
  const { register, handleSubmit } = useForm<ILoginForm>({ mode: 'onBlur' });

  const onValid = (data: ILoginForm) => {
    return login(data);
  };
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
