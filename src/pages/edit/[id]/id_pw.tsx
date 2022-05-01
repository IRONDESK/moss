import Link from 'next/link';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
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
} from 'src/styles/components';
import { IEditForm } from 'src/types/edit';

export default function User() {
  //GET
  const { loggedInUser } = useUser();

  //POST
  const [edit, { data, loading }] = useMutation(
    `/api/users/loggedInUser/edit_idpw`,
  );

  //SUBMIT
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IEditForm>({ mode: 'onBlur' });

  const onValid = ({ userId, password, confirmPassword }: IEditForm) => {
    if (loading) return;
    if (password !== confirmPassword) {
      return setError('passwordMatch', {
        message: '비밀번호가 일치하지 않습니다.',
      });
      //
    }
    return edit({ userId, password, confirmPassword });
  };
  //초기세팅
  useEffect(() => {
    if (loggedInUser?.userId) setValue('userId', loggedInUser.userId);
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
              {...register('userId', {
                required: '아이디를 입력해주세요.',
                pattern: {
                  value: /^[a-z]+[a-z0-9]{5,19}$/g,
                  message:
                    '아이디는 영문자 또는 6~20자리 숫자를 포함해야합니다.',
                },
              })}
              name="userId"
              type="text"
              placeholder="새로운 아이디를 입력하세요."
            />
            {errors.userId && <Error>{errors.userId.message}</Error>}

            <input
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
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
              name="password"
              type="password"
              placeholder="새로운 비밀번호를 입력하세요."
            />
            {errors.password && <Error>{errors.password.message}</Error>}

            <input
              {...register('confirmPassword', {
                required: '비밀번호를 재입력해주세요.',
              })}
              name="confirmPassword"
              type="password"
              placeholder="비밀번호를 재입력하세요."
            />
            {errors.confirmPassword && (
              <Error>{errors.confirmPassword.message}</Error>
            )}
            {errors.passwordMatch && (
              <Error>{errors.passwordMatch.message}</Error>
            )}

            <Btn type="submit">
              {loading ? '로딩중...' : '아이디 및 비밀번호 수정하기'}
            </Btn>
          </InputWrap>
        </form>
        <EditBtn>
          <Link href={`/edit/${loggedInUser?.id}/info`}>
            <a>&larr; 프로필 관리페이지 돌아가기</a>
          </Link>
        </EditBtn>
      </Container>
    </>
  );
}
