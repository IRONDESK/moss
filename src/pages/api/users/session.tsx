import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  //쿠키로 받은 session(쿠키) 확인!
  console.log(req.session);

  // session의 id와 일치하는 유저를 찾는다.
  // (이런식으로 session id를 활용해 서버가 유저를 기억하도록 한다!)
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  //
  res.json({ ok: true, profile });
}

export default withIronSessionApiRoute(withHandler('GET', handler), {
  cookieName: 'moss-session',
  //cookie를 암호화 하는 비밀번호
  password: 'asdlfjkasdjflkasdjkfjkjasdkkljasdfasldfkj',
});
