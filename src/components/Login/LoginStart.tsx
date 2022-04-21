import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useMutation from 'src/libs/client/useMutation';
import { LoginForm } from './components/LoginForm';

export const LoginStart = () => {
  const router = useRouter();

  //로그인 옵션
  const [method, setMethod] = useState('userId');
  const onClick = (option: React.FormEvent<HTMLSelectElement>) => {
    setMethod(option.currentTarget.value);
  };

  //api
  const [login, { data, loading }] = useMutation(
    method === 'token' ? '/api/users/token_login' : '/api/users/login',
  );

  //페이지이동
  useEffect(() => {
    if (data?.ok && data?.method === 'userLogin') {
      router.replace('/my-page');
    }
    if (data?.ok && data?.method === 'authLogin') {
      setMethod('token');
    }
    if (data?.ok && data?.method === 'tokenLogin') {
      router.replace('/my-page');
    }
  }, [data, router]);

  //
  return (
    <>
      <select onInput={onClick} value={method}>
        <option value="">로그인 방식을 선택하세요.</option>
        <option value="userId">아이디 비밀번호로 로그인</option>
        <option value="email">이메일 로그인</option>
        <option value="phone">휴대폰 로그인</option>
      </select>
      <LoginForm
        method={method}
        login={login}
        loading={loading}
        errMsg={data?.errorMsg}
      />
    </>
  );
};
