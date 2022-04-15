import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Input from '../components/LoginComponent/Input';
import { COLOR } from '../constants';
import useMutation from '../libs/client/useMutation';
import { useRouter } from 'next/router';
import { TokenForm } from 'src/components/LoginComponent/loginType/TokenLogin';
import AuthLogin from 'src/components/LoginComponent/loginType/AuthLogin';

export interface ILoginForm {
  email?: string;
  phone?: string;
  userId?: string;
  password?: string;
}
export interface MutationResult {
  ok: boolean;
  [key: string]: any;
}

export default function Login() {
  return (
    <Container>
      <h1>
        <span>로그인</span>
      </h1>
      <AuthLogin />
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
  width: 50%;
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
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5%;
    width: 100%;
    button {
      width: 100%;
      font-size: 1.2rem;
      padding: 10px 20px;
      &.chosen {
        border-bottom: 4px solid ${COLOR.main};
      }
      &.unchosen {
        border-bottom: 4px solid ${COLOR.gray};
      }
    }
  }
  form {
    width: 100%;
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
