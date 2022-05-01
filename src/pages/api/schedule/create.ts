import { NextApiRequest, NextApiResponse } from 'next';
import client from 'src/libs/server/client';
import withHandler from 'src/libs/server/withHandler';
import { withApiSession } from 'src/libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const frontData = req.body;
  console.log(frontData);
  //
  return res.json({ ok: true });
}

export default withApiSession(withHandler({ methods: ['POST'], handler }));
