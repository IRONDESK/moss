import { useState } from 'react';

interface UseMutationState<Type> {
  loading: boolean;
  data?: Type;
  error?: object;
}
type UseMutationResult<Type> = [(data: any) => void, UseMutationState<Type>];

export default function useMutation<Type = any>(
  url: string,
): UseMutationResult<Type> {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  //백엔드와 통신하는 함수
  function mutation(data: any) {
    //로딩 UI
    setLoading(true);
    //front에서 받은 데이터를 -> back으로 post하고
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      //받은 데이터를 저장하여 -> front로 보냄
      .then((response) => response.json().catch(() => {}))
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  return [mutation, { loading, data, error }];
}
