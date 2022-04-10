import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useLoggedIn() {
  const { data, error } = useSWR('/api/users/profile', fetcher);

  return {
    loggedIn: data?.ok,
    user: data?.profile,
    username: data?.profile?.username,
    loading: !data && !error,
  };
}
