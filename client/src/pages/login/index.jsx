import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import MyPage from '../my-page';
import { LoginForm } from '../../components/Login/LoginForm';
import axios from 'axios';

export default function LoginApp() {
  const [name, setName] = useState();
  const [data, setData] = useState('');
  useEffect(() => {
    axios.get('http://localhost:4000/home').then((response) => {
      setData(response.data);
    });
  }, []);
  async function postName(event) {
    event.preventDefault();
    try {
      await axios.post('http://localhost:4000/post_name', { name });
    } catch (error) {
      console.log(error);
    }
  }

  //
  const [userData, setUserData] = useState([{}]);
  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState('');

  const Login = (userInfo) => {
    if (
      userInfo.email == userData.user.email &&
      userInfo.password == userData.user.password
    ) {
      setUser({
        email: userInfo.email,
      });
    } else {
      setError(`아이디또는 비밀번호를 잘못 입력했습니다.
      입력하신 내용을 다시 확인해주세요.`);
    }
  };
  const Logout = () => {
    setUser({ email: '' });
  };
  return (
    <LoginCont>
      <form onSubmit={postName}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
        <button type="submit">Send Name</button>
      </form>
      {data}
      {user.email !== '' ? (
        <MyPage User={userData.user.name} Logout={Logout} />
      ) : (
        <LoginForm Login={Login} errorMsg={error} />
      )}
    </LoginCont>
  );
}
const LoginCont = styled.section``;
