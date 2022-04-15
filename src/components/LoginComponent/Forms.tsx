import { useForm } from 'react-hook-form';
import { ILoginForm } from 'src/pages/login';
import Input from './Input';

export const LoginForm = ({ login, loading }: any) => {
  const {
    register,
    reset,
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
        method="userId"
        register={register('userId', {
          required: '아이디를 입력하세요!',
        })}
        register2={register('password', {
          required: '비밀번호를 입력하세요!',
        })}
        label="아이디 | 비밀번호 로그인 (Id | Password)"
        name="userId"
        type="text"
        placeholder="아이디를 입력하세요."
      />
      <button>{loading ? '로딩중...' : '로그인'}</button>
    </form>
  );
};
export const EmailLoginForm = ({ login, loading }: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onBlur',
  });
  const onValid = (data: LoginForm) => {
    return login(data);
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Input
        register={register('email', {
          required: '이메일을 입력하세요!',
        })}
        method="email"
        label="이메일 주소로 로그인 (Email Address)"
        name="email"
        type="text"
        placeholder="이메일을 입력하세요."
        errorMsg={errors.email?.message}
      />
      <button>{loading ? '로딩중...' : '이메일로 로그인 링크 받기'}</button>
    </form>
  );
};
export const PhoneLoginForm = ({ login, loading }: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onBlur',
  });
  const onValid = (data: LoginForm) => {
    return login(data);
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Input
        register={register('phone', {
          required: '휴대폰 번호를 입력하세요!',
        })}
        method="phone"
        label="휴대폰 로그인 (Phone Number)"
        name="phone"
        type="number"
        placeholder="휴대폰 번호를 입력하세요."
        errorMsg={errors.phone?.message}
      />
      <button>
        {loading ? '로딩중...' : '휴대폰으로 One-time password 받기'}
      </button>
    </form>
  );
};
