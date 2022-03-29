import { Title } from '../components/layouts';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';

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
  //fecth를 위한 mutation Hook
  const [join, { loading, data, error }] = useMutation('/api/users/join');

  //useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<joinForm>({
    mode: 'onBlur',
  });
  const onValid = (data: joinForm) => {
    join(data);
  };
  console.log(loading, data, error);
  return (
    <>
      <Title title="회원가입" />
      <Container>
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            {...register('userId', { required: '아이디가 필요합니다!' })}
            name="userId"
            type="text"
            placeholder="아이디"
          />
          {errors.userId?.message}
          <input
            {...register('password', { required: '비밀번호가 필요합니다!' })}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          {errors.password?.message}
          <input
            {...register('password2', { required: '비밀번호가 필요합니다!' })}
            name="password2"
            type="password"
            placeholder="비밀번호 재확인"
          />
          {errors.password2?.message}
          <input
            {...register('username', { required: '이름이 필요합니다!' })}
            name="username"
            type="text"
            placeholder="이름"
          />
          {errors.username?.message}
          <input
            {...register('location', { required: '거주지 필요합니다!' })}
            name="location"
            type="text"
            placeholder="거주지"
          />
          {errors.location?.message}
          <input
            {...register('email', { required: '이메일이 필요합니다!' })}
            name="email"
            type="email"
            placeholder="이메일"
          />
          {errors.email?.message}
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
