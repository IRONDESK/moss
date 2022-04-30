import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const createdStudy = await client.study.findMany({
    where: {
      UserId: user?.id,
    },
  });

  return res.json({ ok: true, createdStudy });
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
