import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  //현 스터디에 존재하는 모든 일정데이터를 찾습니다.
  const allNotice = await client.notice.findMany({
    where: {
      studyId: +id,
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
    orderBy: { createdAt: 'desc' },
  });
  //
  return res.json({ ok: true, allNotice });
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
