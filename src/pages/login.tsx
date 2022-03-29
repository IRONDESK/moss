import styled from '@emotion/styled';
import { useState } from 'react';
import Input from '../components/Login/Input';

export default function Login() {
  const [method, setMethod] = useState('email');
  const onEmailClick = () => {
    setMethod('email');
  };
  const onPhoneClick = () => {
    setMethod('phone');
  };
  const onUserIdClick = () => {
    setMethod('userId');
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

      <form>
        {method === 'email' ? (
          <Input
            label="Email Address 이메일 주소"
            name="email"
            type="text"
            placeholder="이메일을 입력하세요."
            btnValue="로그인 링크 받기"
          />
        ) : null}

        {method === 'phone' ? (
          <Input
            label="Phone Number"
            name="phone"
            type="number"
            placeholder="휴대포 번호를 입력하세요."
            btnValue="one-time password 받기"
          />
        ) : null}

        {method === 'userId' ? (
          <Input
            label="User Id"
            name="userId"
            name2="userId"
            type="text"
            type2="password"
            placeholder="아이디를 입력하세요."
            placeholder2="비밀번호를 입력하세요."
            btnValue="아이디로 로그인 하기"
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
