import useSWR from 'swr';

export default function view(id: string | string[] | undefined) {
  const { data } = useSWR(`/api//notice/?id=${id}`);
  return data;
}
