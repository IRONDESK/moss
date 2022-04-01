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
  //이게 NextJS가 실행하는 함수임!
  //아래코드를 넣음으로서 handler함수를 bad request로 부터 보호함
  return async function (req: NextApiRequest, res: NextApiResponse) {
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
