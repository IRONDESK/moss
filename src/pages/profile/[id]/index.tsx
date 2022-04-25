import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import JoinInput from 'src/components/Join/components/JoinInput';
import { COLOR } from 'src/constants';
import useMutation from 'src/libs/client/useMutation';
import useUser from 'src/libs/client/useUser';
import {
  Btn,
  Container,
  EditBtn,
  Error,
  H1,
  InputWrap,
  Message,
} from 'src/styles/componentsStyles';

//ts
interface IEditResponse {
  ok: boolean;
  errorMessage?: string;
  editMessage?: string;
}

export interface joinForm {
  username?: string;
  userId?: string;
  password?: string;
  password2?: string;
  email?: string;
  phone?: string;
  location?: string;
  avatar?: string;
}

function Profile() {
  // const [formErrors, setFormErrors] = useState('');

  //GET api
  const { loggedInUser } = useUser();

  //SUBMIT
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<joinForm>({
    mode: 'onBlur',
  });
  //
  const onValid = ({ email, phone, username, location }: joinForm) => {
    if (loading) return;
    if (email === '' && phone === '' && username === '' && location === '') {
      return setError('email', {
        message: '이메일 또는 휴대폰 번호가 필요합니다.',
      });
    } else {
      editProfile({
        email,
        phone,
        username,
        location,
      });
    }
  };

  //POST API
  const [editProfile, { data, loading }] =
    useMutation<IEditResponse>(`/api/users/me`);

  //초기값 설정
  useEffect(() => {
    if (loggedInUser?.username) setValue('username', loggedInUser.username);
    if (loggedInUser?.email) setValue('email', loggedInUser.email);
    if (loggedInUser?.phone) setValue('phone', loggedInUser.phone);
    if (loggedInUser?.location) setValue('location', loggedInUser.location);
  }, [loggedInUser, setValue]);

  return (
    <Container>
      <H1>
        <span>프로필 관리</span>
      </H1>
      {data?.errorMessage && <Error>{data?.errorMessage}</Error>}
      {data?.editMessage && <Message>{data?.editMessage}</Message>}
      <form onSubmit={handleSubmit(onValid)}>
        <InputWrap>
          <JoinInput
            register={register('username')}
            required={false}
            name="username"
            type="text"
            placeholer="수정할 이름을 적어주세요."
          />

          <JoinInput
            register={register('email')}
            required={false}
            name="email"
            type="email"
            placeholer="수정할 이메일를 적어주세요."
          />

          <JoinInput
            register={register('phone')}
            required={false}
            name="phone"
            type="number"
            placeholer="수정할 휴대폰 번호를 적어주세요."
          />

          <JoinInput
            register={register('location')}
            required={false}
            name="location"
            type="text"
            placeholer="수정할 위치를 적어주세요."
          />
          {errors.email && <Error>{errors.email.message}</Error>}
          <Btn type="submit">{loading ? '로딩중...' : '프로필 수정'}</Btn>
        </InputWrap>
      </form>
      <EditBtn>
        <Link href={`/profile/${loggedInUser?.id}/edit`}>
          <a>아이디 및 비밀번호 수정 &rarr;</a>
        </Link>
      </EditBtn>
    </Container>
  );
}

export default Profile;
