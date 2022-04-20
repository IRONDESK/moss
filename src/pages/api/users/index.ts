import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  if (req.method === 'GET') {
    const { user } = req.session;

    //로그인 유저
    const loggedInUser = await client.user.findUnique({
      where: { id: user?.id },
    });

    //모든 유저
    const users = await client.user.findMany({
      select: {
        id: true,
        username: true,
        avatar: true,
      },
    });

    //모든유저 카운트
    const userCount = await client.user.count();

    //
    return res.json({ ok: true, loggedInUser, users, userCount });
  }
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
