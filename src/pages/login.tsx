import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { useState } from 'react';
import Input from '../components/Login/Input';
import { COLOR } from '../constants';
import useMutation from '../libs/client/useMutation';

interface LoginForm {
  email?: string;
  phone?: string;
  userId?: string;
  password?: string;
}

export default function Login() {
  const [login, { loading, data, error }] = useMutation('/api/users/login');

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginForm>({ mode: 'onBlur' });

  const onValid = (validForm: LoginForm) => {
    login(validForm);
  };

  console.log(loading, data, error);

  const [method, setMethod] = useState('email');
  const onEmailClick = () => {
    setMethod('email');
    reset();
  };
  const onPhoneClick = () => {
    setMethod('phone');
    reset();
  };
  const onUserIdClick = () => {
    setMethod('userId');
    reset();
  };

  return (
    <Container>
      <h1>로그인</h1>

      <section>
        <button onClick={onEmailClick}>
          <p>Email</p>
        </button>
        <button onClick={onPhoneClick}>
          <p>Phone</p>
        </button>
        <button onClick={onUserIdClick}>
          <p>User Id</p>
        </button>
      </section>

      <form onSubmit={handleSubmit(onValid)}>
        {method === 'email' ? (
          <Input
            register={register('email', { required: '이메일을 입력하세요!' })}
            method="email"
            label="Email Address"
            name="email"
            type="text"
            placeholder="이메일을 입력하세요."
            errorMsg={errors.email?.message}
          />
        ) : null}

        {method === 'phone' ? (
          <Input
            register={register('phone', {
              required: '휴대폰 번호를 입력하세요!',
            })}
            method="phone"
            label="Phone Number"
            name="phone"
            type="number"
            placeholder="휴대폰 번호를 입력하세요."
            errorMsg={errors.phone?.message}
          />
        ) : null}

        {method === 'userId' ? (
          <Input
            method="userId"
            register={register('userId', { required: '아이디를 입력하세요!' })}
            register2={register('password', {
              required: '비밀번호를 입력하세요!',
            })}
            label="User Id"
            name="userId"
            type="text"
            placeholder="아이디를 입력하세요."
            errorMsg={errors.userId?.message}
            errorMsg2={errors.password?.message}
          />
        ) : null}

        {method === 'email' ? (
          <button>{loading ? '로딩중...' : '로그인 링크 받기'}</button>
        ) : null}
        {method === 'phone' ? (
          <button>{loading ? '로딩중...' : 'One-time password 받기'}</button>
        ) : null}
        {method === 'userId' ? (
          <button>{loading ? '로딩중...' : '로그인'}</button>
        ) : null}
      </form>
    </Container>
  );
}
const Container = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  section {
    display: flex;
    width: 100%;
    button {
      width: 100%;
      margin: 10px 0;
      border: 3px solid blue;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }
  form {
    border: 3px solid blue;
    width: 100%;
    height: 200px;
    text-align: center;
    padding: 10px;
    button {
      width: 100%;
      padding: 10px 5px;
      color: white;
      background-color: ${COLOR.main};
    }
  }
`;
