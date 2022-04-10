import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function useUser() {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch('/api/users/profile')
      .then((res) => res.json())
      .then((data) => {
        if (!data.ok) {
          // return router.push('/login');
        }
        setUser(data.profile);
      });
  }, [router]);
  return user;
}
