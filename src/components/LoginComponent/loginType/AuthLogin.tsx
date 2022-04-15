import React, { useState } from 'react';
import useMutation from 'src/libs/client/useMutation';
import { MutationResult } from 'src/pages/login';
import { EmailLoginForm, PhoneLoginForm } from '../Forms';
import TokenLogin from './TokenLogin';
import UserLogin from './UserLogin';

function AuthLogin() {
  //select method
  const [method, setMethod] = useState('userId');
  const onClick = (selectMethod: string) => {
    setMethod(selectMethod);
  };
  //API
  const [login, { loading, data }] = useMutation<MutationResult>(
    '/api/users/tokenLogin',
  );
  //
  return (
    <>
      {data?.ok ? (
        <TokenLogin />
      ) : (
        <>
          <section>
            <input
              onClick={() => onClick('userId')}
              type="button"
              value="아이디 / 비밀번호"
            />
            <input
              onClick={() => onClick('email')}
              type="button"
              value="이메일"
            />
            <input
              onClick={() => onClick('phone')}
              type="button"
              value="휴대폰"
            />
          </section>

          {method === 'userId' ? (
            <UserLogin />
          ) : method === 'email' ? (
            <EmailLoginForm login={login} loading={loading} />
          ) : method === 'phone' ? (
            <PhoneLoginForm login={login} loading={loading} />
          ) : null}
        </>
      )}
    </>
  );
}
export default AuthLogin;
