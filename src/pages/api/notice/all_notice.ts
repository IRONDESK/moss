import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const allNotice = await client.notice.findMany({
    include: {
      author: {
        select: {
          id: true,
          username: true,
        },
      },
      study: {
        select: {
          id: true,
          studyName: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
  //
  return res.json({ ok: true, allNotice });
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
