import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}
interface ConfigType {
  method: 'GET' | 'POST' | 'DELETE';
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

//Helper Function for Handler API!
export default function withHandler({
  method,
  handler,
  isPrivate = true, //대부분이 로그인 상태에서 진행함으로 디폴트를 private으로 해줌!
}: ConfigType) {
  // 실행하는 함수
  return async function (
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<any> {
    // 순서대로 실행

    // Ex. POST를 요청하는 API 주소로 브라우저에 url을 찍어들어간다면 (GET) -> 405 error
    if (req.method !== method) {
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
