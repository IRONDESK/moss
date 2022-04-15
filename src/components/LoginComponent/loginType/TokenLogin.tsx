import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import { MutationResult } from 'src/pages/login';
import Input from '../Input';

export interface TokenForm {
  token: string;
}

function TokenLogin() {
  const [login, { loading, data, error }] = useMutation<MutationResult>(
    '/api/users/token_session',
  );

  const onTokenValid = (data: TokenForm) => {
    if (loading) return;
    login(data);
  };
  //토큰 useForm
  const {
    register: tokenRegister,
    handleSubmit: tokenHandleSubmit,
    formState: { errors: tokenErrors },
  } = useForm<TokenForm>({ mode: 'onBlur' });

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
      <form onSubmit={tokenHandleSubmit(onTokenValid)}>
        <Input
          register={tokenRegister('token', {
            required: '6자리 숫자 토큰을 입력해야 합니다!',
          })}
          method="token"
          label="토큰으로 인증후 로그인"
          name="token"
          type="number"
          placeholder="6자리 숫자 토큰을 입력하세요."
          errorMsg={tokenErrors.token?.message}
        />
        <button>{loading ? '로딩중...' : '토큰으로 로그인'}</button>
      </form>
    </>
  );
}

export default TokenLogin;
