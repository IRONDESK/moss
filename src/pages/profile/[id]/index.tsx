import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import JoinInput from 'src/components/Join/components/JoinInput';
import useMutation from 'src/libs/client/useMutation';
import useUser from 'src/libs/client/useUser';
import {
  Btn,
  Container,
  Error,
  H1,
  InputWrap,
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

interface EditProfileForm {
  email?: string;
  phone?: string;
  username?: string;
  location?: string;
  formErrors?: string;
  apiErrors?: string;
}

function Profile() {
  //GET api
  const { loggedInUser } = useUser();

  //Submit
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<EditProfileForm>({
    mode: 'onChange',
  });
  //
  const onValid = ({ email, phone, username, location }: joinForm) => {
    if (loading) return;
    //error handling
    if (email === '' && phone === '' && username === '' && location === '') {
      setError('formErrors', { message: '이메일 또는 휴대폰을 적어주세요.' });
    }
    editProfile({
      email,
      phone,
      username,
      location,
    });
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

  //api error
  useEffect(() => {
    if (data && !data.ok && data.errorMessage) {
      setError('apiErrors', { message: data.errorMessage });
    }
  }, [data, setError]);

  //
  return (
    <Container>
      <H1>
        <span>프로필 편집</span>
      </H1>
      {errors.apiErrors ? <Error>{errors.apiErrors.message}</Error> : null}
      {data?.editMessage ? <Error>{data?.editMessage}</Error> : null}
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
          {errors.formErrors ? (
            <Error>{errors.formErrors.message}</Error>
          ) : null}
          <Btn type="submit">프로필 수정</Btn>
        </InputWrap>
      </form>
    </Container>
  );
}

export default Profile;
