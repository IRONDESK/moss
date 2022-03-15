import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { StayBtn } from './StayBtn';
import Nav from './LoginLink';

interface LoginProps {
  Login: fucntion;
  errorMsg: fucntion;
}

export const LoginForm = ({ Login, errorMsg }: LoginProps) => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const onSubmit = (event) => {
    event.preventDefault();
    Login(userInfo);
  };

  return (
    <LoginCont>
      <h1>
        <div>로그인</div>
      </h1>
      <form onSubmit={onSubmit}>
        <InputCont>
          <img src="images/login.svg" alt="로그인 아이콘" />
          <input
            onChange={(event) => {
              setUserInfo({ ...userInfo, email: event.target.value });
            }}
            value={userInfo.email}
            type="email"
            placeholder="아이디"
            name="email-id"
          />
        </InputCont>
        <InputCont>
          <img src="images/lock.svg" alt="잠금 아이콘" />
          <input
            onChange={(event) => {
              setUserInfo({ ...userInfo, password: event.target.value });
            }}
            value={userInfo.password}
            type="password"
            placeholder="비밀번호"
            name="password"
          />
        </InputCont>
        <StayBtn />
        {errorMsg !== '' ? <Error>{errorMsg}</Error> : null}
        <SubmitBtn userinfo={userInfo}>로그인</SubmitBtn>
        <Nav />
      </form>
    </LoginCont>
  );
};

const LoginCont = styled.article`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    width: 60px;
    border-bottom: 4px solid #34c88a;
    padding-bottom: 16px;
    margin-bottom: 106px;
    display: flex;
    justify-content: center;
    position: relative;
  }
  h1 > div {
    position: absolute;
    width: 200px;
    bottom: 16px;
    text-align: center;
    font-size: 32px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    input {
      border: 1px solid #e7e6e2;
      width: 340px;
      padding: 17px 0;
      padding-left: 40px;
      &::placeholder {
        color: #aaaaaa;
        font-size: 16px;
      }
      &:nth-of-type(1) {
        &:focus {
          outline: 1px solid #34c88a;
        }
      }
      &:nth-of-type(2) {
        &:focus {
          outline: 1px solid #34c88a;
        }
      }
    }
  }
`;

const Error = styled.div`
  border: none;
  background-color: #fff5f5;
  width: 340px;
  height: 64px;
  padding: 12px 46px;
  color: #ff3636;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubmitBtn = styled.button`
  border: none;
  padding: 16px 30px;
  width: 340px;
  font-size: 16px;
  color: #b7b6b3;
  transition: background-color 0.5s ease-in-out;
  ${(props) =>
    props.userinfo.email && props.userinfo.password
      ? `background-color:#34C88A; color:#FFFFFF`
      : `background-color:#e7e6e2`}
`;
const InputCont = styled.div`
  position: relative;
  img {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 16px;
    left: 14px;
  }
`;
