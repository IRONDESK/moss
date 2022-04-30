import useSWR from 'swr';

export default function (id: string | string[] | undefined) {
  const { data } = useSWR(`/api/study/create?id=${id}`);

  return data;
}
