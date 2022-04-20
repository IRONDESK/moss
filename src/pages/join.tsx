import { Title } from '../components/layouts';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import { FileUpload } from 'src/components/Join/FileUpload';
import { COLOR } from 'src/constants';
import { useRouter } from 'next/router';
import { Error } from 'src/styles/loginStyles';

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
  //Submit
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<joinForm>({
    mode: 'onChange',
  });

  const onValid = (data: joinForm) => {
    join(data);
  };

  //API
  const [join, { loading, data }] = useMutation('/api/users/join');

  //페이지 이동
  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push('/login');
    }
  }, [data, router]);

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
        {loading ? (
          <Loading>로딩중...</Loading>
        ) : (
          <form onSubmit={handleSubmit(onValid)}>
            {data?.error ? <Error>data?.error</Error> : null}
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
        )}
      </Container>
    </>
  );
}
const Loading = styled.div`
  font-size: 40px;
  color: ${COLOR.main};
  text-align: center;
  margin-top: 100px;
`;
const Container = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
