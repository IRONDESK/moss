import { Title } from '../components/layouts';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface joinForm {
  email?: string;
  phone?: string;
  userId?: string;
  password?: string;
  password2?: string;
  username?: string;
  location?: string;
}

export default function Join() {
  const { register, handleSubmit } = useForm<joinForm>({
    mode: 'onBlur',
  });
  const onValid = (data: joinForm) => {
    console.log('회원가입 성공!', data);
  };

  return (
    <>
      <Title title="회원가입" />
      <Container>
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            {...register('userId', { required: true })}
            name="userId"
            type="text"
            placeholder="아이디"
          />
          <input
            {...register('password', { required: true })}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          <input
            {...register('password2', { required: true })}
            name="password2"
            type="password"
            placeholder="비밀번호 재확인"
          />
          <input
            {...register('username', { required: true })}
            name="username"
            type="text"
            placeholder="이름"
          />
          <input
            {...register('location', { required: true })}
            name="location"
            type="text"
            placeholder="거주지"
          />
          <input
            {...register('email', { required: true })}
            name="email"
            type="email"
            placeholder="이메일"
          />
          <input type="submit" value="회원가입" />
        </form>
      </Container>
    </>
  );
}
const Container = styled.section`
  /* background-color: blue; */
  padding: 10px;
  text-align: center;
  h1 {
    font-size: 30px;
    margin: 10px 0;
  }
  form {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    input {
      width: 30%;
      padding: 10px 20px;
    }
  }
`;
