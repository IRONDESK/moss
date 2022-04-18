import React, { useState } from 'react';
import useMutation, { IMutation } from 'src/libs/client/useMutation';
import { LoginForm } from '../components/LoginForm';
import TokenLogin from './TokenLogin';
import UserLogin from './UserLogin';

export const AuthLogin = () => {
  //select method
  const [method, setMethod] = useState('userId');
  const onClick = (option: React.FormEvent<HTMLSelectElement>) => {
    setMethod(option.currentTarget.value);
  };
  //API
  const [login, { loading, data }] = useMutation<IMutation>(
    '/api/users/authLogin',
  );

  //
  return (
    <>
      {data?.ok ? (
        <TokenLogin method="token" />
      ) : (
        <>
          <select onInput={onClick} value={method}>
            <option value="">로그인 방식을 선택하세요.</option>
            <option value="userId">아이디 비밀번호로 로그인</option>
            <option value="email">이메일 로그인</option>
            <option value="phone">휴대폰 로그인</option>
          </select>

          {method === 'userId' ? (
            <UserLogin method={method} />
          ) : method === 'email' || method === 'phone' ? (
            <LoginForm method={method} login={login} loading={loading} />
          ) : null}
        </>
      )}
    </>
  );
};
