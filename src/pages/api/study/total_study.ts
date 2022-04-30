import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const totalStudies = await client.study.findMany();
  if (!totalStudies) {
    return res.json({ ok: false, message: '존재하는 스터디가 없습니다!' });
  }
  return res.json({ ok: true, totalStudies });
}

export default withApiSession(
  withHandler({ methods: ['GET'], handler, isPrivate: false }),
);
