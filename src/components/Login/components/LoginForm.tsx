import { useForm } from 'react-hook-form';
import {
  Btn,
  EmailLogin,
  Error,
  PhoneLogin,
  TokenLogin,
  UserIdLogin,
} from 'src/styles/loginStyles';
import Input from './LoginInput';

//TS
export interface ILoginForm {
  email?: string;
  phone?: string;
  userId?: string;
  password?: string;
  token?: string;
}

export const LoginForm = ({ method, login, loading, errMsg }: any) => {
  //
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: 'onChange',
  });
  //
  const onValid = (data: ILoginForm) => {
    reset();
    if (loading) return;
    return login(data);
  };
  //
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        {errMsg ? <Error>{errMsg}</Error> : null}

        {/*  */}

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
        ) : //

        method === 'email' ? (
          <EmailLogin>
            <Input
              register={register('email', {
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: '이메일 형식이 올바르지 않습니다.',
                },
                required: '이메일을 입력하세요!',
              })}
              name="email"
              type="text"
              placeholder="이메일을 입력하세요."
              errorMsg={errors.email?.message}
            />
            <Btn>{loading ? '로딩중...' : '로그인 링크 받기'}</Btn>
          </EmailLogin>
        ) : //

        method === 'phone' ? (
          <PhoneLogin>
            <Input
              type="number"
              register={register('phone', {
                maxLength: {
                  value: 9,
                  message: '휴대폰번호는 9자리를 넘을수 없습니다.',
                },
                required: '휴대폰 번호를 입력하세요!',
              })}
              name="phone"
              placeholder="휴대폰 번호를 입력하세요."
              errorMsg={errors.phone?.message}
            />
            <Btn>{loading ? '로딩중...' : '인증번호 받기'}</Btn>
          </PhoneLogin>
        ) : //

        method === 'token' ? (
          <TokenLogin>
            <Input
              type="number"
              register={register('token', {
                minLength: {
                  value: 6,
                  message: '토큰은 6자리 숫자입니다.',
                },
                maxLength: {
                  value: 6,
                  message: '토큰은 6자리 숫자입니다.',
                },
                required: '인증을 위해서 토큰을 입력해야 합니다!',
              })}
              method="token"
              label="토큰으로 인증후 로그인"
              name="token"
              placeholder="6자리 숫자 토큰을 입력하세요."
              errorMsg={errors.token?.message}
            />
            <Btn>{loading ? '로딩중...' : '인증완료 후 로그인'}</Btn>
          </TokenLogin>
        ) : null}
      </form>
    </>
  );
};
