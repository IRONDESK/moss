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
  //fecth를 위한 mutation Hook
  const [login, { loading, data, error }] = useMutation('/api/users/login');

  //useForm
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
      <h1>
        <span>로그인</span>
      </h1>

      <section>
        <button
          onClick={onEmailClick}
          className={method === 'email' ? 'chosen' : 'unchosen'}
        >
          <p>이메일</p>
        </button>
        <button
          onClick={onPhoneClick}
          className={method === 'phone' ? 'chosen' : 'unchosen'}
        >
          <p>휴대폰</p>
        </button>
        <button
          onClick={onUserIdClick}
          className={method === 'userId' ? 'chosen' : 'unchosen'}
        >
          <p>아이디 / 비밀번호</p>
        </button>
      </section>

      <form onSubmit={handleSubmit(onValid)}>
        {method === 'email' ? (
          <Input
            register={register('email', { required: '이메일을 입력하세요!' })}
            method="email"
            label="이메일 주소로 로그인 (Email Address)"
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
            label="휴대폰 로그인 (Phone Number)"
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
            label="아이디 | 비밀번호 로그인 (Id | Password)"
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
  padding: 140px 0px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  h1 {
    display: flex;
    justify-content: center;
    width: 60px;
    font-size: 30px;
    margin: 10px auto;
    border-bottom: 4px solid ${COLOR.main};
    position: relative;
    span {
      width: 200px;
      position: absolute;
      bottom: 16px;
      text-align: center;
    }
  }
  section {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin-top: 5%;
    button {
      font-size: 1.2rem;
      padding: 10px 20px;
      width: 100%;
      &.chosen {
        border-bottom: 4px solid ${COLOR.main};
      }
      &.unchosen {
        border-bottom: 4px solid ${COLOR.gray};
      }
    }
  }
  form {
    width: 90%;
    button {
      width: 100%;
      padding: 10px 5px;
      color: white;
      background-color: ${COLOR.main};
      padding: 20px 30px;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      font-size: 20px;
    }
  }
`;