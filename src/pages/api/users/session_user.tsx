import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  // session의 id와 일치하는 유저를 찾는다.
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });

  //쿠키로 받은 session(쿠키) 확인!
  res.json({ ok: true, profile });
  //
}

export default withApiSession(withHandler({ method: 'GET', handler }));
