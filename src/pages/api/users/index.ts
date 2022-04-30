import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler, { ResponseType } from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  //모든 유저
  const allUsers = await client.user.findMany({
    select: {
      id: true,
      username: true,
      avatar: true,
    },
  });
  //모든유저 카운트
  const allUsersCount = await client.user.count();
  //
  return res.json({ ok: true, allUsers, allUsersCount });
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
