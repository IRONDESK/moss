//api handler함수를 보호하고 있는 껍데기 함수개념으로 생각하면됨!

import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

//nextJs가 실행할 function이 실행할 function을 만들어주는것
export default function withHandler(
  method: 'GET' | 'POST' | 'DELETE',
  fn: (req: NextApiRequest, res: NextApiResponse) => void,
) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<any> {
    if (req.method !== method) {
      return res.status(405).end();
    }
    try {
      await fn(req, res);
    } catch (error) {
      console.log(error);
      //500은 server-error
      return res.status(500).json({ error });
    }
  };
}
