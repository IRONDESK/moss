import { Title } from '../components/layouts';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import { FileUpload } from 'src/components/Join/FileUpload';
import { COLOR } from 'src/constants';
import { useRouter } from 'next/router';
import {
  Btn,
  Container,
  Error,
  H1,
  InputWrap,
} from 'src/styles/componentsStyles';

import JoinInput from 'src/components/Join/components/JoinInput';
import { joinForm } from 'src/types/join';

export default function Join() {
  //Submit
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<joinForm>({
    mode: 'onSubmit',
  });

  const onValid = (data: joinForm) => {
    join(data);
    console.log(data);
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
        <H1>
          <span>회원가입</span>
        </H1>
        {loading ? (
          <span>로딩중...</span>
        ) : (
          <>
            <form onSubmit={handleSubmit(onValid)}>
              <InputWrap>
                <JoinInput
                  register={register('username', {
                    required: '이름이 필요합니다.',
                  })}
                  required={false}
                  name="username"
                  type="text"
                  placeholer="이름을 입력해주세요."
                ></JoinInput>

                {errors.username && <Error>{errors.username.message}</Error>}

                <JoinInput
                  register={register('userId', {
                    required: '아이디가 필요합니다.',
                  })}
                  required={false}
                  name="userId"
                  type="text"
                  placeholer="아이디를 입력해주세요."
                ></JoinInput>

                {errors.userId && <Error>{errors.userId.message}</Error>}

                <JoinInput
                  register={register('password', {
                    required: '비밀번호가 필요합니다.',
                  })}
                  required={false}
                  name="password"
                  type="password"
                  placeholer="비밀번호를 입력해주세요."
                ></JoinInput>

                {errors.password && <Error>{errors.password.message}</Error>}

                <JoinInput
                  register={register('confirmPassword', {
                    required: '재확인 비밀번호가 필요합니다.',
                  })}
                  required={false}
                  name="confirmPassword"
                  type="password"
                  placeholer="비밀번호를 다시한번 입력해주세요."
                ></JoinInput>

                {errors.confirmPassword && (
                  <Error>{errors.confirmPassword.message}</Error>
                )}

                <JoinInput
                  register={register('email')}
                  required={false}
                  name="email"
                  type="text"
                  placeholer="이메일을 입력해주세요."
                ></JoinInput>

                {errors.email && <Error>{errors.email.message}</Error>}

                <JoinInput
                  register={register('phone')}
                  required={false}
                  name="phone"
                  type="text"
                  placeholer="휴대폰 번호를 입력해주세요."
                ></JoinInput>

                {errors.phone && <Error>{errors.phone.message}</Error>}

                <JoinInput
                  register={register('location')}
                  required={false}
                  name="location"
                  type="text"
                  placeholer="위치를 입력해주세요."
                ></JoinInput>

                {errors.location && <Error>{errors.location.message}</Error>}

                <Btn>{loading ? '로딩중...' : '회원가입'}</Btn>
              </InputWrap>
            </form>
          </>
        )}
      </Container>
    </>
  );
}
