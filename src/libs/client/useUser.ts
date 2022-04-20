import { User } from '@prisma/client';
import useSWR from 'swr';

export interface IUser {
  ok: boolean;
  loggedInUser: User;
  users: User[];
  userCount: number;
}

export default function useUser() {
  const { data, error } = useSWR<IUser>('/api/users');
  //
  return {
    users: data?.users,
    loading: !data && !error,
    isLoggedIn: data?.ok,
    loggedInUser: data?.loggedInUser,
    userCount: data?.userCount,
  };
}
