import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'POST') {
    const { userId, password } = req.body;

    //1. 유저를 찾는다.
    const User = await client.user.findFirst({
      where: { userId, password },
    });

    //2. 유저가 없으면? -> ok:false, errorMsg
    if (!User) {
      res.json({
        ok: false,
        errorMsg: `일치하는 유저아이디 또는 비밀번호가 없습니다!`,
      });
    }
    //3. 유저가 있으면? -> 세션에 아이디 넣고, 저장!
    req.session.user = { id: User?.id };
    await req.session.save();
    return res.json({ ok: true });
  }
}

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler, isPrivate: false }),
);
