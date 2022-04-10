import useSWR from 'swr';

interface IUser {
  ok?: boolean;
  profile: {
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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useLoggedIn(): IUser {
  const { data, error } = useSWR('/api/users/profile', fetcher);
  return data;
}
