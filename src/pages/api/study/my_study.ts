import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const myStudy = await client.study.findMany({
    where: {
      UserId: user?.id,
    },
  });
  if (!myStudy) {
    return res.json({ ok: false, message: '아직 스터디를 만들지 않았습니다!' });
  }
  return res.json({ ok: true, myStudy });
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
