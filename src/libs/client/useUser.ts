import useSWR from 'swr';

export default function useUser() {
  const { data, error } = useSWR('/api/users');
  return {
    loggedIn: data?.ok,
    user: data?.loggedInUser,
    username: data?.loggedInUser?.username,
    loading: !data && !error,
    allUsers: data?.allUsers,
  };
}
