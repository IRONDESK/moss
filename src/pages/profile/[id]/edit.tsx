import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from 'src/libs/client/useMutation';
import useUser from 'src/libs/client/useUser';
import {
  Btn,
  Container,
  Error,
  H1,
  InputWrap,
  Message,
} from 'src/styles/componentsStyles';

interface IEditForm {
  userId?: string;
  password?: string;
  confirmPassword?: string;
  passwordError?: string;
}

function Edit() {
  const { loggedInUser } = useUser();

  const [edit, { data, loading }] = useMutation(`/api/users/me/edit`);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IEditForm>({ mode: 'onBlur' });

  const onValid = ({ userId, password, confirmPassword }: IEditForm) => {
    edit({ userId, password, confirmPassword });
  };

  useEffect(() => {
    loggedInUser?.userId && setValue('userId', loggedInUser.userId);
  }, [loggedInUser, setValue]);

  //
  return (
    <>
      <Container>
        <H1>
          <span>아이디 | 비밀번호 수정</span>
        </H1>
        {data?.errorMessage && <Error>{data.errorMessage}</Error>}
        {data?.message && <Message>{data.message}</Message>}
        <form onSubmit={handleSubmit(onValid)}>
          <InputWrap>
            <input
              {...register('userId')}
              name="userId"
              type="text"
              placeholder="새로운 아이디를 입력하세요."
            />
            <input
              {...register('password')}
              name="password"
              type="password"
              placeholder="새로운 비밀번호를 입력하세요."
            />
            <input
              {...register('confirmPassword')}
              name="confirmPassword"
              type="password"
              placeholder="비밀번호를 재입력하세요."
            />
            <Btn type="submit">
              {loading ? '로딩중...' : '아이디 및 비밀번호 수정하기'}
            </Btn>
          </InputWrap>
        </form>
      </Container>
    </>
  );
}

export default Edit;
