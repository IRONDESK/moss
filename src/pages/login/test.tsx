import styled from '@emotion/styled';
import React, { useState } from 'react';

export default function Test() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onNameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setName(value);
  };
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setEmail(value);
  };
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setPassword(value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, email, password);
  };

  return (
    <>
      <H1>로그인</H1>
      <JoinForm onSubmit={handleSubmit}>
        <input
          required
          onChange={onNameChange}
          value={name}
          type="text"
          placeholder="이름"
        />
        <input
          required
          onChange={onEmailChange}
          value={email}
          type="text"
          placeholder="이메일"
        />
        <input
          required
          onChange={onPasswordChange}
          value={password}
          type="password"
          placeholder="비밀번호"
        />
        <button type="button">로그인 상태유지</button>
        <input type="submit" value="회원가입" />
      </JoinForm>
    </>
  );
}

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  gap: 10px;
`;
