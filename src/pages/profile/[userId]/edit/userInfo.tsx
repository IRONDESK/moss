import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import JoinInput from 'src/components/Join/components/JoinInput';
import useMutation from 'src/libs/client/useMutation';
import useUser from 'src/libs/client/useUser';
import {
  Avatar,
  AvatarInput,
  Btn,
  Container,
  EditBtn,
  Error,
  H1,
  ImgLabel,
  InputWrap,
  Message,
  ProfileImg,
} from 'src/styles/componentsStyles';
import { IEditResponse } from 'src/types/editProfile';
import { joinForm } from 'src/types/join';

export default function Profile() {
  //GET
  const { loggedInUser } = useUser();

  //POST
  const [editUserInfo, { data, loading }] =
    useMutation<IEditResponse>(`/api/users/me`);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
    watch,
  } = useForm<joinForm>({
    mode: 'onBlur',
  });

  const onValid = async ({
    email,
    phone,
    username,
    location,
    avatar,
  }: joinForm) => {
    if (loading) return;
    //휴대폰 '-' 제거
    if (phone) {
      phone = phone.replace(/-/g, '');
    }
    //유저 확인가능한 정보가 없을시 -> error
    if (
      !email &&
      !phone &&
      loggedInUser?.username &&
      !loggedInUser?.userId &&
      !loggedInUser?.email &&
      !loggedInUser?.phone
    ) {
      return setError('blank', {
        message: '이메일 또는 휴대폰 번호가 필요합니다.',
      });
    }
    //프로필사진 업로드
    if (avatar && avatar.length > 0 && loggedInUser?.id) {
      const { uploadURL } = await (await fetch(`/api/upload/avatar`)).json();
      const form = new FormData();
      form.append('file', avatar[0], loggedInUser?.id + '');
      const {
        result: { id },
      } = await (
        await fetch(uploadURL, {
          method: 'POST',
          body: form,
        })
      ).json();
      return editUserInfo({
        email,
        phone,
        username,
        location,
        avatarId: id,
      });
    } else {
      //프로필 사진 없이 유저정보 수정할시
      return editUserInfo({
        email,
        phone,
        username,
        location,
      });
    }
  };

  //프로필 사진 업로드
  const [avatarPreview, setAvatarPreview] = useState('');
  const avatar = watch('avatar');
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  //초기세팅
  useEffect(() => {
    if (loggedInUser?.avatar)
      setAvatarPreview(
        `https://imagedelivery.net/akzZnR6sxZ1bwXZp9XYgsg/${loggedInUser?.avatar}/avatar`,
      );
    if (loggedInUser?.username) setValue('username', loggedInUser.username);
    if (loggedInUser?.email) setValue('email', loggedInUser.email);
    if (loggedInUser?.phone) setValue('phone', loggedInUser.phone);
    if (loggedInUser?.location) setValue('location', loggedInUser.location);
  }, [loggedInUser, setValue]);

  //
  return (
    <Container>
      <H1>
        <span>프로필 관리</span>
      </H1>
      <form onSubmit={handleSubmit(onValid)}>
        <ImgLabel>
          {avatarPreview ? <Avatar src={avatarPreview} /> : <ProfileImg />}
          <AvatarInput
            {...register('avatar')}
            type="file"
            name="avatar"
            accept="image/*"
          />
        </ImgLabel>

        <InputWrap>
          {errors.blank && <Error>{errors.blank.message}</Error>}
          {data?.message && <Message>{data?.message}</Message>}
          {data?.errorMessage && <Error>{data?.errorMessage}</Error>}
          <JoinInput
            register={register('username', {
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
            placeholer="수정할 이름을 적어주세요."
          />

          <JoinInput
            register={register('email', {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: '이메일 형식이 올바르지 않습니다.',
              },
            })}
            required={false}
            name="email"
            type="email"
            placeholer="수정할 이메일를 적어주세요."
          />

          <JoinInput
            register={register('phone', {
              pattern: {
                value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                message: '휴대폰 입력이 올바르지 않습니다.',
              },
            })}
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
        <Link href={`/profile/${loggedInUser?.id}/edit/userId_pw`}>
          <a>아이디 및 비밀번호 수정 &rarr;</a>
        </Link>
      </EditBtn>
    </Container>
  );
}
