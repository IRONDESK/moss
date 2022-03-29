import styled from '@emotion/styled';
import { useState } from 'react';

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

      <div>
        <button onClick={onEmailClick}>
          <p>Email</p>
        </button>
        <button onClick={onPhoneClick}>
          <p>Phone</p>
        </button>
        <button onClick={onUserIdClick}>
          <p>User Id</p>
        </button>
      </div>

      <form>
        {method === 'email' ? (
          <>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              name="email"
              placeholder="이메일을 입력하세요."
            />
            <input type="submit" value="로그인 링크 받기" />
          </>
        ) : null}

        {method === 'phone' ? (
          <>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              name="phone"
              placeholder="휴대포 번호를 입력하세요."
            />
            <input type="submit" value="one-time password 받기" />
          </>
        ) : null}

        {method === 'userId' ? (
          <>
            <label htmlFor="userId">User Id</label>
            <input
              type="text"
              name="userId"
              placeholder="아이디를 입력하세요."
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요."
            />
            <input type="submit" value="아이디로 로그인 하기" />
          </>
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
  width: 80%;
  div {
    display: flex;
    width: 50%;
    button {
      width: 100%;
      margin: 10px 0;
      border: 3px solid blue;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }
  form {
    margin-top: 15px;
    width: 50%;
    display: flex;
    flex-direction: column;
    input {
      padding: 10px;
    }
  }
`;
