import { useEffect, useState } from 'react';

interface IUser {
  loading?: boolean;
  user?: {
    id: 56;
    username: string;
    userId: boolean;
    password: boolean;
    email: string;
    phone: boolean;
    avatar: boolean;
    location: boolean;
    createdAt: string;
    updatedAt: string;
  };
  error?: object;
}

export default function useLoggedIn(): IUser {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch('/api/users/profile')
      .then((res) => res.json().catch(() => {}))
      .then((data) => {
        if (!data.ok) {
          //로그아웃인 경우
          setLoading(true);
          return;
        }
        //로그인된 경우
        setUser(data.profile);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  //
  return { loading, user, error };
}
