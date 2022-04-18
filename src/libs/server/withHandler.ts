import { NextApiRequest, NextApiResponse } from 'next';

//Helper Function for Handler API!
export default function withHandler({
  methods,
  handler,
  isPrivate = true, //대부분이 로그인 상태에서 진행함으로 디폴트를 false로 해줌!
}: ConfigType) {
  // 실행하는 함수
  return async function (
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<any> {
    // 순서대로 실행

    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }

    //로그아웃시 핸들러 처리 -> 401 error
    if (isPrivate && !req.session.user) {
      return res
        .status(401)
        .json({ ok: false, Error_message: `로그인이 필요합니다!` });
    }

    //handler 실행!
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error }); //500은 server-error
    }
  };
}

//ts
export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = 'GET' | 'POST' | 'DELETE';

interface ConfigType {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}
