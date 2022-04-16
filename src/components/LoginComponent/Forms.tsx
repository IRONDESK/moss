import { useForm } from 'react-hook-form';
import Input from './Input';
import { Btn, Error } from './loginStyles';

export interface ILoginForm {
  email?: string;
  phone?: string;
  userId?: string;
  password?: string;
}
export const LoginForm = ({ method, login, loading, errMsg }: any) => {
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
    return login(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        {method === 'userId' ? (
          <>
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
            {errMsg ? <Error>{errMsg}</Error> : null}
            <Btn>{loading ? '로딩중...' : '로그인'}</Btn>
          </>
        ) : method === 'email' ? (
          <>
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
          </>
        ) : method === 'phone' ? (
          <>
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
          </>
        ) : null}
      </form>
    </>
  );
};
export const EmailLoginForm = ({ login, loading }: any) => {
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
    return login(data);
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
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
    </form>
  );
};
export const PhoneLoginForm = ({ login, loading }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: 'onBlur',
  });
  const onValid = (data: ILoginForm) => {
    return login(data);
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
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
    </form>
  );
};
