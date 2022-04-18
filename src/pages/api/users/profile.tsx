import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'GET') {
    // 세션에 저장된 유저와 아이디가 일치하는 유저를 db에서 찾는다.
    const profile = await client.user.findUnique({
      where: { id: req.session.user?.id },
    });

    return res.json({ ok: true, profile });
  }
}

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler }),
);
