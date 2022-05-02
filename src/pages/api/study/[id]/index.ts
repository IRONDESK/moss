import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  console.log(id);
  const study = await client.study.findUnique({
    where: {
      id: +id.toString(),
    },
    include: { user: { select: { id: true, username: true } } },
  });

  return res.json({ ok: true, study });
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
