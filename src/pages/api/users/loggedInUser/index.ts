import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  //로그인한 유저 api
  const { user } = req.session;
  const loggedInUser = await client.user.findUnique({
    where: { id: user?.id },
    include: { Study: true },
  });

  return res.json({ ok: true, loggedInUser });
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
