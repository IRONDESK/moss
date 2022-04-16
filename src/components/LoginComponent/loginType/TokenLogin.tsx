import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useMutation, { IMutation } from 'src/libs/client/useMutation';
import { LoginForm } from '../Forms';

export interface TokenForm {
  token: string;
}

function TokenLogin({ method }: any) {
  const [login, { loading, data }] = useMutation<IMutation>(
    '/api/users/token_session',
  );
  const errMsg = data?.errorMsg;

  //페이지 이동
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
        errMsg={errMsg}
        login={login}
        loading={loading}
      />
    </>
  );
}

export default TokenLogin;
