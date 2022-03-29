import { useState } from 'react';

import { LoginForm } from '../components/Login/LoginForm';

export default function LoginApp() {
  const [name, setName] = useState();

  return (
    <>
      <LoginForm />
    </>
  );
}
