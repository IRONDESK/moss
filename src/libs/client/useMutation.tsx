import { useState } from 'react';

//api를 위한 hook!
export default function useMutation(
  url: string,
): [
  (data: any) => void,
  { loading: boolean; data: undefined | any; error: undefined | any },
] {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  //백엔드에서 받는 데이터를 return하는 함수
  function mutation(data: any) {}

  return [mutation, { loading, data, error }];
}
