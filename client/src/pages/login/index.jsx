import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { LoginForm } from '../../components/Login/LoginForm';

export default function LoginApp() {
  const [name, setName] = useState();

  // const [user, setUser] = useState({ email: '' });
  // const [error, setError] = useState('');

  return (
    <>
      <LoginForm />
    </>
  );
}
