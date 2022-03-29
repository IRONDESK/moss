import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { useState } from 'react';
import Input from '../components/Login/Input';

interface LoginForm {
  email?: string;
  phone?: string;
  userId?: string;
  password?: string;
}

export default function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginForm>({ mode: 'onBlur' });

  const onValid = (data: LoginForm) => {
    console.log(data);
  };

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
  console.log(watch());
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
            label="Email Address 이메일 주소"
            name="email"
            type="text"
            placeholder="이메일을 입력하세요."
            btnTitle="로그인 링크 받기"
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
            btnTitle="one-time password 받기"
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
            btnTitle="아이디로 로그인 하기"
            errorMsg={errors.userId?.message}
            errorMsg2={errors.password?.message}
          />
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
  }
`;
