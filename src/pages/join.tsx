import { Title } from '../components/layouts';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import { FileUpload } from 'src/components/Join/FileUpload';
import { COLOR } from 'src/constants';

interface joinForm {
  email?: string;
  phone?: string;
  userId?: string;
  password?: string;
  password2?: string;
  username?: string;
  location?: string;
  avatar?: string;
}

export default function Join() {
  //fecth를 위한 mutation Hook // 데이터 -> 백엔드(url)로 전송
  const [join, { loading, data, error }] = useMutation('/api/users/join');
  console.log(loading, data, error); //백엔드 데이터 확인!

  //useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<joinForm>({
    mode: 'onBlur',
  });

  //데이터가 useMutation으로 전송 ->
  //handleSubmit 조건 달성시 onValid 함수실행
  const onValid = (data: joinForm) => {
    join(data);
  };
  //handleSubmit조건 실패시 InValid 함수실행
  const InValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  //프로필사진 파일 업로드
  const [isImage, setIsImage] = useState(false);
  const getIsImage = (img: boolean) => {
    setIsImage(img);
  };
  return (
    <>
      <Title title="회원가입" />
      <Container>
        <h1>
          <span>회원가입</span>
        </h1>
        <form onSubmit={handleSubmit(onValid, InValid)}>
          <FileUpload getIsImage={getIsImage} register={register('avatar')} />
          <input
            {...register('userId', { required: '아이디가 필요합니다!' })}
            name="userId"
            type="text"
            placeholder="아이디"
          />
          <span>{errors.userId?.message}</span>
          <input
            {...register('password', { required: '비밀번호가 필요합니다!' })}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          <span>{errors.password?.message}</span>
          <input
            {...register('password2', { required: '비밀번호가 필요합니다!' })}
            name="password2"
            type="password"
            placeholder="비밀번호 재확인"
          />
          <span>{errors.password2?.message}</span>
          <input
            {...register('email', { required: '이메일이 필요합니다!' })}
            name="email"
            type="email"
            placeholder="이메일"
          />
          <span>{errors.email?.message}</span>
          <input
            {...register('phone', { required: '전화번호가 필요합니다!' })}
            name="phone"
            type="number"
            placeholder="전화번호"
          />
          <span>{errors.phone?.message}</span>
          <input
            {...register('username', { required: '이름이 필요합니다!' })}
            name="username"
            type="text"
            placeholder="이름"
          />
          <span>{errors.username?.message}</span>
          <input
            {...register('location', { required: '거주지 필요합니다!' })}
            name="location"
            type="text"
            placeholder="거주지"
          />
          <span>{errors.location?.message}</span>

          <button type="submit">{loading ? '로딩중...' : '회원가입'}</button>
        </form>
      </Container>
    </>
  );
}
const Container = styled.section`
  padding: 100px 0;
  text-align: center;
  h1 {
    display: flex;
    justify-content: center;
    width: 60px;
    font-size: 30px;
    margin: 10px auto;
    border-bottom: 4px solid ${COLOR.main};
    position: relative;
    span {
      width: 200px;
      position: absolute;
      bottom: 16px;
      text-align: center;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    input,
    button,
    span {
      margin: 0 auto;
      width: 30%;
    }
    input,
    button {
      margin: 0 auto;
      width: 30%;
      padding: 10px 20px;
      height: 48px;
      width: 340px;
      color: ${COLOR.grayText};
    }
    input {
      &::placeholder {
        color: ${COLOR.grayText};
      }
      border: 1px solid ${COLOR.gray};
      font-size: 14px;
    }
    button {
      border: none;
      font-size: 16px;
      background-color: ${COLOR.gray};
    }
    span {
      text-align: left;
      font-size: 12px;
      color: ${COLOR.error};
    }
  }
`;
