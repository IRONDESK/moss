import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  const { date, time, time2, content } = req.body;
  console.log(date, time, time2, content);
  return;
  return res.json({ ok: true });
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
