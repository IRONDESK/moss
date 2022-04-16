import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import Input from './Input';
import { Btn, Error, InputWrap } from './loginStyles';

export interface ILoginForm {
  email?: string;
  phone?: string;
  userId?: string;
  password?: string;
  token?: string;
}
export const LoginForm = ({
  method,
  login,
  loading,
  errMsg,
  serverError,
}: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: 'onBlur',
  });
  const onValid = (data: ILoginForm) => {
    reset();
    if (loading) return;
    return login(data);
  };
  //
  return (
    <Container>
      <form onSubmit={handleSubmit(onValid)}>
        {errMsg ? <Error>{errMsg}</Error> : null}
        {serverError ? <Error>{serverError}</Error> : null}
        {method === 'userId' ? (
          <UserIdLogin>
            <Input
              method={method}
              register={register('userId', {
                required: '아이디를 입력하세요!',
              })}
              register2={register('password', {
                required: '비밀번호를 입력하세요!',
              })}
              name="userId"
              type="text"
              placeholder="아이디를 입력하세요."
              errorMsg={errors.userId?.message}
              errorMsg2={errors.password?.message}
            />
            <Btn>{loading ? '로딩중...' : '로그인'}</Btn>
          </UserIdLogin>
        ) : method === 'email' ? (
          <EmailLogin>
            <Input
              register={register('email', {
                required: '이메일을 입력하세요!',
              })}
              name="email"
              type="text"
              placeholder="이메일을 입력하세요."
              errorMsg={errors.email?.message}
            />
            <Btn>{loading ? '로딩중...' : '로그인 링크 받기'}</Btn>
          </EmailLogin>
        ) : method === 'phone' ? (
          <PhoneLogin>
            <Input
              register={register('phone', {
                required: '휴대폰 번호를 입력하세요!',
              })}
              label="휴대폰 로그인 (Phone Number)"
              name="phone"
              type="number"
              placeholder="휴대폰 번호를 입력하세요."
              errorMsg={errors.phone?.message}
            />
            <Btn>{loading ? '로딩중...' : '인증번호 받기'}</Btn>
          </PhoneLogin>
        ) : method === 'token' ? (
          <TokenLogin>
            <Input
              register={register('token', {
                required: '6자리 숫자 토큰을 입력해야 합니다!',
              })}
              method="token"
              label="토큰으로 인증후 로그인"
              name="token"
              type="number"
              placeholder="6자리 숫자 토큰을 입력하세요."
              errorMsg={errors.token?.message}
            />
            <Btn>{loading ? '로딩중...' : '인증완료 후 로그인'}</Btn>
          </TokenLogin>
        ) : null}
      </form>
    </Container>
  );
};
const Container = styled.div``;
const UserIdLogin = styled(InputWrap)``;
const EmailLogin = styled(InputWrap)``;
const PhoneLogin = styled(InputWrap)``;
const TokenLogin = styled(InputWrap)``;
