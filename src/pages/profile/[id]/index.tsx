import Link from 'next/link';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import JoinInput from 'src/components/Join/components/JoinInput';
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
import { IEditResponse } from 'src/types/editProfile';
import { joinForm } from 'src/types/join';

export default function Profile() {
  //GET
  const { loggedInUser } = useUser();
  const existingId = loggedInUser?.userId;
  const existingEmail = loggedInUser?.email;
  const existingPhone = loggedInUser?.phone;

  //POST
  const [editProfile, { data, loading }] =
    useMutation<IEditResponse>(`/api/users/me`);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<joinForm>({
    mode: 'onBlur',
  });

  const onValid = ({ email, phone, username, location }: joinForm) => {
    if (loading) return;
    if (!email && !phone && !existingId && !existingEmail && !existingPhone) {
      return setError('email', {
        message: '이메일 또는 휴대폰 번호가 필요합니다.',
      });
    } else if (phone) {
      phone = phone.replace(/-/g, '');
    } else {
      editProfile({
        email,
        phone,
        username,
        location,
      });
    }
  };

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
      <form onSubmit={handleSubmit(onValid)}>
        <InputWrap>
          {data?.message && <Message>{data?.message}</Message>}
          {data?.errorMessage && <Error>{data?.errorMessage}</Error>}
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
