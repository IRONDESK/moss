import { Title } from '../components/layouts';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import { useRouter } from 'next/router';
import {
  Btn,
  Container,
  Error,
  H1,
  InputWrap,
  Message,
} from 'src/styles/componentsStyles';
import JoinInput from 'src/components/Join/components/JoinInput';
import { IJoinResponse, joinForm } from 'src/types/join';

export default function Join() {
  //POST
  const [join, { loading, data }] =
    useMutation<IJoinResponse>('/api/users/join');

  //Submit
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<joinForm>({
    mode: 'onSubmit',
  });

  const onValid = ({
    username,
    userId,
    password,
    confirmPassword,
    email,
    phone,
    location,
  }: joinForm) => {
    if (loading) return;
    if (phone) {
      phone = phone.replace(/-/g, '');
    }
    if (password !== confirmPassword) {
      setError('confirmPassword', { message: '비밀번호가 일치하지 않습니다.' });
    } else {
      //
      join({
        username,
        userId,
        password,
        confirmPassword,
        email,
        phone,
        location,
      });
    }
  };

  //페이지 이동
  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push('/join');
    }
  }, [data, router]);

  //프로필 사진 업로드

  //
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
                {data?.message && <Message>{data?.message}</Message>}
                {data?.errorMessage && <Error>{data?.errorMessage}</Error>}
                <JoinInput
                  register={register('username', {
                    setValueAs: (value) => value.split(' ').join(''),
                    // required: '이름이 필요합니다.',
                    minLength: {
                      value: 2,
                      message: '이름은 최소 2자리 이상이여야 합니다.',
                    },
                    maxLength: {
                      value: 15,
                      message: '이름의 최대길이는 15자리 입니다.',
                    },
                    pattern: {
                      value: /^[a-zA-Zㄱ-힣 ]{2,15}$/,
                      message:
                        '이름은 기호를 제외한 한글 또는 영어를 사용할 수 있습니다.',
                    },
                  })}
                  required={false}
                  name="username"
                  type="text"
                  placeholer="이름을 입력해주세요."
                />

                {errors.username && <Error>{errors.username.message}</Error>}

                <JoinInput
                  register={register('userId', {
                    // required: '아이디가 필요합니다.',
                    pattern: {
                      value: /^[a-z]+[a-z0-9]{5,19}$/g,
                      message:
                        '아이디는 기호를 제외한 영문자 또는 6~20자리 숫자를 포함해야합니다.',
                    },
                  })}
                  required={false}
                  name="userId"
                  type="text"
                  placeholer="아이디를 입력해주세요."
                />

                {errors.userId && <Error>{errors.userId.message}</Error>}

                <JoinInput
                  register={register('password', {
                    // required: '비밀번호가 필요합니다.',
                    minLength: {
                      value: 8,
                      message: '비밀번호는 최소 8자리여야 합니다.',
                    },
                    maxLength: {
                      value: 16,
                      message: '비밀번호는 최대 16자리여야 합니다.',
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/,
                      message:
                        '비밀번호는 최소 1개이상의 숫자, 문자, 정의된 특수문자를 포함해야 합니다.',
                    },
                  })}
                  required={false}
                  name="password"
                  type="password"
                  placeholer="비밀번호를 입력해주세요."
                />

                {errors.password && <Error>{errors.password.message}</Error>}

                <JoinInput
                  register={register('confirmPassword', {
                    // required: '재확인 비밀번호가 필요합니다.',
                  })}
                  required={false}
                  name="confirmPassword"
                  type="password"
                  placeholer="비밀번호를 다시한번 입력해주세요."
                />

                {errors.confirmPassword && (
                  <Error>{errors.confirmPassword.message}</Error>
                )}

                <JoinInput
                  register={register('email', {
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: '이메일 형식이 올바르지 않습니다.',
                    },
                  })}
                  required={false}
                  name="email"
                  type="text"
                  placeholer="이메일을 입력해주세요."
                />

                {errors.email && <Error>{errors.email.message}</Error>}

                <JoinInput
                  register={register('phone', {
                    pattern: {
                      value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                      message: '휴대폰 입력이 올바르지 않습니다.',
                    },
                  })}
                  required={false}
                  name="phone"
                  type="text"
                  placeholer="휴대폰 번호를 입력해주세요."
                />

                {errors.phone && <Error>{errors.phone.message}</Error>}

                <JoinInput
                  register={register('location')}
                  required={false}
                  name="location"
                  type="text"
                  placeholer="위치를 입력해주세요."
                />

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
