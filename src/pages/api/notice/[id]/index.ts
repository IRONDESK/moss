import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const notice = await client.notice.findUnique({
    where: {
      id: +id.toString(),
    },
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
  });
  //
  if (!notice) {
    return res.json({ ok: false, message: '생성된 공지사항이 없습니다.' });
  }
  //
  return res.json({ ok: true, notice });
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
